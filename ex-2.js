// Exercise #2: Editing Employee Array
const employees = [
  {
    name: "James",
    age: 40,
    hobbies: ["Football", "Social media"],
  },
  {
    name: "Alex",
    age: 25,
    hobbies: ["Cryptocurrency", "Social media"],
  },
];
// Start coding here
let alex = employees[1].name;
let alexHobbies = employees[1].hobbies;
let alexAndJamesAge = employees[0].age + employees[1].age;
alexHobbies.push("Watching basketball")

const updateEmployees = [ employees,

  {
    name: "Alicia",
    age: 29,
    hobbies: ["Shopping","Reading novels"],
  },
  {
    name: "Kody",
    age: 19,
    hobbies: ["Computer games","Wakeboard"],
  }
];
console.log(updateEmployees);

updateEmployees.pop();
console.log(employees);
console.log(updateEmployees);


