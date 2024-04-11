const person = {
    firstName: 'Miguel',
    lastName: 'Pimenta',
    get fullName() {
        return `${this.firstName} ${this.lastName}` 
    },
    set fullName(name) {
        const nameParts = name.split(' ');
        this.firstName = nameParts[0];
        this.lastName = nameParts[1];
    }
}

console.log(person.fullName);

person.fullName = 'Viviane Sedola' 

console.log(person.fullName) 

console.log(person)