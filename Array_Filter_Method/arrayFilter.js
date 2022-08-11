let people = [
  {name: 'John', age:41, job:'Developer'},
  {name: 'Jose', age:31, job:'Teacher'},
  {name: 'Alvaro', age:31, job:'Nurse'},
  {name: 'Maurico', age:47, job:'Police'},
  {name: 'John', age:51, job:'Electrician'},
  {name: 'John', age:77, job:'Athlete'},
  {name: 'Paolo', age:11, job:'Author'},
  {name: 'Salvador', age:21, job:'Artist'},
  {name: 'John', age:21, job:'Dancer'},
  {name: 'John', age:26, job:'Singer'},
  {name: 'Gianmarco', age:56, job:'Doctor'},
  {name: 'John', age:50, job:'Developer'},
  {name: 'John', age:33, job:'Developer'},
];

// FILTER METHOD
// -> returns a new temporary array - leaves old array intact - chainable
//
// Challenge: return a new array of people with named John
const myArray = people.filter(person => person.name === 'John')
console.log(myArray)

// Challenge: return a new array of people named John whose job is Developer
const myArray2 = people
  .filter(person => person.name === 'John')
  .filter(person => person.job === 'Developer')
  console.log(myArray2)