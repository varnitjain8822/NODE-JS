// Core Modules
const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathutil");

const favouriteDataPath = path.join(rootDir, "data", "favourite.json");

module.exports = class Favourite {

  static addToFavourite(homeId, callback) {
    Favourite.getFavourites((favourites) => {
      if (favourites.includes(homeId)) {
        callback("Home is already marked favourite");
      } else {
        console.log
        favourites.push(homeId);
        fs.writeFile(favouriteDataPath, JSON.stringify(favourites), (err) => {
  callback(err);
});

      }
    });
  }

  static getFavourites(callback) {
    fs.readFile(favouriteDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static deleteById(delHomeId, callback) {
    Favourite.getFavourites(homeIds => {
      homeIds = homeIds.filter(homeId => delHomeId !== homeId);
      fs.writeFile(favouriteDataPath, JSON.stringify(homeIds),callback);
    })
  }
};