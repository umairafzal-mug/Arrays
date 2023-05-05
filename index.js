let arr=[{name:"Umair",age:20},{name:"Ayeza",age:27},{name:"Ali",age:25}]
// length = 0+1
// length = index+1
// length = -1+1

// // Methods Declaration
// function funName(){
//     console.log("funName");
// }


// const functName=()=>{
//     console.log("functName");
// }


// funName();
// functName();

// Array Methods
const filterStudentByAge=(newAge)=>{
    console.log("Printing Returned items\t",arr.forEach((item)=>{
        if (item.age===25) {
            console.log(item);
        }
        return item;
    }))
    console.log("Printing Returned items\t",arr.map((item)=>{
        return item.age===25
    }))
    console.log("Printing Returned items\t",arr.map(item=>{
        if (item.age===25) {
            return item
        }
    }))
    console.log(arr.filter((item)=>item.name.toLowerCase()==="umair"||item.age===25))
}
filterStudentByAge()



// // Anonymus Methods
// // greeting(()=>{return "Test"},"Umair")
// function greeting(helloMessage, name) {
//     const hello=helloMessage()
//     hello()
//     console.log("\t"+ name);
//   }
// //   // Pass `sayHello` as an argument to `greeting` function
//   greeting(sayHello, "JavaScript!");
// //   // Hello, JavaScript!

//   function sayHello() {
//     return () => {
//       console.log("Hello!");
//     };
// }