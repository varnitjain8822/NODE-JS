
const db = require("../utils/databaseutil");
module.exports = class Home {
  constructor(housename, location, price, imageUrl , id , description) {
    this.id = Date.now().toString();
    this.housename = housename;
    this.location = location;
    this.price = price;
    this.imageUrl = imageUrl;
    this.id = id;
    this.description = description;
  } 

save() {
  return db.execute(
    'INSERT INTO house (housename, price, location, imageUrl, description) VALUES (?, ?, ?, ?, ?)',
    [this.housename, this.price, this.location, this.imageUrl, this.description] 
  );
}




  static fetchAll() {
    return db.execute('SELECT * FROM house' );
  }

  static findbyid(userid, callback) {
    
 }

   static deleteById(homeId, callback) {
}

 

  
 
};   


