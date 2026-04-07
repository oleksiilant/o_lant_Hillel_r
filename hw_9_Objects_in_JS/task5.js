
const users = [
  { 
    name: "Джон", 
    email: "джон@test.com", 
    age: 25 ,
    date: "01.06.2024"
  },
  { 
    name: "Fred", 
    email: "fred@test.com", 
    age: 45,
    date: "02.03.2005"
  },
  { 
    name: "Tom", 
    email: "tom@test.com", 
    age: 65,
    date: "06.03.1996" 
  }
];
//console.log(users);
for ( const user of users) {
  const { name, email, age, date } = user;
  console.log(`Name: ${name} \tEmail: ${email} \tAge: ${age} \tDate: ${date}`);
}

