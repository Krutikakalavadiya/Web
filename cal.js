// Function to display input
function insert(num) {
    console.log("Inserting: ", num);
    document.getElementById("result").value += num;
}

// Function to clear display
function clearScreen() {
    console.log("Clearing screen");
    document.getElementById("result").value = "";
}

// Function to delete last character
function backspace() {
    let result = document.getElementById("result").value;
    console.log("Backspacing: ", result);
    document.getElementById("result").value = result.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    let result = document.getElementById("result").value;
    console.log("Calculating: ", result);
    try {
        // Replace ÷ with / and × with *
        result = result.replace(/÷/g, '/').replace(/×/g, '*');
        // Evaluate the result using Function constructor
        document.getElementById("result").value = new Function('return ' + result)();
    } catch (error) {
        document.getElementById("result").value = "Error";
        console.error("Calculation error: ", error);
    }
}
