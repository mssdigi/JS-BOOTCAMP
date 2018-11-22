class User {
    constructor(firstName, lastName, email, dob, gender, password, id) {
        this.firstName = firstName;

        this.lastName =  lastName;
        this.dob = dob;
        this.email = email;
        this.gender = gender;
        this.password = password;
        this.id = id === undefined ? Math.floor(Math.random() * 100) : id
    }

    getFirstName() {
        return this.firstName
    }

    getFullName() {
        return `${this.firstName} ${this.lastName} has the id: ${this.id}`
    }

}


const user1 = new User('Tim', 'Taxis', '31.12.1991', 'hellO@martensievers.com', 'male', 'Abc123!');
console.log(user1.getFullName());

localStorage.setItem('User', JSON.stringify(user1));

const me = JSON.parse(localStorage.getItem('User'));

if (me instanceof User) {
    console.log(me.getFullName())
} else {
    const user2 = new User (me.firstName, me.lastName, me.dob, me.email, me.gender, me.password, me.id)
    console.log(user2.getFullName())
}

