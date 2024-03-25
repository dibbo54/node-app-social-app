const mongoose = require("mongoose");

exports.connectDatabase = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MONGO_URI)
    //.set("strictQuery", false)
    .then((con) => console.log(`Database Connected: ${con.connection.host}`))
    .catch((err) => console.log(err));
};
