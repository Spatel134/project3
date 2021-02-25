let mongoose = require("mongoose");
let db = require("../client/models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});

let location =
{
    name: "Bed-stuy Fridge",
    street: "160 Quincy",
    city: "Brooklyn",
    state: "New York",
    zipcode: "11216",

};

let item =
{
    name: "Peanut Butter",
    category: "Pantry",
    addedBy: "James",
    date: new Date(),
    expiration: new Date(),

}

db.Workout.deleteMany({})
    .then(() => db.Workout.collection.insertMany(location, item))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });