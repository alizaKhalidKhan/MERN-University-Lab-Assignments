document.getElementById('addButton').addEventListener('click', addItem);

function addItem() {
    // Prompt the user for the item name
    const itemName = prompt("Enter the name of the item:");

    // Check if the user entered a valid item name
    if (itemName) {
        // Create a new list item
        const li = document.createElement('li');
        li.textContent = itemName;

        // Append the new item to the list
        document.getElementById('itemList').appendChild(li);
    } else {
        alert("Item name cannot be empty.");
    }
}
