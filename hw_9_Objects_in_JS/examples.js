// const obj = {
//     key: "value",
//     name : "Oksan",
//     getName: function() {
//         return this.name;
//     }
// }

// console.log(obj.getName());

// ///////////////////////////////////////////////////////////

const obj = {
    key: "value",
    name : "Oksan",
    getName: function() {
        return () => {
                    return this.nameOks;
        };
    }
};

console.log(obj.getName());

///////////////////////////////////////////////////////////


