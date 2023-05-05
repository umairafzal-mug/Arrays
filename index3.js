let students = [{fName:"Umair", lName:"Afzal", age:22, cgpa:3.4},{fName:"Hamzah", lName:"Ali", age:25, cgpa:3.3},{fName:"Usama", lName:"Zubair", age:27, cgpa:3.9}]
const filterStudentByAge = () =>{
    if(students.length === 0){
        students.push({fName:"Uzair", lName:"Akram", age:20, cgpa:3.1})
    }else{
        console.log(students.filter((item)=>item.age===25));
    }
}
filterStudentByAge();