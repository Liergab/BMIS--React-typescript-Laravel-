<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\AdminController;
use App\Http\Controllers\api\ResidentController;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::post('/register', [AuthController::class, 'registerAdmin']);
Route::post('/login', [AuthController::class, 'loginAdmin']);

Route::post('/register/resident', [AuthController::class, 'residentRegister']);
Route::post('/login/resident', [AuthController::class, 'loginregister']);

Route::group(['middleware' => ['auth:api']], function(){
    Route::get('/profile',[AuthController::class, 'profile']);
    Route::put('/admin/residents/{residentId}/update-status', [AdminController::class, 'updateResidentStatus']);
});

Route::get('/admin',[AuthController::class, 'getall']);
Route::get('/resident/pending',[ResidentController::class, 'getAllResidentPending']);
