for (let index = 0; index < 10; index++) {
   // console.log(index);    
}


let names =["idk", "idk^2", "idk^3", "idk*4"];
/*
for (let index = 0; index < names.length; index++) {
    console.log(names[index]);
    
}*/
/*
names.forEach(name =>{
    console.log(name)
});
*/
let rolls =[];
for(let i = 0; i < 100; i++){
const roll =Math.ceil( Math.random() * 20);
rolls.push(roll)
}
for (let i = 1; i < 21; i++){
   console.log("Du har rullat ", i, " ", rolls.filter((number)=> number === i).length, " gånger");
}

