const mongo = require("mongodb");
const MongoClient = mongo.MongoClient;
const MONGO_URL =
  "mongodb+srv://root:root@air-bnb.er8x0ay.mongodb.net/airbnb?retryWrites=true&w=majority&appName=air-bnb";

let _db;

const mongoConnect = async (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      console.log("MongoDB connected!");
      _db = client.db("airbnb"); // save reference
      callback(client); // pass client back
    })
    .catch((err) => {
      console.log("Error while connecting to Mongo: ", err);
      throw err;
    });
};



exports.mongoConnect = mongoConnect;
