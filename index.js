const app = require("./app/app");
const { PORT } = require("./secret");
const connectDb = require("./src/config/db");

// server listen after database connection
connectDb()
  .then(() => {
    app.listen(PORT, () => {
      console.log("database connected");
      console.log(`server is running http://localhost:${PORT}`);
    });
  })
  .catch((e) => {
    console.log("database not connected");
    console.log(`server is stop`);
  });
