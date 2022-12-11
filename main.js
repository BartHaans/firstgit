var toggleNavStatus = false;

var toggleNav = function() {
    var getSidebar = document.querySelector(".nav-sidebar");
    var getSidebarUl = document.querySelector(".nav-sidebar ul");
    var getSidebarTitle = document.querySelector(".nav-sidebar span");
    var getSidebarLinks = document.querySelectorAll(".nav-sidebar a");

    if (toggleNavStatus === false) {
        getSidebarUl.style.visibility = "visible";
        getSidebar.style.width = "272px";
        getSidebarTitle.style.opacity = "0.5";

        //Loop for links
        var arrayLength = getSidebarLinks.length;
        for (var i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "1";
        }

        toggleNavStatus = true;
    }

    else if (toggleNavStatus === true) {
        getSidebar.style.width = "60px";
        getSidebarTitle.style.opacity = "0";

        //Loop for links
        var arrayLength = getSidebarLinks.length;
        for (var i = 0; i < arrayLength; i++) {
            getSidebarLinks[i].style.opacity = "0";
        }

        getSidebarUl.style.visibility = "hidden";

        toggleNavStatus = false;
    }

    else if (toggleNavStatus === true) {

    }
}

function color(z) {
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementsByTagName("body")[0].style.backgroundColor=b;

    var element = document.getElementById("colorName");
    element.innerHTML = "z";
}