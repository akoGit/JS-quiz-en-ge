export const questions: question[] = [
  {
    id: "What's the output?",
    question: `
function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Lydia';
    let age = 21;
}
  
sayHi(); 
        `,
    answers: [
      "Lydia and undefined",
      "Lydia and ReferenceError",
      "ReferenceError and 21",
      "undefined and ReferenceError",
    ],
    correct_answer_idx:3,
    explanation: `Within the function, we first declare the name variable with the var keyword. This means that the variable gets hoisted (memory space is set up during the creation phase) with the default value of undefined, until we actually get to the line where we define the variable. We haven't defined the variable yet on the line where we try to log the name variable, so it still holds the value of undefined.

        Variables with the let keyword (and const) are hoisted, but unlike var, don't get initialized. They are not accessible before the line we declare (initialize) them. This is called the "temporal dead zone". When we try to access the variables before they are declared, JavaScript throws a ReferenceError.`,
  },
  {
    id: "What's the output?",
    question: `
class Chameleon {
    static colorChange(newColor) {
      this.newColor = newColor;
      return this.newColor;
    }
  
    constructor({ newColor = 'green' } = {}) {
      this.newColor = newColor;
    }
}
  
const freddie = new Chameleon({ newColor: 'purple' });
console.log(freddie.colorChange('orange')); 
        `,
    answers: ["orange", "purple", "green", "TypeError"],
    correct_answer_idx: 3,
    explanation: `
        The colorChange function is static. Static methods are designed to live only on the constructor in which they are created, and cannot be passed down to any children or called upon class instances. Since freddie is an instance of class Chameleon, the function cannot be called upon it. A TypeError is thrown.
        `,
  },
  {
    id: "What's the output?",
    question: `
function sum(a, b) {
    return a + b;
}
  
sum(1, '2');
  `,
    answers: ["NaN", "TypeError", "'12'", "3"],
    correct_answer_idx: 2,
    explanation: `
        JavaScript is a dynamically typed language: we don't specify what types certain variables are. Values can automatically be converted into another type without you knowing, which is called implicit type coercion. Coercion is converting from one type into another.

In this example, JavaScript converts the number 1 into a string, in order for the function to make sense and return a value. During the addition of a numeric type (1) and a string type ('2'), the number is treated as a string. We can concatenate strings like "Hello" + "World", so what's happening here is "1" + "2" which returns "12".`,
  }, {
    id: "What's the output?",
    question: `
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1);
}`,
    answers: ["0 1 2 and 0 1 2", "0 1 2 and 3 3 3", "3 3 3 and 0 1 2"],
    correct_answer_idx: 2,
    explanation: `
    Because of the event queue in JavaScript, the setTimeout callback function is called after the loop has been executed. Since the variable i in the first loop was declared using the var keyword, this value was global. During the loop, we incremented the value of i by 1 each time, using the unary operator ++. By the time the setTimeout callback function was invoked, i was equal to 3 in the first example.

    In the second loop, the variable i was declared using the let keyword: variables declared with the let (and const) keyword are block-scoped (a block is anything between { }). During each iteration, i will have a new value, and each value is scoped inside the loop.`,
  }, {
    id: "What happens when we do this?",
    question: `
function bark() {
  console.log('Woof!');
}

bark.animal = 'dog';`,
    answers: ["Nothing, this is totally fine!", "SyntaxError. You cannot add properties to a function this way.", "'Woof' gets logged.", "ReferenceError"],
    correct_answer_idx: 0,
    explanation: `
    This is possible in JavaScript, because functions are objects! (Everything besides primitive types are objects)

A function is a special type of object. The code you write yourself isn't the actual function. The function is an object with properties. This property is invocable.

`,
  }, {
    id: "What's the output? ",
    question: `
class Counter {
  #number = 10

  increment() {
    this.#number++
  }

  getNum() {
    return this.#number
  }
}

const counter = new Counter()
counter.increment()

console.log(counter.#number)`,
    answers: ["10", "11", "undefined", "SyntaxError"],
    correct_answer_idx: 3,
    explanation: `
    In ES2020, we can add private variables in classes by using the #. We cannot access these variables outside of the class. When we try to log counter.#number, a SyntaxError gets thrown: we cannot acccess it outside the Counter class!`,
  }, {
    id: "Put the logs in the correct order",
    question: `
Promise.resolve()
  .then(() => console.log(1));
 
queueMicrotask(() => console.log(2));
 
setTimeout(() => console.log(3), 0);
 
console.log(4);
 
new Promise(() => console.log(5));
 
(async () => console.log(6))();`,
    answers: ["1 2 3 4 5 6", "4 5 6 1 2 3", "4 3 1 2 6 5", "1 4 3 5 6 2"],
    correct_answer_idx: 1,
    explanation: `
    console.log(4): Logs 4 immediately.
    new Promise(() => console.log(5)): Logs 5 during Promise creation.
    (async () => console.log(6))(): Logs 6 due to the immediately-invoked asynchronous function.
    Promise.resolve().then(() => console.log(1)): Logs 1 as a microtask after the current script execution.
    queueMicrotask(() => console.log(2)): Logs 2 as a microtask after the current script execution.
    setTimeout(() => console.log(3), 0): Logs 3 after a minimum delay of 0 milliseconds, as a task.`,
  }, {
    id: "What's the output?",
    question: `
function getAge(...args) {
  console.log(typeof args);
}

getAge(21);`,
    answers: ["number", "array", "object", "NaN"],
    correct_answer_idx: 2,
    explanation: `
    The rest parameter (...args) lets us "collect" all remaining arguments into an array.
    An array is an object, so typeof args returns "object"`,
  }, {
    id: "What's the output?",
    question: `
const obj = { 1: 'a', 2: 'b', 3: 'c' };
const set = new Set([1, 2, 3, 4, 5]);

obj.hasOwnProperty('1');
obj.hasOwnProperty(1);
set.has('1');
set.has(1);`,
    answers: ["false true false true", "false true true true", "true true false true", "true true true true"],
    correct_answer_idx: 2,
    explanation: `
    All object keys (excluding Symbols) are strings under the hood, even if you don't type it yourself as a string. This is why obj.hasOwnProperty('1') also returns true.

It doesn't work that way for a set. There is no '1' in our set: set.has('1') returns false. It has the numeric type 1, set.has(1) returns true.`,
  }, {
    id: "What's the output?",
    question: `
const user = {
  email: "my@email.com",
  updateEmail: email => {
    this.email = email
  }
}

user.updateEmail("new@email.com")
console.log(user.email)`,
    answers: ["my@email.com", "new@email.com", "undefined", "ReferenceError"],
    correct_answer_idx: 0,
    explanation: `
    The updateEmail function is an arrow function, and is not bound to the user object. This means that the this keyword is not referring to the user object, but refers to the global scope in this case. The value of email within the user object does not get updated. When logging the value of user.email, the original value of my@email.com gets returned.`,
  },

];
