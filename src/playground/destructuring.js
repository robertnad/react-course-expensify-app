/* OBJECT DESTRUCTURING */

// const person = {
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const {name: firstName = 'Anonymous', age} = person;
// // const name = person.name;
// // const age = person.age;
// // console.log(`${person.name} is ${person.age}.`);
// console.log(`${firstName} is ${age}.`);

// const {city, temp: temperature} = person.location;
// // if (person.location.city && person.location.temp) {
// //     console.log(`It's ${person.location.temp} in ${person.location.city}.`);
// // }
// if (city && temperature) {
//     console.log(`It's ${temperature} in ${city}.`);
// }


// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// };
// const {name: publisherName = 'Self-Published'} = book.publisher;
// console.log(`${publisherName}`);


/* ARRAY DESTRUCTURING */

// const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
// // const [street, city, state, zip] = address;
// const [, city, state = 'New York'] = address;
// // console.log(`You are in ${address[1]} ${address[2]}.`);
// console.log(`You are in ${city} ${state}.`);


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [itemName, smallPrice, mediumPrice, largePrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);
