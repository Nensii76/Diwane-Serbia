function displayOptions() {

    var counter = 0;

    document.getElementById("options").style.display = "block";
    document.getElementById("prikaz-opcija").style.display = "none";


    var display = setInterval(function () {

        if(counter == 150){
            clearInterval(display);
            document.getElementById("options").setAttribute("status","displayed");
        }else{
            counter+=10;
            document.getElementById("options").style.height = counter+"px";
        }

    },2)

}

function hideOptions() {

    var counter = 150;

    var display = setInterval(function () {

        if(counter == 0){
            clearInterval(display);
            document.getElementById("options").style.display = "none";
            document.getElementById("options").setAttribute("status","hidden");
            document.getElementById("prikaz-opcija").style.display = "block";
        }else{
            counter-=10;
            document.getElementById("options").style.height = counter+"px";
        }

    },2)

}

function mainContainerStyle(style) {
    if(style == "fluid"){
        document.getElementById("main-container").style.width = "100%";
        document.getElementById("main-container").style.maxWidth = "100%";
        document.getElementById("main-container").style.float = "left";
    }else if(style == "1200"){
        document.getElementById("main-container").style.maxWidth = "1200px";
        document.getElementById("main-container").style.float = "none";
        document.getElementById("main-container").style.margin = "auto";
    }else if(style == "960"){
        document.getElementById("main-container").style.maxWidth = "960px";
        document.getElementById("main-container").style.float = "none";
        document.getElementById("main-container").style.margin = "auto";
    }
}

function hideJsBlock(){
    document.getElementById("js-block").style.display = "none";
}

function showMenu() {
    if(document.getElementById("menu").style.display == "block"){
        document.getElementById("menu").style.display = "none";
    }else{
        document.getElementById("menu").style.display = "block";
    }
}