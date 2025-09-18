const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathutil');
const { getDb } = require('../utils/databaseutil');

module.exports = class Home {
  constructor(housename, location, price, imageUrl) {
    this.id = Date.now().toString();
    this.housename = housename;
    this.location = location;
    this.price = price;
    this.imageUrl = imageUrl;
  }

 
 save() {
  const db = getDb();
  return db.collection("homes")
    .insertOne(this)
    .then((result) => {
      console.log(result);
      return result; // good practice: return result to use later
    })
    .catch((err) => {
      console.log("Error inserting document:", err);
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


