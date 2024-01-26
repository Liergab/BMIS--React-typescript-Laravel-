<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('residents', function (Blueprint $table) {
            $table->id();
            $table->string('email')->unique();
            $table->string('address');
            $table->string('password');
            $table->string('first_name');
            $table->string('last_name');
            $table->integer('age');
            $table->string('birth_place');
            $table->date('birth_date');
            $table->enum('status', ['pending', 'approved', 'disapproved'])->default('pending');
            $table->rememberToken();
            $table->timestamp('email_verified_at')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('residents');
    }
};
