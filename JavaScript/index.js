// *******date-string method******
// const d = new Date('2023-06-23');
// console.log(d);

// ******** Creating dates with arguments *******
//   const d = new Date(2023, 6, 30, 7, 30, 59)
//   console.log(d);


// ***** With no arguments
// const d = new Date('2023-06-23')
// console.log(d);

// Writing a custom date format
const d = new Date('2023-06-23')
const year = d.getFullYear()
const date = d.getDate()
console.log(date,year);
