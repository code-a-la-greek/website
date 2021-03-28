const buttonUp = document.querySelector("#buttonUp");

function scrollFunction() {
    if (
        document.body.scrollTop > 400 ||
        document.documentElement.scrollTop > 400
        && window.innerWidth < 1000
    ) {
        buttonUp.style.visibility = "visible";
    } else{buttonUp.style.visibility = "hidden";}
}; 
function goingUp() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

export {goingUp,scrollFunction};