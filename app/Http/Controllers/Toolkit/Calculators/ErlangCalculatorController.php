<?php

namespace App\Http\Controllers\Toolkit\Calculators;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ErlangCalculatorController extends Controller
{
    public function index()
    {
        return view('toolkit.calculators.erlang.index', []);
    }
}
