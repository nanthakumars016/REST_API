const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect(process.env.DBURL)
    .then(() => {
      console.log("Database Connected Successfully....");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connect;
