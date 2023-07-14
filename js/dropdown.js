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
let numWires, serialNum, redWires, blueWires, yellowWires, blackWires, whiteWires, lastWire
const children1 = document.getElementById("numWiresDropdown").querySelector("ul").children;
const children2 = document.getElementById("serialNumDropdown").querySelector("ul").children;
const children3 = document.getElementById("numRedWiresDropdown").querySelector("ul").children;
const children4 = document.getElementById("numBlueWiresDropdown").querySelector("ul").children;
const children5 = document.getElementById("numYellowWiresDropdown").querySelector("ul").children;
const children6 = document.getElementById("numBlackWiresDropdown").querySelector("ul").children;
const children7 = document.getElementById("numWhiteWiresDropdown").querySelector("ul").children;
const children8 = document.getElementById("lastWireDropdown").querySelector("ul").children;
const submit = document.getElementById("solver");



// FUNCTIONS
// Updates variables based on dropdowns
function update(dropdown, value) {
    switch (dropdown) {
        case 1:
            numWires = value
            break
        case 2:
            serialNum = value
            break
        case 3:
            redWires = value
            break
        case 4:
            blueWires = value
            break
        case 5:
            yellowWires = value
            break
        case 6:
            blackWires = value
            break
        case 7:
            whiteWires = value
            break
        case 8:
            lastWire = value
            break
        default:
            console.error("Error in update switch. Invalid value:", value)
    }
}

// Provides player with solution
function solveManager() {
    switch (numWires) {
        case "3":
            alert("3 Wire Solving")
            if (redWires === "0") {
                alert("Cut the second wire.");
                return;
            }
            if (lastWire === "White") {
                alert("Cut the last wire.");
                return;
            }
            if (blueWires === "2+") {
                alert("Cut the last blue wire.");
                return;
            } else {
                alert("Cut the last wire.");
            }
            break;
        case "4":
            alert("4 Wire Solving")
            if (redWires === "2+" && serialNum === "Odd") {
                alert("Cut the last red wire.");
                return;
            }
            if (lastWire === "Yellow" && redWires === "0") {
                alert("Cut the first wire.");
                return;
            }
            if (blueWires === "1") {
                alert("Cut the first wire.");
                return;
            }
            if (yellowWires === "2+") {
                alert("Cut the last wire.");
                return;
            } else {
                alert("Cut the second wire.");
            }
            break;
        case "5":
            alert("5 Wire Solving")
            if (lastWire === "Black" && serialNum === "Odd") {
                alert("Cut the fourth wire.");
                return;
            }
            if (redWires === "1" && yellowWires === "2+") {
                alert("Cut the first wire.");
                return;
            }
            if (blackWires === "0") {
                alert("Cut the second wire.");
                return;
            } else {
                alert("Cut the first wire.");
            }
            break;
        case "6":
            alert("6 Wire Solving");
            if (yellowWires === "0" && serialNum === "Odd") {
                alert("Cut the third wire.");
                return;
            }
            if (yellowWires === "1" && whiteWires === "2+") {
                alert("Cut the fourth wire.");
                return;
            }
            if (redWires === "0") {
                alert("Cut the last wire.");
                return;
            } else {
                alert("Cut the fourth wire.");
            }
            break;
        default:
            console.error("Error in solve switch. Invalid value:", numWires)
    }
}



// SETUP
for (let i = 0; i < children1.length; i++) {
    children1[i].addEventListener("click", () => {
        update(1, children1[i].innerHTML)
    })
}

for (let i = 0; i < children2.length; i++) {
    children2[i].addEventListener("click", () => {
        update(2, children2[i].innerHTML)
    })
}

for (let i = 0; i < children3.length; i++) {
    children3[i].addEventListener("click", () => {
        update(3, children3[i].innerHTML)
    })
}

for (let i = 0; i < children4.length; i++) {
    children4[i].addEventListener("click", () => {
        update(4, children4[i].innerHTML)
    })
}

for (let i = 0; i < children5.length; i++) {
    children5[i].addEventListener("click", () => {
        update(5, children5[i].innerHTML)
    })
}

for (let i = 0; i < children6.length; i++) {
    children6[i].addEventListener("click", () => {
        update(6, children6[i].innerHTML)
    })
}

for (let i = 0; i < children7.length; i++) {
    children7[i].addEventListener("click", () => {
        update(7, children7[i].innerHTML)
    })
}

for (let i = 0; i < children8.length; i++) {
    children8[i].addEventListener("click", () => {
        update(8, children8[i].innerHTML)
    })
}

submit.addEventListener("click", () => {
    if (numWires && serialNum && redWires && blueWires && yellowWires && blackWires && whiteWires && lastWire) {
        solveManager();
    } else {
        alert("Please fill in all fields.")
    }
});