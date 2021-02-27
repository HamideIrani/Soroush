var numberOfButtons = document.querySelectorAll(".drum").length;
for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var buttonInnerHTML = this.innerHTML;
        switch (buttonInnerHTML) {
            case ".":
                var tom1 = new Audio("sounds/happy.mp3");
                tom1.play();
                break;
           
            default:
                console.log(buttonInnerHTML);

        }

    });
}