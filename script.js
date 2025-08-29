// ================= Part 1: Variables & Conditionals =================
let age = 22;
let isStudent = true;

// Conditional logic
if (age >= 18 && isStudent) {
    console.log("Adult student");
} else if (age >= 18) {
    console.log("Adult");
} else {
    console.log("Under 18");
}

// ================= Part 2: Custom Functions =================
// Function 1: Add two numbers
function addNumbers(a, b) {
    return a + b;
}

// Function 2: Greet a user
function greetUser(name) {
    return `Hello, ${name}! Welcome!`;
}

// Test functions
console.log(addNumbers(5, 10));
console.log(greetUser("Melkamu"));

// ================= Part 3: Loops =================
// Loop 1: For loop
for (let i = 1; i <= 5; i++) {
    console.log("For loop iteration:", i);
}

// Loop 2: While loop
let j = 1;
while (j <= 5) {
    console.log("While loop iteration:", j);
    j++;
}

// ================= Part 4: DOM Interactions =================

// Interaction 1: Greet user
document.getElementById("greetBtn").addEventListener("click", function() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("greeting").textContent = greetUser(name);
});

// Interaction 2: Countdown
document.getElementById("countBtn").addEventListener("click", function() {
    let countDisplay = document.getElementById("countDisplay");
    countDisplay.textContent = ""; // Clear previous
    for (let i = 5; i >= 0; i--) {
        setTimeout(() => {
            countDisplay.textContent = `Countdown: ${i}`;
        }, (5 - i) * 1000);
    }
});

// Interaction 3: Generate dynamic list
document.getElementById("listBtn").addEventListener("click", function() {
    let list = document.getElementById("dynamicList");
    list.innerHTML = ""; // Clear previous items
    let items = ["Item 1", "Item 2", "Item 3", "Item 4"];
    items.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    });
});
