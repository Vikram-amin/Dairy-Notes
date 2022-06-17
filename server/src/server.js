const connectToDB = require('./Config/dbConnect')
const app = require("./index")


app.listen(4000, () => {
    new connectToDB();
    console.log(`Server is listening at port: ${4000}`);
})