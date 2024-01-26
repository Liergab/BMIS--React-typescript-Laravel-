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
}
