<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // Execute roles seeder
        $this->call(RolesSeeder::class);

        // Execute profiles seeder
        $this->call(ProfilesSeeder::class);

        // Execute profile roles seeder
        $this->call(ProfileRolesSeeder::class);

        // Execute users seeder
        $this->call(UsersSeeder::class);

        // Execute user profiles seeder
        $this->call(UserProfilesSeeder::class);
    }
}
