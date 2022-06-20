const express = require("express");
const app = express();
const port = 8000;

const { faker } = require('@faker-js/faker');

class User {
  constructor() {
    this._id = Math.floor(Math.random() * 101);;
    this.firstname = faker.name.firstName();
    this.lastname = faker.name.lastName();
    this.phonenumber = faker.phone.phoneNumber();
    this.email = faker.internet.email();
    this.password = faker.internet.password();
  }
}

class Company {
  constructor() {
    this._id = Math.floor(Math.random() * 101);;
    this.name = faker.company.companyName();   
    this.address = {
      street: faker.address.street(),
      city: faker.address.cityName(),
      state: faker.address.county(),
      zipcode: faker.address.zipCode(),
      country: faker.address.country()
    };
  }
}

app.get("/api/users/new", (req, res) => {
  res.json( new User() );
});

app.get("/api/companies/new", (req, res) => {
  res.json( new Company() );
});

app.get("/api/company", (req, res) => {
  res.json( [new User(), new Company()] );
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );
