let orders =
[
    [
        "Latte",
        "Tea",
        "Espresso"
    ],
    [
        "Croissant",
        "Muffin",
        "Bagel"
    ]
];

console.log("Number of drinks:", orders[0].length);
console.log("Number of pastries:", orders[1].length);

console.log("Order 1:", orders[0][0], orders[1][0]);
console.log("Order 2:", orders[0][1], orders[1][1]);
console.log("Order 3:", orders[0][2], orders[1][2]);          

let row = 0;
let item = 0;

console.log("Drink 1:", orders[row][item]);

row = 0;
item = 1;

console.log("Drink 2:", orders[row][item]);

row = 0;
item = 2;

console.log("Drink 3:", orders[row][item]);

row = 1;
item = 0;

console.log("Pastry 1:", orders[row][item]);

row = 1;
item = 1;

console.log("Pastry 2:", orders[row][item]);

row = 1;
item = 2;

console.log("Pastry 3:", orders[row][item]);

for (let i = 0; i < orders[0].length; i++)
{
    console.log("Drink:", orders[0][i]);
}

let newLength = orders[0].push("flat white");
console.log("Number of drinks:", newLength);

row = 0;
item = newLength - 1;
console.log("New drink:", orders[row][item]);