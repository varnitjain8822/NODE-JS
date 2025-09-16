const { MongoClient } = require('mongodb');

const url = "mongodb+srv://root:root@air-bnb.rex7r9f.mongodb.net/?retryWrites=true&w=majority&appName=air-bnb";

const mongoConnect = (callback) => {
  MongoClient.connect(url)
    .then(client => {
      console.log(" Connected to MongoDB");
      callback(client);
    })
    .catch(err => {
      console.error(" MongoDB connection error:", err);
    });
};

module.exports = mongoConnect;
