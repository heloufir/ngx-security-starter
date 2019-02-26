<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class UserProfilesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = DB::table(app(config('auth.providers.users.model'))->table ?: 'users')
            ->where('email', 'john.doe@gmail.com')
            ->first()
            ->id;
        $profile = DB::table(config('security-starter.tables.profiles'))
            ->where('code', 'PROFILE_ADMIN')
            ->first()
            ->id;
        DB::table(config('security-starter.tables.associations.user_profiles'))
            ->insert([
                'refUser' => $user,
                'refProfile' => $profile
            ]);
    }
}
