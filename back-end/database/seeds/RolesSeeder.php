<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table(config('security-starter.tables.roles'))
            ->insert([
                [
                    'code' => 'ROLE_ROLES',
                    'designation' => 'Roles management access',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ], [
                    'code' => 'ROLE_PROFILES',
                    'designation' => 'Profiles management access',
                    'created_at' => Carbon::now(),
                    'updated_at' => Carbon::now()
                ]
            ]);
    }
}
