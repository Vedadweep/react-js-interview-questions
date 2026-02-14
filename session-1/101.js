// Session 1 - Exercise 1
// function example() {
//     if (true) {
//         var a=1; 
//         let b=2;
//         const c=3;
//     }

//     console.log("a:", a); // var is function-scoped, so this prints
//     console.log("b:", b); // let is block-scoped, so this fails. (ReferenceError: b is not defined )
//     console.log("c:", c); // const is block-scoped, but program never reaches here as it crashes on b
// }

// example();

// 2. const doesnt mean immutable
// const user = {name: "Alice", age: 30};
// user.age=26;
// console.log(user.age);// works because we are not reassigning the variable user, we are just updating the value

// const numbers = [1, 2, 3];
// numbers.push(4);
// console.log(numbers);// works because we are not reassigning the variable user, we are just updating the value

// user={};// this will throw an error because we are trying to reassign a const variable
// nums=[];// this will throw an error because we are trying to reassign a const variable

// 3. Redeclaration of variables
// var x=1;
// var x=2;
// console.log(x);

// let y=1;
// console.log(y); //this will throw an error because we cannot redeclare a variable declared with let in the same scope. (SyntaxError: Identifier 'y' has already been declared)
// let y=2;
// console.log(y);
// //but if we wrap it in a block , it wont throw any errors.Comment the above "let y=1; console.log(y); let y=2; console.log(y);" and uncomment the below code to see the output.
// // Tip : {} can create a new block scope in JavaScript, allowing us to declare variables with the same name without conflicts.
// {
//     let y=1;
//     console.log(y);
// }

// 4. typeof
// note: typeof always returns a string
// console.log(typeof 42); // "number"
// console.log(typeof "Hello"); // "string"
// console.log(typeof true); // "boolean"
// console.log(typeof undefined); // "undefined"
// console.log(typeof function() {}); // "function"
// console.log(typeof 42.45); // "number"
// console.log(typeof Symbol()); // "symbol"
// console.log(typeof null); // "object" (this is a known quirk in JavaScript)
// console.log(typeof NaN); // "number" (NaN is considered a number in JavaScript)
// console.log(typeof [1,2,3]); // "object" (arrays are objects in JavaScript)
// console.log(typeof {name: "Alice"}); // "object"
console.log(Array.isArray([1,2,3])); 
// true → best way to check if something is an array


// 5. undefined vs not defined
// var a;
// console.log(a); // undefined, because a is declared but not assigned a value
// console.log(b); // ReferenceError: b is not defined, because b is not declared at all

// let c;
// console.log(c); // undefined, because c is declared but not assigned a value
// console.log(d); // ReferenceError: d is not defined, because d is not declared at all

// const e;
// console.log(e); // SyntaxError: Missing initializer in const declaration, because const variables must be initialized at the time of declaration
// console.log(f); // ReferenceError: f is not defined, because f is not declared at all

// const g=undefined;
// console.log(g); // undefined, because g is declared and assigned the value undefined
// console.log(h); // ReferenceError: h is not defined, because h is not declared at all

// if(typeof window !== "undefined"){
//     console.log("Yaaay, inside a window");
// }else{
//     console.log("saddd, not window in a node.js environment");
// }

// if (typeof document !== "undefined") {
//     console.log("Yaaay, inside a document");
// }else{
//     console.log("saddd, not document in a node.js environment");
// }

// if (typeof navigator !== "undefined"){
//     console.log(navigator.userAgent); //will return node js version
//     console.log(navigator.languages);//will return array of languages
//     console.log(navigator.platform);// will return the platform on which node js is running
// }

// 6. '==' vs '==='
console.log(5 == "5"); // true, because == performs type coercion and converts the string "5" to the number 5 before comparing
console.log(5 === "5"); // false, because === does not perform type coercion and compares both value and type, so a number is not strictly equal to a string

console.log(null == undefined); 
// true → loose equality treats them as equal (special rule in JS)

console.log(null === undefined); 
// false → strict equality checks type + value

console.log(1 == "2"); 
// false → string "2" becomes number 2, then 1 != 2

console.log(null == 0); 
// false → null only loosely equals undefined, nothing else


console.log(false+"hello"); // "falsehello", because false is coerced to the string "false" and concatenated with "hello"
console.log(false-"hello"); // NaN, because false is coerced to 0 and "hello" cannot be converted to a number, resulting in an invalid arithmetic operation 
