
const fs = require('fs');

const genders = ['M', 'F'];
const maleNames = ['Bartek', 'Kacper', 'Piotr', 'Szymon', 'Karol'];
const femaleNames = ['Zosia', 'Basia', 'Kasia', 'Asia', 'Karolina'];
const lastNames = ['Nowak', 'Tomczyk', 'Ber', 'Podsiadło', 'Zew'];


function randChoice (arr)  {

    arrayValue = arr[Math.floor(Math.random() * arr.length)];

    return arrayValue;

}

const people = [];

for (let i = 0; i < 20; i++){

    const peopleObj = {};

    const gender = randChoice(genders);

    if(gender === genders[0]){

        const maleName = randChoice(maleNames);

        peopleObj.name = maleName;
        const maleSecondName = lastNames[Math.floor(Math.random() * lastNames.length)];
    
        peopleObj.secondName = maleSecondName;
    }

    if(gender === genders[1]){

        const femaleName = randChoice(femaleNames);
        const femaleSecondName = lastNames[Math.floor(Math.random() * lastNames.length)];

        peopleObj.name = femaleName;
        peopleObj.secondName = femaleSecondName;

    }

    const peopleAge = Math.floor(Math.random()*(78-18 +1)) + 18;
   
    peopleObj.age = peopleAge;
    peopleObj.gender = gender;
    people.push(peopleObj);
   
}

console.log(people);

fs.writeFile('people.json', JSON.stringify(people, null,2), (err) => {
  if (err) throw err;
  console.log('The file has been saved!');
});