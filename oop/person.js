// Prototypical Inheritance

const Person = function(firstName, lastName, age, likes = []) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.likes = likes
}

Person.prototype.getBio = function() {
    let bio = `${this.firstName} is ${this.age}.`

    this.likes.forEach((like) => {

    })

    return bio
}

Person.prototype.setName = function(fullName) {
    const names = fullName.split(' ')
    this.firstName = names[0]
    this.lastName = names[1]
}

const me = new Person('Marten', 'Sievers', 26, ['Teaching', 'Biking'])
me.setName('Alexis Turner')
console.log(me.getBio())

const pati = new Person('Patricia', 'Dinu', 24)
console.log(pati.getBio())
