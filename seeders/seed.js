let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/project3", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
});



let item = [
    {
        name: "Peanut Butter",
        category: "Pantry",
        addedBy: "James",
        date: new Date(Date.now()),
        expiration: new Date(Date.now()),

    },
    {
        name: "Whole Milk",
        category: "Fridge",
        addedBy: "James",
        date: new Date(Date.now()),
        expiration: new Date(Date.now()),

    }

]

let locations = [
    {
        name: "Bed-stuy Fridge",
        street: "160 Quincy",
        city: "Brooklyn",
        state: "New York",
        zipcode: "11216",
        items: []

    },
];

db.Location.deleteMany({})
    .then(() => db.Location.collection.insertMany(locations))
    .then(info => {
        console.log(locations)
        console.log("in the second call back")
        console.log(info.result.n + " records inserted!");
        process.exit(0);

    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    })

db.Item.deleteMany({})
    .then(() => db.Item.collection.insertMany(item))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);

    })
    .catch(err => {
        console.error(err);
        process.exit(1)
    });



