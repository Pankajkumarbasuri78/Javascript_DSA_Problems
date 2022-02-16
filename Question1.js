const student=[
    {
        name:"abc1",
        hostel:5,
        course:"btech",
        year:4,
        age:26,
    },
    {
        name:"abc2",
        hostel:10,
        course:"btech",
        year:2,
        age:22,
    },
    {
        name:"abc3",
        hostel:7,
        course:"btech",
        year:1,
        age:19,
    },
    {
        name:"abc4",
        hostel:5,
        course:"IMSc",
        year:4,
        age:26,
    },
];
//By using simple loop we can iterate
for(let i=0;i<=student.length;i++){
    console.log(student[i]);
}
/*The map() method is used for creating a new array from an existing one, 
applying a function to each one of the elements of the first array.*/

//Map Function
student.map((element)=>{
    console.log(element);
});

//Filter Function
/*The filter() method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. 
If the condition returns false, the element does not get pushed to the output array. */

const senior_student = student.filter(student => student.age >= 20);
console.log(senior_student);

//Reduce()
/*The reduce() method reduces an array of values down to just one value. 
To get the output value, it runs a reducer function on each element of the array. */
const sumage=student.reduce((e1,e2)=>{
    return e1+e2.age

},0)
  console.log(sumage); // 10