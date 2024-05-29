class Person {
  constructor(firstName, lastName, age, gender, address, email, phoneNumber) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.gender = gender;
      this.address = address;
      this.email = email;
      this.phoneNumber = phoneNumber;
  }

  // Update the address
  updateAddress(newAddress) {
      this.address = newAddress;
  }

  // Update the email
  updateEmail(newEmail) {
      if (this.validateEmail(newEmail)) {
          this.email = newEmail;
      } else {
          console.error('Invalid email format');
      }
  }

  // Update the phone number
  updatePhoneNumber(newPhoneNumber) {
      if (this.validatePhoneNumber(newPhoneNumber)) {
          this.phoneNumber = newPhoneNumber;
      } else {
          console.error('Invalid phone number format');
      }
  }

  // Get full name
  getFullName() {
      return this.firstName + ' ' + this.lastName;
  }

  getDetails() {
      return {
          name: this.getFullName(),
          age: this.age,
          gender: this.gender,
          address: this.address,
          email: this.email,
          phoneNumber: this.phoneNumber,
      };
  }

  printDetails() {
      console.log('Name: ' + this.getFullName());
      console.log('Age: ' + this.age);
      console.log('Gender: ' + this.gender);
      console.log('Address: ' + this.address);
      console.log('Email: ' + this.email);
      console.log('Phone Number: ' + this.phoneNumber);
  }
  
}

const person1 = new Person(
  'Shamir',
  'T',
  23,
  'Male',
  '123 apartment f3, jj street, Chennai',
  'Shamir@gmail.com',
  '9385541260' 
);

person1.printDetails();

