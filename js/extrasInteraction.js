// Animation handler
$("#animation_link").on({
    mouseover: function() {
        $("body").css("backgroundColor", "#fcc8da");
        // $("body").css("backgroundImage", "linear-gradient(70deg, blue, pink");
        // $("body").css("backgroundImage", "url('assets/extras/eye.jpg')");

        $("#animation_link").css("backgroundColor", "#f871a0");
    },
    mouseleave: function() {
        $("body").css("backgroundColor", "white");
        // $("body").css("backgroundImage", "none");

        $("#animation_link").css("backgroundColor", "transparent");
    }
});

// 3D handler
$("#3d_link").on({
    mouseover: function() {
        $("body").css("backgroundColor", "#a0e4e8");

        $("#3d_link").css("backgroundColor", "#46cbd2");

    },
    mouseleave: function() {
        $("body").css("backgroundColor", "white");

        $("#3d_link").css("backgroundColor", "transparent");

    }
});

// Graphic Design handler
$("#graphic_link").on({
    mouseover: function() {
        $("body").css("backgroundColor", "#ffe7ac");
        // $("body").css("backgroundImage", "url('assets/extras/diamond1.png')");

        $("#graphic_link").css("backgroundColor", "#f7c545");
    },
    mouseleave: function() {
        $("body").css("backgroundColor", "white");
        // $("body").css("backgroundImage", "none");

        $("#graphic_link").css("backgroundColor", "transparent");
    }
});

// Traditional handler
$("#traditional_link").on({
    mouseover: function() {
        $("body").css("backgroundColor", "#d7f8ae");
        // $("body").css("backgroundImage", "url('assets/extras/ink1.jpg')");

        $("#traditional_link").css("backgroundColor", "#97e637");
    },
    mouseleave: function() {
        $("body").css("backgroundColor", "white");
        // $("body").css("backgroundImage", "none");

        $("#traditional_link").css("backgroundColor", "transparent");
    }
});
