require('dotenv').config();
const mongoose = require('mongoose');


let Person;

const createAndSavePerson = (done) => {
  let person = new Person({
    name: 'Hilary Titus',
    age: 26,
    favoriteFoods: ['Rice', 'Yam', 'Beans']
  });
  person.save(function(err, data) {
    if (err) return done(err)
    done(null, data)})
};

const createManyPeople = (arrayOfPeople, done) => {
  Person.create(arrayOfPeople, function(err, result) { 
    if (err) return err;
    return done(null, result);
  })
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
// Create a reference to the connection
const db = mongoose.connection;

// Handle connection events
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

let personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favoriteFoods: [String]
}
);

Person = mongoose.model('Person', personSchema);

createAndSavePerson(function(err, savedPerson) {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Saved person:', savedPerson);
  }
});

createManyPeople([
  {name: "Shater",
  age: 26,
  favoriteFoods: ['Buns']
},
{name: "Iorfa",
age: 28,
favoriteFoods: ['Goruba']
},
{name: "Kater",
age: 23,
favoriteFoods: ['Peanut'] 
}
], function(err, savedPerson) {
  if (err) {
    console.error('Error:', err);
  } else {
    console.log('Saved person:', savedPerson);
  }
})

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
