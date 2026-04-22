// const obj = {
//     key: "value",
//     name : "Oksan",
//     getName: function() {
//         return this.name;
//     }
// }

// console.log(obj.getName());

// // ///////////////////////////////////////////////////////////

// const obj = {
//     key: "value",
//     name : "Oksan",
//     getName: function() {
//         return () => {
//                     return this.nameOks;
//         };
//     }
// };

// console.log(obj.getName());

// ///////////////////////////////////////////////////////////


// const pageObj = {
//   element: "selector",
//   clickElement: function () {
//     return console.log('Click ' + this.element)
//   }
// }

// console.log(pageObj.clickElement())

// ///////////////////////////////////////////////////////////


// let docs = {
//   id: 1,
//   country: "Ukraine",
//   "getId and country": function () {
//     return function () {
//       return this.id + this.country;
//     };
//   },
// };

// console.log(docs["id"]);



let docs = {
  id: 1,
  country: "Ukraine",
  innerObj: {
    id: "2",
    getId: function (hello) {
      return hello + ' ' + this.id;
    },
  },
};

const getIdBind = docs.innerObj.getId.call(docs, ['hello']);
console.log(getIdBind);
