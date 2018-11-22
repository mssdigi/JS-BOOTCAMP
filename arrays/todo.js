/***************************************************************
 * FIRST INSTRUCTIONS - ARRAY BASICS
 */

// INSTRUCTIONS:
// Create an array with five todos
// You have x todos
// Print the first and second to last items -> Todo: walk the dog


/*const todos = ['Order cat food', 'Clean kitchen', 'Buy food', 'Do work', 'Exercise'];

console.log(`You have ${todos.length} todos`);
console.log(`Todo: ${todos[0]}`);
console.log(`Todo: ${todos[todos.length - 2]}`);*/



/***************************************************************
 * SECOND INSTRUCTIONS - ARRAY WITH METHODS
 */

// INSTRUCTIONS:
// Delete the 3rd item
// Add a new item onto the end
// Remove the first item from the list

/*todos.splice(2, 1);
todos.push('New last item');
todos.shift();

Already include
console.log(`You have ${todos.length} todos`);
console.log(todos);*/


/***************************************************************
 * THIRD INSTRUCTIONS - FOR LOOP
 */

// INSTRUCTIONS:
// Print every element in the array like:
    // 1. The first item
    // 2. The second item

/*todos.forEach(function(item, index) {
   console.log(`${index + 1}. ${item}.`)
});

// 1. Order cat food
// 2. Clean kitchen
// ...

for (let count = 0; count < todos.length; count++) {
    const num = count + 1
    const todo = todos[count]
    console.log(`${num}. ${todo}`)
    //console.log(`${count + 1}. ${todos[count]}`)
}*/


/***************************************************************
 * FOURTH INSTRUCTIONS - SEARCHING ARRAYS
 */

// INSTRUCTIONS:
// Convert array of 'String' into array of objects => text, completed (make some completed)
// Create function to remove a todo by text value

const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}, {
    text: 'Buy food',
    completed: false
}, {
    text: 'Do work',
    completed: false
}, {
    text: 'Exercise',
    completed: true
}];

/*const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function(todo, index) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    });
    if (index > -1) {
        todos.splice(index, 1)
    }
};

// Given:
deleteTodo(todos, '!!buy food');
console.log(todos);*/


/***************************************************************
 * FIFTH INSTRUCTIONS - FILTER ARRAYS
 */

// INSTRUCTIONS:
// Create a function that returns todos that are not yet completed

/*const getThingsToDo = function (todos) {
    return todos.filter(function(todo, index) {
        return !todo.completed
    })
};

// Given:
console.log(getThingsToDo(todos));*/

/***************************************************************
 * SIXTH INSTRUCTIONS - SORTING ARRAY
 */

// INSTRUCTIONS:
// Sort array by completion

const sortTodos = function (todos) {
    todos.sort(function(a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (a.completed && !b.completed) {
            return 1
        } else {
            return 0
        }
    })
};

// Given:
sortTodos(todos);
console.log(todos);