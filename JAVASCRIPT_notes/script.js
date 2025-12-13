// example 1 //
let hold = document.getElementById("changeTextButton").addEventListener("click", function() {
    let paragraph = document.getElementById('myParagraph');
    paragraph.innerText = "The text has been changed!";
});
   
// example 2
//  traversal Dom

 document.getElementById("highlightFirstCity").addEventListener('click', function() {
let citiesList = document.getElementById("citiesList");
citiesList.firstElementChild.classList.add("highlight");

});

// example 3
document.getElementById("changeOrder").addEventListener('click', function() {
    let coffType = document.getElementById("coffeeType");
    coffType.textContent= "Espresso";
    coffType.style.backgroundColor = "lightyellow";
    coffType.style.padding="5px";
});


// example 4
document.getElementById("addNewItem").
addEventListener('click', function() {

        let newItem = document.createElement("li");
        newItem.textContent = "Eggs";

    document.getElementById("shoppingList").appendChild(newItem);
});

// example 5
document.getElementById("removeLastTask").addEventListener('click', function() {
    let taskList = document.getElementById("taskList");
    taskList.removeChild(taskList.lastElementChild);
});


// example 6
document.getElementById("clickMeButton").addEventListener('mouseover', function() {
    alert("Button was clicked!");
});

// example 7
document.getElementById("teaList").addEventListener('click', function(event) {
    if(event.target && event.target.matches(".teaItem  ")) {
        alert("You clicked on : " + event.target.textContent);
}
});


// example 8
document.getElementById("feedbackForm").addEventListener('submit', function(event) {
    event.preventDefault();
   
    let feedback = document.getElementById("feedbackInput").value;
    console.log(feedback);
    document.getElementById("feedbackDisplay").textContent = `Feedback is : ${feedback}`;  
});


// example 9

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("domStatus").textContent = "DOM is loaded";
   
});


// example 10
document.getElementById("toggleHighlight").addEventListener('click', function() {
    let descriptionText = document.getElementById("descriptionText");
    descriptionText.classList.toggle("highlight");
});