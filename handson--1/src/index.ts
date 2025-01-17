let hasil: number = 10;
hasil = 1000;

console.log(hasil)
 interface Personaldata {
    name: string;
    age: number;
    email: string;
    address: string;
    hobbies: string[];
 }

 const personaldata: Personaldata = {
    name: "John",
    age: 20,
    email: "john@gmail.com",
    address: "Jl. Raya",
    hobbies: ["coding", "reading", "traveling"]
 }

 function printPersonaldata(data: Personaldata) {
    console.log(`Name ${data.name}`)
    console.log(`Age ${data.age}`)
    console.log(`Email ${data.email}`)
    console.log(`Address ${data.address}`)
    console.log("Hobbies: ");
    data.hobbies.forEach((hobby) => {
        console.log(`- ${hobby}`);
    })
 }

 printPersonaldata(personaldata)
