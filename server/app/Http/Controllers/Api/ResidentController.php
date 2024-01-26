<?php

namespace App\Http\Controllers\api;

use App\Models\Resident;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class ResidentController extends Controller
{
    public function getAllResidentPending(){
        $resident = Resident::where('status','pending')->get();

        return response()->json([
            'status'   => 200,
            'resident' => $resident
        ],200);
    }
}
