// import { compose, pipe } from "lodash/fp";
// import { Map } from "immutable";
// import { produce } from "immer";
import store from "./store";
import { bugAdded, bugRemoved, bugResolved } from "./actions";

// let input = "   Hello World   ";

// const trim = (str) => str.trim();
// const wrap = (type) => (str) => `<${type}>${str}</${type}>`;
// const toLowerCase = (str) => str.toLowerCase();

// let result = pipe(trim, toLowerCase, wrap("header"));
// console.log(result(input));

// const person = { name: "Habib" };
// const newPerson = Object.assign({}, person, { name: "Adam", age: 40 });
// console.log(newPerson);

// const group = { name: "Femi", sub: { id: 5, city: "IBD" } };
// const updatedGroup = { ...group, sub: { ...group.sub }, name: "Iyanu" };
// updatedGroup.sub.city = "ABK";
// console.log(group);
// console.log(updatedGroup);

// const numbers = [1, 2, 3, 4];
// console.log(numbers);
// // adding numbers
// const newNumbers = [5, ...numbers];
// console.log(newNumbers);
// const index = numbers.indexOf(3);
// const newerNumber = [...numbers.slice(0, index), 5, ...numbers.slice(index)];
// console.log(index);
// console.log(newerNumber);

// removing numbers
// const newNumbers = numbers.filter(number => number !== 1)
// console.log(newNumbers);

// updating numbers
// const newNumbers = numbers.map((number) => (number === 4 ? 20 : number));
// console.log(newNumbers);

// let book = { name: "Harry Potter" };

// function newPublish(book) {
//   book.isPublished = true;
// }

// function publish(book) {
//   return produce(book, (draftBook) => {
//     draftBook.isPublished = true;
//   });
// }

// let newBook = publish(book);
// console.log(book);
// console.log(newBook);

const unsubscribed = store.subscribe(() => {
  console.log("store changed", store.getState());
});

store.dispatch(bugAdded("Bug 1"));
store.dispatch(bugResolved(1));
store.dispatch(bugRemoved(1));

// unsubscribed();

// store.dispatch({
//   type: actions.BUG_REMOVED,
//   payload: {
//     id: 1,
//   },
// });

console.log(store.getState());
