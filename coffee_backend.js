const coffeeMenu = [
    {
        id: 1,
        name: "Espresso",
        price: 120
    },
    {
        id: 2,
        name: "Cappuccino",
        price: 180
    },
    {
        id: 3,
        name: "Latte",
        price: 200
    },
    {
        id: 4,
        name: "Cold Coffee",
        price: 160
    }
];

// Display all coffee items
function displayMenu() {
    console.log("----- Brew Bliss Coffee Menu -----");

    coffeeMenu.forEach((coffee) => {
        console.log(
            `${coffee.id}. ${coffee.name} - ₹${coffee.price}`
        );
    });
}

// Search coffee by name
function searchCoffee(name) {
    const coffee = coffeeMenu.find(
        item => item.name.toLowerCase() === name.toLowerCase()
    );

    if (coffee) {
        console.log(
            `Coffee found: ${coffee.name} - ₹${coffee.price}`
        );
    } else {
        console.log("Coffee not found");
    }
}

// Calculate total bill
function calculateBill(price, quantity) {
    const total = price * quantity;

    console.log(`Total Bill: ₹${total}`);

    return total;
}

// Backend execution
displayMenu();

searchCoffee("Latte");

calculateBill(180, 2);