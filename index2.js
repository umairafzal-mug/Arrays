let students = [{fName:"Umair", lName:"Afzal", age:22, cgpa:3.4},{fName:"Hamzah", lName:"Ali", age:25, cgpa:3.3},{fName:"Usama", lName:"Zubair", age:27, cgpa:3.9}]
const filterStudents = () =>{
    if (students.length === 0) {
        students.push({fName:"Babar", lName:"Akbar", age:29});
    }else{
        console.log(students.filter((item)=>item.age === 25 || item.cgpa === 3.9));
    }
}
filterStudents();



const new_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function getOddNumbers(){
    for(let i = 0; i<new_array.length; i++){
        if(new_array[i] % 2 !== 0){
            console.log(new_array[i]);
        }
    }
};
getOddNumbers()