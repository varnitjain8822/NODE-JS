const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathutil');

module.exports = class Home {
  constructor(housename, location, price, imageUrl) {
    this.housename = housename;
    this.location = location;
    this.price = price;
    this.imageUrl = imageUrl;
  }

  save() {
    Home.fetchAll((registeredUsers) => {
      registeredUsers.push(this);
      this.id = Date.now();
      const filePath = path.join(rootDir, 'data', 'users.json');
      fs.writeFile(filePath, JSON.stringify(registeredUsers), (err) => {
        if (err) {
          console.log(err);
        } else {
          console.log('Data saved to users.json');
        }
      });
    });
  }

  static fetchAll(callback) {
    const filePath = path.join(rootDir, 'data', 'users.json');
    fs.readFile(filePath, 'utf-8', (err, fileContent) => {
      if (!err && fileContent.length > 0) {
        callback(JSON.parse(fileContent));
      } else {
        callback([]);
      }
    });
  }
};