// const notes = ['Note 1', 'Note 2', 'Note 3'];
const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habits to work on',
    body: 'Exercise. Eating a bit better'
}, {
    title: 'Office modification',
    body: 'Get a new seat'
}];


/*********************************************************
 * SECTION TWO - ARRAY WITH METHODS
 */

/*console.log(notes.pop()); // Removes last item from array
notes.push('My new note'); // Pushes new item to the end of array

console.log(notes.shift()); // Remove first item from array
notes.unshift('My first note'); // Add item to the beginning of array

notes.splice(1, 1, 'This is the new second item');

notes[2] = 'This is now the new note 3';*/

/*********************************************************
 * SECTION THREE - FOR LOOP
 */

/*notes.forEach(function(item, index) { // Callback function()
    console.log(index);
    console.log(item)
});

console.log(notes.length);
console.log(notes);

// Counting ... 1
for (let count = 0; count <= 2; count++) {
    console.log(`Counting... ${count}`)
}

for (let count = notes.length - 1; count >= 0; count--) {
    console.log(notes[count])
}

console.log(notes.length);
console.log(notes);*/


/*********************************************************
 * SECTION FOUR - SEARCHING ARRAYS
 */

/*console.log(notes.indexOf({})); // Returns the index of the first instance that matches

let someObject = {};
let otherObject = someObject;
console.log(someObject === otherObject);

// findIndex()
const index = notes.findIndex(function(note, index) {
    console.log(note)
    return note.title === 'Habits to work on'
});

console.log(index);

// array.find() returns the item that matches the function
const findNote = function(notes, noteTitle) {
    return notes.find(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
};

// array.findIndex() returns the index of the item that matches the function
const findNote = function(notes, noteTitle) {
    const index = notes.findIndex(function(note, index) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    });
    return notes[index]
};

const note = findNote(notes, 'Office modification');
console.log(note);*/


/*********************************************************
 * SECTION FIVE - SEARCHING ARRAYS
 */

/*// filter()
// const filteredNotes = notes.filter(function(note, index) {
//         const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
//         const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
//         return isTitleMatch || isBodyMatch
//     });

// findNotes()
const findNotes = function (notes, query) {
    return notes.filter(function(note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase());
        const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase());
        return isTitleMatch || isBodyMatch
    });
};

console.log(findNotes(notes, 'eating'));*/


/*********************************************************
 * SECTION SIX - SORTING ARRAYS
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
 */

// console.log('a' < 'A');
const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
};

sortNotes(notes);
console.log(notes);