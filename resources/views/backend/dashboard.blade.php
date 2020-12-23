@extends('layouts.backend_app')

@section('myCss')
    
@endsection

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">Dashboard</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                    You are logged in!
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('myJs')
    <script src="{{ asset('assets/libs/jquery/dist/jquery.min.js') }}"></script>
    <!-- Bootstrap tether Core JavaScript -->
    <script src="{{ asset('assets/libs/popper.js/dist/umd/popper.min.js') }}"></script>
    <script src="{{ asset('assets/libs/bootstrap/dist/js/bootstrap.min.js') }}"></script>
    <script src="{{ asset('assets/libs/perfect-scrollbar/dist/perfect-scrollbar.jquery.min.js') }}"></script>
    <script src="{{ asset('assets/extra-libs/sparkline/sparkline.js') }}"></script>
    <!--Wave Effects -->
    <script src="{{ asset('js/waves.js') }}"></script>
    <!--Menu sidebar -->
    <script src="{{ asset('js/sidebarmenu.js') }}"></script>
    <!--Custom JavaScript -->
    <script src="{{ asset('js/custom.min.js') }}"></script>
    <!--This page JavaScript -->
    <script src="{{ asset('js/dashboard1.js') }}"></script>
    <!-- Charts js Files -->
    <!-- <script src="{{ asset('/assets/libs/flot/excanvas.js') }}"></script>
    <script src="{{ asset('/assets/libs/flot/jquery.flot.js') }}"></script>
    <script src="{{ asset('/assets/libs/flot/jquery.flot.pie.js') }}"></script>
    <script src="{{ asset('/assets/libs/flot/jquery.flot.time.js') }}"></script>
    <script src="{{ asset('/assets/libs/flot/jquery.flot.stack.js') }}"></script>
    <script src="{{ asset('/assets/libs/flot/jquery.flot.crosshair.js') }}"></script>
    <script src="{{ asset('/assets/libs/flot.tooltip/js/jquery.flot.tooltip.min.js') }}"></script>
    <script src="{{ asset('/dist/js/pages/chart/chart-page-init.js') }}"></script> -->
    
    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <script>

        $('[data-toggle="tooltip"]').tooltip();
        $(".preloader").fadeOut();
        // ============================================================== 
        // Login and Recover Password 
        // ============================================================== 
        $('#to-recover').on("click", function() {
            $("#loginform").slideUp();
            $("#recoverform").fadeIn();
        });
        $('#to-login').click(function(){
            
            $("#recoverform").hide();
            $("#loginform").fadeIn();
        });
    </script>
@endsection