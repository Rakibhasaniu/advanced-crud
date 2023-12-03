import app from "./app"
import mongoose from "mongoose";
import config from "./app/config/config";







async function server() {
  try {
    await mongoose.connect(`${config.database_url}`);
    // console.log(`${config.database_url}`)

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
  app.listen(config.port, () => {
    console.log(`Example app listening on port ${config.port}`)
  })
  } catch (error) {
    console.log(error)
  }
}


  server().catch(err => console.log(err));
