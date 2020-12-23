<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Frontend::{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
    @yield('myCss')
</head>
<body>
    <div id="app">
        @if(auth()->check())
            @role('writer')
                <h4>I am a writer!</h4>
                <br>
                <a class="btn btn-primary" href="{{ route('home') }}"></a>
            @else
                <h4>I am not a writer...</h4>
                <br>
                <a class="btn btn-primary" href="{{ route('dashboard') }}"></a>
            @endrole
        @else
            <main>
                @yield('content')
            </main>
        @endif   
    </div>
    @yield('myJs')
</body>
</html>
