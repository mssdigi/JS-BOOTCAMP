console.log('app-controler.js called');


/*
 * Pre-load all user and product databases.
 */
    const users = getSavedUsers();


/*
 * REGISTRATION-CONTROLER
 * The following section defines the registration-controler of our  web application.
 * It attaches an eventListener to the submit button our the registration form,
 * checking and validating the user input and creating a new user object and
 * updating our database in localStorage. Finally it redirects the user to login.
 */
    document.getElementById('registration').addEventListener('submit', function(e) {
        e.preventDefault();
        console.log('click submit');
        // console.log(e)
        let form = document.getElementById('registration').elements;

        if (!e.target.checkValidity()) {
            return false
        }

        users.push(createNewUser(form.firstName.value, form.lastName.value, form.email.value,form.day.value
            + form.month.value  + form.year.value, form.gender.value, form.password.value));

        //    Reset and clear all form fields

        console.log(users);

    });


/*
 * LOGIN-CONTROLER
 */
