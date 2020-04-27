//array of 10 strings that will show with button click
//entree.sort(); will go alphabetically
const foodArray = [
    {
        mealTitle: 'Peanut Butter and Jelly',
        mealImage:  'images/pbj.jpg',
        mealDescription: 'Jiff PB with Strawberry Jelly on white bread'
    },
    {
        mealTitle: 'Cheeseburger',
        mealImage:  'images/cheeseburger.jpg',
        mealDescription: 'Single patty with american cheese'
    },
    {
        mealTitle: 'Chicken Strips',
        mealImage:  'images/chickenStrips.jpg',
        mealDescription: '4 chicken strips with ranch sauce'
    },
    {
        mealTitle: 'Pasta Salad',
        mealImage:  'images/pastaSalad.jpg',
        mealDescription: 'Cold pasta salad with tomatoes and pepperoni'
    },
    {
        mealTitle: 'Spaghetti',
        mealImage:  'images/spaghettiMeat.jpg',
        mealDescription: 'Spaghetti with red sauce and meatballs'
    },
     {
        mealTitle: 'Grilled Cheese',
        mealImage:  'images/grilledCheese.jpg',
        mealDescription: 'Grilled white bread with American cheese'
    },
    {
        mealTitle: 'Nachos',
        mealImage:  'images/nachos.jpg',
        mealDescription: 'Nacho chips with hamburger meat and salsa'
    },
    {
        mealTitle: 'Ham and Cheese Sliders',
        mealImage:  'images/hamCheese.jpg',
        mealDescription: 'Hawaiian roles with ham and swiss cheese'
    },
    {
        mealTitle: 'Rice and Bean Burrito',
        mealImage:  'images/beanBurrito.jpg',
        mealDescription: 'Bean burrito with salsa and sour cream'
    },
    {
        mealTitle: 'Chicken Tacos',
        mealImage:  'images/tacos.jpg',
        mealDescription: 'Chicken tacos with salsa and sour cream'
    },
]

foodArray[0]mealTitle,
foodArray[0]mealImage,
foodArray[0]mealDescription,


//randomize the array, use innerHTML method to add first item each click
function myFunction1() {
    foodArray.sort(function (a, b) { return 0.5 - Math.random() });
    document.getElementById("entree").innerHTML = entree;
}
