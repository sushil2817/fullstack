let salesData = [
    { product: "Laptop", price: 1200 },
    { product: "Smartphone", price: 800 },
    { product: "Headphone", price: 150 },
    { product: "Keyboard", price: 80 },
];

let totalSales = salesData.reduce((acc, sale) => acc + sale.price, 0)

console.log(totalSales);

// items less then 50

let inventory = [
    { name: "Widget A", stock: 30 },
    { name: "Widget B", stock: 120 },
    { name: "Widget C", stock: 45 },
    { name: "Widget D", stock: 70 }
]

let lowStockItems = inventory.filter((item) => {
    return item.stock < 50;
})

console.log(lowStockItems);


let userActivity = [
    { user: "Alice", activityCount: 45 },
    { user: "Bob", activityCount: 79 },
    { user: "Charlie", activityCount: 33 },
]
// find most active user

let activeUSer = userActivity.reduce((maxUser, user) =>
    // maxUser.activityCount
    // user.activityCount
    user.activityCount > maxUser.activityCount ? user : maxUser
)

console.log(activeUSer);