<?php

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

class ProfilesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table(config('security-starter.tables.profiles'))
            ->insert([
                'code' => 'PROFILE_ADMIN',
                'designation' => 'Administrator privileges',
                'created_at' => Carbon::now(),
                'updated_at' => Carbon::now()
            ]);
    }
}
