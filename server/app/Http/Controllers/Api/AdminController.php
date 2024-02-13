<?php

namespace App\Http\Controllers\Api;

use App\Models\Resident;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class AdminController extends Controller
{
    public function updateResidentStatus(Request $request, $residentId)
    {
        $request->validate([
            'status' => 'required|in:approved,disapproved',
        ]);

        $resident = Resident::findOrFail($residentId);
        $resident->update(['status' => $request->input('status')]);

        return response()->json(['message' => 'Resident status updated successfully']);
    }

    public function getResidentById($residentId)
    {
        $resident = Resident::find($residentId);

        if($resident){
            return response()->json([
                $resident
            ],200);
        }else{
            return response()->json([
                'error' => 'No resident found'
            ],404);
        }
    }

    public function getAllResidentPending(){
        $resident = Resident::where('status','pending')->get();

        return response()->json([
            $resident
        ],200);
    }

    public function getResidentApproved()
    {
        $resident = Resident::where('status', 'approved')->get();
    
            return response()->json([
                $resident
            ], 200);
      
    }

    public function getResidentDisapproved()
    {
        $resident = Resident::where('status', 'disapproved')->get();
    
            return response()->json([
                $resident
            ], 200);
      
    }

}
