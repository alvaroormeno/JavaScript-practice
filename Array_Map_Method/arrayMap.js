let people = [
  {name: 'John', age:41, job:'Developer'},
  {name: 'Jose', age:31, job:'Teacher'},
  {name: 'Alvaro', age:31, job:'Nurse'},
  {name: 'Maurico', age:47, job:'Police'},
  {name: 'Paolo', age:11, job:'Author'},
  {name: 'Salvador', age:21, job:'Artist'},
  {name: 'Gianmarco', age:56, job:'Doctor'},

]

// MAP METHOD
// -> calls function on each item in the array and returns new array of the results
//
// Challenge: return a nee array with the name, age and birthdate of each of the people from people array

const newArray = people.map(person => ({
  name: person.name,
  age: person.age,
  birth_year: 2022 - person.age
}))



console.log(newArray)