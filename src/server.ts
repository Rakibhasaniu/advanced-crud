import app from "./app"
import mongoose from "mongoose";

const port = 5000





async function server() {
  try {
    await mongoose.connect(`${process.env.DATABASE_URL}`);
    console.log('connected to database')

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
  })
  } catch (error) {
    console.log(error)
  }
}


  server().catch(err => console.log(err));
