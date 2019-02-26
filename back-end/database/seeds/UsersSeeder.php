<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class UsersSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table(app(config('auth.providers.users.model'))->table ?: 'users')
            ->insert([
                'email' => 'john.doe@gmail.com',
                'name' => 'John DOE',
                'password' => bcrypt('secret'),
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
    }
}
