let momentDate = moment().format("dddd, MMMM, Do, YYYY");
let dateText = document.querySelector("#currentDay");
let task = "";
let paragraph = document.querySelector(".textarea");

// display the current date in the webpage
function displayDate() {
    dateText.innerHTML = momentDate;
}
displayDate();

// code to refresh the page automatically every hour
setTimeout(function () {
    location.reload();
}, (1000 * 60) * 60);

// textarea is clicked
$(".time-block").on("click", "p", function () {
    let text = $(this)
        .text()
        .trim();

    let newText = $("<textarea>").addClass("col-10").val(text);
    $(this).replaceWith(newText);

    newText.trigger("focus");
});

// text area is unclicked
$(".time-block").on("blur", "textarea", function () {
    let text = $(this).val();

    let para = $("<p>").addClass("col-10 textarea").text(text);

    $(this).replaceWith(para);

    task += text;
    saveTasks();
});

// save text to localStorage when save button is clicked
let saveTasks = function () {
    localStorage.setItem("task", task);
}

let loadTasks = function () {
    let savedTask = localStorage.getItem("task");
    paragraph.innerHTML = savedTask;
}

loadTasks();
