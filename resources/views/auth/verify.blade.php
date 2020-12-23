@extends('layouts.app')
@section('myCss')
    <style>
        .card{
            padding: 20px;
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;
            background-image: url({{ asset('images/swave-bg.svg') }});  
        }
    </style>
@endsection
@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card shadow">
                <h2 class="text-white mx-auto">
                    <img src="{{ asset('images/logo.png') }}" alt="" srcset="">
                </h2>
                <div class="card-body">
                    @if (session('resent'))
                        <div class="alert alert-success" role="alert">
                            {{ __('A fresh verification link has been sent to your email address.') }}
                        </div>
                    @endif

                    {{ __('Before proceeding, please check your email for a verification link.') }}
                    {{ __('If you did not receive the email') }},
                    <form class="d-inline" method="POST" action="{{ route('verification.resend') }}">
                        @csrf
                        <button type="submit" class="btn btn-link p-0 m-0 align-baseline text-white">{{ __('click here to request another') }}</button>.
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
