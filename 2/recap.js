let age = 10;

let incre_age = age + 1;

let first_name = "Alvin";

//console.log(age);


//console.log("my name is:" + first_name);

let details = {
    first_name: "Alvin",
    last_name : "Seah"
}
//console.log("My name is" + details.first_name + details.last_name);


let records = [
    {
        first_name: "Alvin",
        last_name: "Seah",

    },
    {
        first_name: "jon",
        last_name: "Scheele",
    },
];

console.log("First Record name: " + records[0].first_name);

// let age = 10;

// let incremented_age = age + 1;

// let first_name = "Jon";
// let name = "Dixant";
// let name = `Dixant`;

// console.log(age);

// let details = {
//   first_name: "Dixant",
//   last_name: "Mittal",
// };

// let records = [
//   {
//     first_name: "Dixant",
//     last_name: "Mittal",
//     phone: 99998888,
//   },
//   {
//     first_name: "Jon",
//     last_name: "Scheele",
//     email: "jon@email.com",
//   },
// ];

// JSON = Javascript Object Notation
// console.log("My name is: " + details.first_name + details.last_name);
// console.log("Name of first record: " + records[0].first_name);

// let age = 55;

// if (age >= 18) {
//   console.log("Eligible for Moderna and Pfizer");
// } else if (age >= 12 && age < 18) {
//   console.log("Eligible for Pfizer only");
// } else {
//   console.log("Not eligible for now.");
// }

// if (request is valid){
//     serve the request
// }
// else{
//     return error;
// }

// //  Defining the function
// // 1. Normal way
// function function_name(parameter1, paremeter2) {
//   console.log("Inside the function");
// }

// // 2. Anonymous function
// let anon_fn = function (parameter1, parameter2) {
//   console.log("Inside the anonymous function");
// };

// // 3. Arrow function
// let arrow_fn = (parameter1, parameter2) => {
//   console.log("Inside the arrow function");
// };

// Calling the function
// function_name();
// anon_fn();
// arrow_fn();

// // This function adds two numbers and return the sum
// function add(p1, p2) {
//   return p1 + p2;
// }

// add(4, 8);

// Callback Functions
// Function as a parameter to another function.
// operator: callback function
// Code should be open to extension, close to modification.
function apply_operation(number1, number2, operator) {
    let result = operator(number1, number2);
    return result;
  }
  
  function add(n1, n2) {
    return n1 + n2;
  }
  function product(n1, n2) {
    return n1 * n2;
  }
  
  console.log("Sum is: " + apply_operation(3, 4, add)); // not using add()
  console.log("Product is: " + apply_operation(3, 4, product));
  console.log(
    "Difference is: " +
      apply_operation(3, 4, (n1, n2) => {
        return n1 - n2;
      })
  );
  console.log(
    "Division is : " +
      apply_operation(3, 4, function (n1, n2) {
        return n1 / n2;
      })
  );
  
  // function toolkit1() {
  //   return "What is the use of <br> tag?";
  // }
  // function toolkit2() {
  //   return "What is the role of backend programming?";
  // }
  // function devops() {
  //   return "What is the full form of CI/CD?";
  // }
  
  // //
  // function conduct_quiz(student_name, module) {
  //   // Print the instruction
  //   console.log("Welcome: " + student_name);
  
  //   // print the quiz questions
  //   console.log(module());
  
  //   // print the completion message
  //   console.log("The quiz is submitted successfully");
  // }
  
  // conduct_quiz("Dixant", devops);
  
  function add(n1, n2) {
    return n1 + n2;
  }

  function subtract(n1, n2) {
    return n1 - n2;
  }

  function Multiply(n1, n2) {
    return n1 * n2;
  }

  function leapYear(year)
  {
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);
  }

  function In2Cm(inch){
      return(inch * 2.5)
  }

  function inputNull(input){
      return((input == null) || (input === ""))
  }

  console.log(Multiply(2,4))
