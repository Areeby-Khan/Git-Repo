
console.log("--------------");

const animal = ["monkey", "lion","zebra","owl","cat","dog"];
console.log(animal[2]);
//to get index of element 
const monkey = animal[0];
console.log(monkey);

const owl = animal[3];
console.log(owl);

console.log("--------------");

const fruit = ["apple","orange","banana","mango","melon"];
console.log(fruit);
console.log(fruit[3]);
console.log(fruit.push("Water meloon"));
console.log(fruit);

for(i=0;i<fruit.length;i++){
    console.log(fruit[i]);
}
console.log("--------------");

const book =["e comm", "networking","ERP", "Professional practice","english"];
for(let i = 0 ; i<=4;i++){
    if(i===3){
        console.log("it is a book of profrssional practice ");
        continue;
    }
    console.log(book[i]);
}
console.log("--------------");

const online = ["WEB DEVELPOMENT", "GRAPHIC DESIGNER","DATA ENTRY","LEAD GEBERATION"];
console.log(online);
console.log(online.length);
online.pop();
console.log(online);
online.unshift("Numerial analysis");
console.log(online);

console.log("--------------");

let marks = [34,54,78,99,56,73];
console.log(marks);
marks[2]=100;
console.log(marks);
console.log(marks.length);

console.log("-------loooping over an array-------");
let veg = ["cucumber","carrort","potato","tomato","red chilli"];
for(let i =0; i<veg.length; i++){
    console.log(veg[i]);
}
console.log("-------loooping over an array-------");
console.log("-------FOR OF LOOOPING ON array-------");

let car = ["cutas","mehran","corolla","bmw","lamborgini"];
for(let val of car){
    console.log(val.toUpperCase());
}
console.log("-------loooping over an array-------");
let mark = [34,56,78,90,22,44,66];
let sum = 0;
for(let i of mark){
    console.log(i);
    sum +=i;
}
let avg = sum/mark.length;
console.log(`avg marks of the class is = ${avg}`);

console.log("-------loooping over an array-------");
let price = [200,300,400,500,600,700,800];
let j = 0;
for(let p of price){
    console.log(`value of index ${j} = ${p}`);
    let offer = p/10;
    price[j]=price[j]-offer;
    console.log(`value After offer = ${price[j]}`);
    j++;
}
let grade = [330,450,670,780,900,790];
for(x=0;x<grade.length;x++){
    let increase = grade[x]/10;
    grade[x]-=increase;
}
console.log(grade);


//loop
let offering = [450,670,888,980,345,666];
for(let a=0;a<offering.length;a++){
    let ofr = offering[a]/10;
    offering[a]= offering[a]-ofr;

}
console.log(offering);

let abc=["aree","areeb","areeba","areeba khan"];
let friend =["fai","faiq","faiqa","iru","irum"];
let group = abc.concat(friend);
console.log(group);
console.log(group.toString());
console.log(group.slice(1,4));

let imt = ["shopping","mall","chase","java","course","new lunge","proton"];
console.log(imt.splice(3,1,"value"));
console.log(imt);

let food=["apple","burger","shawarma","bread","proteinn","juicce"];
console.log(food.splice(4,1,"MILK","shake"));
console.log(food);
console.log(food.splice(5));
console.log(food);