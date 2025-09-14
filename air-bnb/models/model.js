const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathutil');

module.exports = class Home {
  constructor(housename, location, price, imageUrl) {
    this.id = Date.now().toString();
    this.housename = housename;
    this.location = location;
    this.price = price;
    this.imageUrl = imageUrl;
  }

 
  save() {
    Home.fetchAll((registeredHomes) => {
      const homeDataPath = path.join(rootDir, 'data', 'users.json');

      if (this.id) { // edit home case
        registeredHomes = registeredHomes.map(home => 
          home.id === this.id ? this : home);
      } else { // add home case
        this.id = Math.random().toString();
        registeredHomes.push(this);
      }
      
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (error) => {
        console.log("File Writing Concluded", error);
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

  static findbyid(userid, callback) {
    this.fetchAll(homes => {
      const homefound = homes.find(home => home.id === parseInt(userid))
      callback(homefound);
    });
 }

   static deleteById(homeId, callback) {
  const filePath = path.join(rootDir, 'data', 'users.json');
  fs.readFile(filePath, 'utf-8', (err, fileContent) => {
    if (err) return callback(err);
    const homes = fileContent ? JSON.parse(fileContent) : [];
    const updated = homes.filter(h => h.id !== homeId);
    fs.writeFile(filePath, JSON.stringify(updated), callback);
  });
}

 

  
 
};   


