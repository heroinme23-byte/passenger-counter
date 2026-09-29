// INITIALIZE THE count as 0
// Listen for clicks on the increment button
// Increment the count variable when the button is clicked
// Change the count-el in the HTML to reflect the new count

// 1. Grab the save-el paragrah and store it in a variable called saveEl
let countEl = document.getElementById("count-el")
let count = 0

let saveEl = document.getElementById("save-el")

let totalEl = document.getElementById("total-el");
let total = 0;

function increment() {
    count += 1
    total += 1
    countEl.textContent = count
    
};

function save() {
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let savenCount = count + " - "

    
    // 3. Render the variable in the saveEl using innerText
    //saveEl.innerText += savenCount;

    // Google:
    // innerText alternative mdn

    saveEl.textContent += savenCount; // innerText struggles with anything thats not human-readable eg whitespace
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count)
    countEl.textContent = 0
    count = 0
};

function showTotal() {
    // Create a variable that cntains both total-El and total
    totalEl.textContent = "Total Counted: " + total;
    console.log(totalOutput)
}
