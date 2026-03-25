console.log("salut a tous");
let instructorName = "Ibtihel";
let x = "ben salah";
console.log(instructorName);

let w;
console.log(w);

const students = ["leolein", "baha", "sonia"];
console.log(students[0]);

const leolein = {
  name: "loelein",
  lastName: "archange",
  age: 21,
  nationalite: "francaise",
  present: false,
};
console.log(leolein.present);
console.log(leolein.name);

if (leolein.present == true) {
  console.log(leolein.name + " " + leolein.lastName + " est present");
} else {
  console.log(leolein.name + " " + leolein.lastName + " est absent");
}

for (let i = 0; i < students.length; i++) {
  if (students[i].length > 5) {
    console.log(students[i] + " has more than 5 characters");
  } else if (students[i].length == 5) {
    console.log(students[i] + " has exactly 5 characters");
  } else {
    console.log(students[i] + " has less than 5 characters");
  }
}
function cercleArea(radius) {
  return Math.floor(Math.PI * radius * radius);
}

console.log(cercleArea(2) + " cm2");
console.log(cercleArea(1) + " cm2");
