<?php

namespace App\Http\Controllers\Api;

use App\Models\Admin;
use App\Models\Resident;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Facades\JWTAuth;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

class AuthController extends Controller
{

    // register admin
    public function registerAdmin(Request $request){
     $request->validate([
            'first_name' => 'required|string',
            'last_name'  => 'required|string',
            'email'      => 'required|email',
            'password'   => 'required|confirmed'
        ]);

        $admin = Admin::create([
            'first_name' => $request->first_name,
            'last_name'  => $request->last_name,
            'email'      => $request->email,
            'password'   => Hash::make($request->password)
        ]);
        return response()->json([
            'status' => 201,
            'admin' => $admin
        ],201);
    }


    // register resident
    public function residentRegister(Request $request){
        $request->validate([
            'first_name'  => 'required|string',
            'last_name'   => 'required|string',
            'email'       => 'required|email|unique:residents,email',
            'address'     => 'nullable|string',
            'password'    => 'required|confirmed',
            'age'         => 'nullable|integer',
            'birth_place' => 'nullable|string',
            'birth_date'  => 'nullable|date',
        ]);

        $resident = Resident::create([
            'first_name'  => $request->first_name,
            'last_name'   => $request->last_name,
            'email'       => $request->email,
            'address'     => $request->address,
            'password'    => Hash::make($request->password),
            'age'         => $request->age,
            'birth_place' => $request->birth_place,
            'birth_date'  => $request->birth_date,
        ]);

        return response()->json([
            'status' => 201,
            'resident' => $resident
        ],201);
    }

    // login admin
    public function loginAdmin(Request $request){
        $validate = $request->validate([
            'email'    => 'required|email',
            'password' => 'required'
        ]);
        // Auth::shouldUse('admins');
        if ($token = JWTAuth::attempt($validate)) {
            
            $user = auth()->user(); 

            if($user->role == 'admin'){
                return response()->json([
                    "status"  => true,
                    "message" => "User logged in successfully",
                    "token"   => $token,
                    "user"    => $user,
                ],200);
            }else{
                return response()->json([
                    "status"  => false,
                    "message" => "Unauthorized access",
                ],401);
            }
            
        }else{
            return response()->json([
                "status"  => 'fail',
                "message" => "Invalid details"
            ],401);
        }
    
        
    }

    // loginregister
    public function loginregister(Request $request){
        $validate = $request->validate([
            'email'    => 'required|email',
            'password' => 'required'
        ]);
        $credentials = [
            'email' => $validate['email'],
            'password' => $validate['password'],
        ];
        Auth::shouldUse('residents');

        $token = JWTAuth::attempt($credentials);

        if($token){
            $res = Auth::user();

            if($res->status == 'approved'){
                $newToken = JWTAuth::fromUser($res);

                return response()->json([
                    'status' => 'success',
                    'message' => 'Login successful',
                    'access_token' => $newToken,
                    'resident' => $res
                ],200);
            }else {
                // User is not approved
                return response()->json([
                    'status' => 'fail',
                    'message' => 'Failed to login. Account not approved.'
                ], 401);
            }
        }else {
            // Invalid credentials
            return response()->json([
                'status' => 'fail',
                'message' => 'Invalid email or password.'
            ], 401);
        }
    }

    public function profile(){
        $admin = auth()->user();
        return response()->json([
            "status"  => true,
            "message" => "Profile data",
            "data"    => $admin
        ],200);
    }

    public function getall(){
        $admin = Admin::all();

        return response()->json([
             $admin
        ], 200);
    }
}
