// DROPDOWN INTERACTIVITY
// Source https://www.sliderrevolution.com/resources/css-select-styles/
$('.dropdown').click(function () {
    $(this).attr('tabindex', 1).focus();
    $(this).toggleClass('active');
    $(this).find('.dropdown-menu').slideToggle(300);
});
$('.dropdown').focusout(function () {
    $(this).removeClass('active');
    $(this).find('.dropdown-menu').slideUp(300);
});
$('.dropdown .dropdown-menu li').click(function () {
    $(this).parents('.dropdown').find('span').text($(this).text());
    $(this).parents('.dropdown').find('input').attr('value', $(this).attr('id'));
});



// VARIABLES
let dropdown1, dropdown2
const children1 = document.getElementById("dropdown1").querySelector("ul").children;
const children2 = document.getElementById("dropdown2").querySelector("ul").children;
const submit = document.getElementById("solver");



// FUNCTIONS
function updated(dropdown, value) {
    switch (dropdown) {
        case 1:
            dropdown1 = value
            break
        case 2:
            dropdown2 = value
            break
        default:
            alert("It done broke.")
    }
}

function solve() {
    let string = "Dropdown 1: " + dropdown1 + ". Dropdown 2: " + dropdown2 + "."
    alert(string)
}



// SETUP
for (let i = 0; i < children1.length; i++) {
    children1[i].addEventListener("click", () => {
        updated(1, children1[i].innerHTML)
    })
}

for (let i = 0; i < children2.length; i++) {
    children2[i].addEventListener("click", () => {
        updated(2, children2[i].innerHTML)
    })
}

submit.addEventListener("click", () => {
    solve()
});