//-------------------------Task 1--------------------------//

let user = { name: "John" };
user.age = Number(prompt("Enter to age"));

//-------------------------Task 2--------------------------//

let admin = Object.assign({}, user, { role: "admin" });

console.log(user);
console.log(admin);

//-------------------------Task 3--------------------------//

let { name, age, role } = admin;
console.log(name + " " + age + " " + role);
