// "use strict" 

/// TASSSKKKKKKKK 3


/// NUmber  1


// const clients1 = ["Гилберт", "Сальваторе", "Пирс", "Соммерс", "Форбс", "Донован", "Беннет"];
// const clients2 = ["Пирс", "Зальцман", "Сальваторе", "Майклсон"];

// const bothClients = [...clients1, ...clients2];

// let uniAr = [...new Set(bothClients)];
// console.log(uniAr);



///NUmber  2


// const characters = [
//     {
//       name: "Елена",
//       lastName: "Гилберт",
//       age: 17, 
//       gender: "woman",
//       status: "human"
//     },
//     {
//       name: "Кэролайн",
//       lastName: "Форбс",
//       age: 17,
//       gender: "woman",
//       status: "human"
//     },
//     {
//       name: "Аларик",
//       lastName: "Зальцман",
//       age: 31,
//       gender: "man",
//       status: "human"
//     },
//     {
//       name: "Дэймон",
//       lastName: "Сальваторе",
//       age: 156,
//       gender: "man",
//       status: "vampire"
//     },
//     {
//       name: "Ребекка",
//       lastName: "Майклсон",
//       age: 1089,
//       gender: "woman",
//       status: "vempire"
//     },
//     {
//       name: "Клаус",
//       lastName: "Майклсон",
//       age: 1093,
//       gender: "man",
//       status: "vampire"
//     }
//   ];

//   console.log(characters);

//   const charactersShortInfo = [];
//   characters.forEach(({name, lastName, age}) => {
//     charactersShortInfo.push({name, lastName, age});
//   });
//   console.log(charactersShortInfo);
  

/// NUmber  3 

// first variant

// try {  
//     const user1 = {
//         name: "John",
//         years: 30,  
//     };
//     const {name, years: age, isAdmin} = user1;
//     if (!isAdmin) {
//         throw new Error("isAdmin method is not found");
//     } 
// } catch (error) {
//     console.log(error.message);
// }
//  console.log(name, age, isAdmin);


////OR

//second variant

// const user1 = {
//   name: "John",
//   years: 30
// };
// const {name, years: age, isAdmin = false} = user1;
// console.log(name, age, isAdmin);


/// NUmber 4

// const satoshi2020 = {
//     name: 'Nick',
//     surname: 'Sabo',
//     age: 51,
//     country: 'Japan',
//     birth: '1979-08-21',
//     location: {
//       lat: 38.869422, 
//       lng: 139.876632
//     }
//   }
  
//   const satoshi2019 = {
//     name: 'Dorian',
//     surname: 'Nakamoto',
//     age: 44,
//     hidden: true,
//     country: 'USA',
//     wallet: '1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa',
//     browser: 'Chrome'
//   }
  
//   const satoshi2018 = {
//     name: 'Satoshi',
//     surname: 'Nakamoto', 
//     technology: 'Bitcoin',
//     country: 'Japan',
//     browser: 'Tor',
//     birth: '1975-04-05'
//   } 
  
  
//   const fullProfile = {...satoshi2018, ...satoshi2019, ...satoshi2020};
//   console.log(fullProfile);
  
  
  /// NUmber 5
  
  
  // const books = [{
  //   name: 'Harry Potter',
  //   author: 'J.K. Rowling'
  // }, {
  //   name: 'Lord of the rings',
  //   author: 'J.R.R. Tolkien'
  // }, {
  //   name: 'The witcher',
  //   author: 'Andrzej Sapkowski'
  // }];
  
  // const bookToAdd = {
  //   name: 'Game of thrones',
  //   author: 'George R. R. Martin'
  // }
  
  // const arrayBooksModified = books.slice();
  // console.log(arrayBooksModified);
  // const finalMassive = arrayBooksModified.push(bookToAdd);
  // console.log(finalMassive);
  
  // books.forEach(el => {
  //    const {name, author} = el;
  //    console.log(name, author);
  // });
  
  // const {name, author} = bookToAdd;
  // console.log(name, author);
  
  
  
  
  /// Task 6
  
  
  // const employee = {
  //   name: 'Vitalii',
  //   surname: 'Klichko'
  // };
  // console.log(employee);
  
  // const newObj = {
  //    age: 25, 
  //    salary: 7000
  // };
  
  // const {name, surname} = employee;
  // console.log(name, surname);
  
  // const anotherObj = Object.assign(employee, newObj);
  // console.log(anotherObj);
  
  
  /// task 7
  
  // const array = ['value', () => 'showValue'];
  
  // const [value, showValue] = array;
  // console.log(value, showValue);
  
  // alert(value); 
  // alert(showValue()); 
  
  
  
  