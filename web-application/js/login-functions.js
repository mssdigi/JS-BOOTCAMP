/*
 * Makes sure the file is connected and loaded correctly.
 */
    console.log('login-functions.js called');


/*
 * GetSavedUsers() returns an array of users from localStorage or
 * it creates a new array of users if non exists in localStorage.
 */
    const getSavedUsers = function () {
        return localStorage.getItem('users') !== null ? JSON.parse(localStorage.getItem('users')) : [];
    };

/*
 * CreateNewUser() takes user information as arguments and returns
 * a new user object to it's function call position. I doesn't perform
 * any validation of the input, as this is done in validateUser().
 */
    const createNewUser = function (firstName, lastName, email, dob, gender, password) {

        // validation

        return new User(firstName, lastName, email, dob, gender, password)
    };

