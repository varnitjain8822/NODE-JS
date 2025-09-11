const fs = require('fs');
const path = require('path');
const rootDir = require('../utils/pathutil');

let registeredUsers = [];
module.exports= class home{
  constructor(housename, location, price, imageUrl){
    this.housename = housename;
    this.location = location;
    this.price = price;
    this.imageUrl = imageUrl;
  } 


  save(){    registeredUsers.push(this);
    const filePath = path.join(rootDir, 'data', 'users.json');
    fs.writeFile(filePath, JSON.stringify(registeredUsers), (err) => {
      if (err) 
      console.log(err);
      else 
      console.log('Data saved to users.json');
});
  }

  static fetchAll(){
    const filePath = path.join(rootDir, 'data', 'users.json');
    fs.readFile(filePath, (fileContent,err) => {
      if (!err) {
        
        registeredUsers = JSON.parse(fileContent);
        console.log(registeredUsers);
        return registeredUsers;
       
      }
  });
}
}