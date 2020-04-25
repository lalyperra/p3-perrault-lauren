//array of 10 strings that will show with button click
//entree.sort(); will go alphabetically
var entree = ["Peanut Butter and Jelly", "Cheeseburger", "Chicken Strips", "Pasta Salad", "Hamburger", "Ham and Cheese Sandwich", "Caesar Salad", "Grilled Cheese with Ham", "Philly Cheesesteak", "Spaghetti"];

//randomize the array, use innerHTML method to add first item each click
function myFunction1() {
    entree.sort(function (a, b) { return 0.5 - Math.random() });
    document.getElementById("entree").innerHTML = entree;
}
