
const person = {
    firstName: "Miguel",
    lastName: "Pimenta",
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    },
    set fullName(name) {
      if (typeof name !== "string") throw new Error("Name is not a string");
      const nameParts = name.split(" ");
      if (nameParts.length !== 2) throw new Error("Enter a first and last name");
      if (nameParts.length) 
      this.firstName = nameParts[0];
      this.lastName = nameParts[1];
    },
  };
  
  try {
    person.fullName = null;
  } catch (error) {
    console.error(error);
  } 
  
  try {
    person.fullName = "";
  } catch (error) {
    console.error(error);
  }