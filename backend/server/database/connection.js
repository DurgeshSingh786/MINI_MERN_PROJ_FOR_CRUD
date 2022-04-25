const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    //mongodb connection string
    mongoose.connect(
      "mongodb+srv://admin123:admin123@cluster0.uhxjm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,

        useUnifiedTopology: true,
      }
    );
    // const con=await mongoose.connect(process.env.MONGO_URL.{
    //     useNewUrlParser:true,
    //     useUnifiedTopology: true,

    //     useCreateIndex:true
    // });

    console.log("MongoDB connected:${con.connection.host}");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};
module.exports = connectDB;
