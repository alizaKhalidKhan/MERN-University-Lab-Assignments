let currentIndex = 0;

function MyFunction() {
    // Change the background color to the current color
    document.body.style.backgroundColor = color[currentIndex];
    // Move to the next color Using % colors.length resets the index back to 0 once it reaches the length of the array.
    currentIndex = (currentIndex + 1) % color.length;
}
const color =['red' , 'purple' , 'black' , 'yellow' , 'lightblue' , 'blue', 'magenta' , 'plum' , 'aqua'];
