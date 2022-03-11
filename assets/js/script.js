let momentDate = moment().format("dddd, MMMM, Do, YYYY");
let dateText = document.querySelector("#currentDay");
let timeBlock = document.querySelectorAll("textarea");
let currenthour = moment().hour();

// display the current date in the webpage
function displayDate() {
    dateText.innerHTML = momentDate;
}
displayDate();

// code to refresh the page automatically every hour
setTimeout(function () {
    location.reload();
}, (1000 * 60) * 60);


// check the current time of day and apply classes accordingly
let timeOfDay = function () {
    for (let i = 0; i < timeBlock.length; i++) {
        if (timeBlock[i].id > currenthour) {
            timeBlock[i].classList.add("future");
        } else if (timeBlock[i].id < currenthour) {
            timeBlock[i].classList.add("past");
        } else {
            timeBlock[i].classList.add("present");
        };
    };
};

timeOfDay();

function saveText() {

    var savebuttonNine = document.querySelector("#nine");
    savebuttonNine.addEventListener("click", function () {
        text = timeBlock[0].value;
        localStorage.setItem("nineText", JSON.stringify(text));
    });

    var savebuttonTen = document.querySelector("#ten");
    savebuttonTen.addEventListener("click", function () {
        text = timeBlock[1].value;
        localStorage.setItem("tenText", JSON.stringify(text));
    });

    var savebuttonEleven = document.querySelector("#eleven");
    savebuttonEleven.addEventListener("click", function () {
        text = timeBlock[2].value;
        localStorage.setItem("elevenText", JSON.stringify(text));
    });

    var savebuttonTwelve = document.querySelector("#twelve");
    savebuttonTwelve.addEventListener("click", function () {
        text = timeBlock[3].value;
        localStorage.setItem("twelveText", JSON.stringify(text));
    });

    var savebuttonThirtreen = document.querySelector("#thirteen");
    savebuttonThirtreen.addEventListener("click", function () {
        text = timeBlock[4].value;
        localStorage.setItem("thirteenText", JSON.stringify(text));
    });

    var savebuttonFourteen = document.querySelector("#fourteen");
    savebuttonFourteen.addEventListener("click", function () {
        text = timeBlock[5].value;
        localStorage.setItem("fourteenText", JSON.stringify(text));
    });

    var savebuttonFifteen = document.querySelector("#fifteen");
    savebuttonFifteen.addEventListener("click", function () {
        text = timeBlock[6].value;
        localStorage.setItem("fifteenText", JSON.stringify(text));
    });

    var savebuttonSixteen = document.querySelector("#sixteen");
    savebuttonSixteen.addEventListener("click", function () {
        text = timeBlock[7].value;
        localStorage.setItem("sixteenText", JSON.stringify(text));
    });

    var savebuttonSeventeen = document.querySelector("#seventeen");
    savebuttonSeventeen.addEventListener("click", function () {
        text = timeBlock[8].value;
        localStorage.setItem("seventeenText", JSON.stringify(text));
    });
}

function loadText() {
    previousTextNine = JSON.parse(localStorage.getItem("nineText"));
    timeBlock[0].value = previousTextNine
    previousTextTen = JSON.parse(localStorage.getItem("tenText"));
    timeBlock[1].value = previousTextTen
    previousTextEleven = JSON.parse(localStorage.getItem("elevenText"));
    timeBlock[2].value = previousTextEleven
    previousTextTwelve = JSON.parse(localStorage.getItem("twelveText"));
    timeBlock[3].value = previousTextTwelve
    previousTextThirteen = JSON.parse(localStorage.getItem("thirteenText"));
    timeBlock[4].value = previousTextThirteen
    previousTextFourteen = JSON.parse(localStorage.getItem("fourteenText"));
    timeBlock[5].value = previousTextFourteen
    previousTextFivteen = JSON.parse(localStorage.getItem("fifteenText"));
    timeBlock[6].value = previousTextFivteen
    previousTextSixteen = JSON.parse(localStorage.getItem("sixteenText"));
    timeBlock[7].value = previousTextSixteen
    previousTextSeventeen = JSON.parse(localStorage.getItem("seventeenText"));
    timeBlock[8].value = previousTextSeventeen


}

saveText();
loadText();
