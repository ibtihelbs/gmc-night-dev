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

function cercleArea(radius) {
  return Math.floor(Math.PI * radius * radius);
}

console.log(cercleArea(2) + " cm2");
console.log(cercleArea(1) + " cm2");

function howManyChar(str) {
  if (str.length > 5) {
    console.log(str + " has more than 5 characters");
  } else if (str.length == 5) {
    console.log(str + " has exactly 5 characters");
  } else {
    console.log(str + " has less than 5 characters");
  }
}
howManyChar("ibtihel");
for (let i = 0; i < students.length; i++) {
  howManyChar(students[i]);
}
["leolein", "baha", "sonia"];

[7, 4, 5];

function eachStr(arr) {
  let res = [];
  for (let i = 0; i < arr.length; i++) {
    const l = arr[i].length;
    res.push(l);
  }
  return res;
}

console.log(eachStr(students));
