<?php

namespace App\Http\Controllers;

use App\Core\FileHelper;
use App\Rules\UserExists;
use App\User;
use Heloufir\SecurityStarter\Core\Paginator;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    use Paginator, FileHelper;

    /**
     * Display a listing of the resource.
     *
     * @param Request $request
     *      The request object
     *
     * @return JsonResponse
     *
     * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
     */
    public function index(Request $request): JsonResponse
    {
        $query = User::query();
        $query->with(['profiles']);
        return response()->json(self::paginate($query, $request), 200);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request $request
     *      The request object
     *
     * @return JsonResponse
     *
     * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
     */
    public function store(Request $request): JsonResponse
    {
        $rules = [
            'email' => [
                'required',
                'max:255',
                'unique:users,email'
            ],
            'name' => [
                'required',
                'max:255'
            ],
            'password' => [
                'required',
                'confirmed'
            ],
            'profiles' => [
                'string'
            ]
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json(collect($validator->getMessageBag())->flatten()->toArray(), 403);
        }
        $user = new User();
        $user->email = $request->get('email');
        $user->name = $request->get('name');
        $user->password = bcrypt($request->get('password'));
        if ($request->has('picture')) {
            $user->picture = $this->upload($request->picture, storage_path('uploads/users/avatars'));
        }
        $user->save();
        if ($request->has('profiles')) {
        	$profiles = explode(',', $request->get('profiles'));
            foreach ($profiles as $profile) {
                DB::table(config('security-starter.tables.associations.user_profiles'))
                    ->insert([
                        'refUser' => $user->id,
                        'refProfile' => $profile
                    ]);
            }
        }
        return response()->json(User::where('id', $user->id)->with(['profiles'])->first(), 200);
    }

    /**
     * Display the specified resource.
     *
     * @param  int $id
     *      The user id
     *
     * @return JsonResponse
     *
     * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
     */
    public function show($id): JsonResponse
    {
        $query = User::query();
        $query->where('id', $id);
        $query->with(['profiles']);
        return response()->json($query->first(), $query->count() == 0 ? 404 : 200);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  Request $request
     *      The request object
     * @param  int $id
     *      The user id
     *
     * @return JsonResponse
     */
    public function update(Request $request, $id): JsonResponse
    {
        $rules = [
            'email' => [
                'required',
                'max:255',
                new UserExists($id),
                'unique:users,email,' . $id
            ],
            'name' => [
                'required',
                'max:255'
            ],
            'password' => [
                'confirmed'
            ],
            'profiles' => [
                'string'
            ]
        ];
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json(collect($validator->getMessageBag())->flatten()->toArray(), 403);
        }
        $user = User::where('id', $id)->first();
        $user->name = $request->get('name');
        $user->email = $request->get('email');
        if ($request->get('password')) {
            $user->password = bcrypt($request->get('password'));
        }
        if ($request->has('picture')) {
            if ($user->picture != null) {
                unlink(storage_path('uploads/users/avatars') . '/' . $user->picture);
            }
            $user->picture = $this->upload($request->picture, storage_path('uploads/users/avatars'));
        }
        $user->save();
        DB::table(config('security-starter.tables.associations.user_profiles'))
            ->where('refUser', $id)
            ->delete();
        if ($request->has('profiles')) {
            $profiles = explode(',', $request->get('profiles'));
            foreach ($profiles as $profile) {
                DB::table(config('security-starter.tables.associations.user_profiles'))
                    ->insert([
                        'refUser' => $user->id,
                        'refProfile' => $profile
                    ]);
            }
        }
        return response()->json(User::where('id', $user->id)->with(['profiles'])->first(), 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Request $request
     *      The request object
     * @param  int $id
     *      The user id
     *
     * @return JsonResponse
     *
     * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
     */
    public function destroy(Request $request, int $id): JsonResponse
    {
        $rules = [
            'id' => [
                new UserExists($id)
            ]
        ];
        $request->request->add(['id' => $id]);
        $validator = Validator::make($request->all(), $rules);
        if ($validator->fails()) {
            return response()->json(collect($validator->getMessageBag())->flatten()->toArray(), 403);
        }
        DB::table(config('security-starter.tables.associations.user_profiles'))
            ->where('refUser', $id)
            ->delete();
        return response()->json(User::where('id', $id)->delete(), 200);
    }

    /**
     * Download the users picture
     *
     * @param int $id The user's id
     *
     * @return JsonResponse|null|\Symfony\Component\HttpFoundation\BinaryFileResponse
     *
     * @author EL OUFIR Hatim <eloufirhatim@gmail.com>
     */
    public function picture(int $id)
    {
        $user = User::where('id', $id)->first();
        if ($user == null || $user->picture == null) {
            return null;
        }
        return $this->download(storage_path('uploads/users/avatars'), $user->picture);
    }
}
