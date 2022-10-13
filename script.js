// // array methods
// // let names=['beka', 'sandro', 'giorgi', 'ani', 'nino'];
// // // add names in massavi in last range
// // names.push('nino'); 
// // // add names in massive in first range
// // names.unshift('ana');
// // // delete first elemen in massive
// // names.shift();
// // // delete last elemnt in massive
// // names.pop()
// // abrunebs masivs
// // let newArray=names.slice(1,3); 
// // console.log(newArray);

// let numbers=[10,25,2,4,5];
// // let newArray=numbers.map(function(item){
// //     return item *2; 
// // map ცვლის მნიშვნელობებს
// // filter- მნიშვნელობებს არ ცვლის, გაფილტრავს
// // })
// // let newrange=numbers.filter(function(element){
// //     return element>10;
// // })
// let newrange=numbers.filter((Element)=> Element >10);
// // second choice
// // let newArray=numbers.map(item=>item*2);
// console.log(newrange);

// let languages=['german', 'franch', 'english', 'georgian','polish','java'];
// let languagelength=languages.filter((item => item.length>5 && item.includes('av')));
// console.log(languagelength);

// let array=['apple', 'banana', 'mango'];
// array.reverse();
// console.log(array.indexOf('banana'));

// some & every -გვიბრუნებს ტრუს ანდ ფოლს. some-ს გამოუენების შეთხვევაში მასივში არსებული ზოგიერთი ობიექტი თუ აკმაყოფილებს მაშინ დააბრუნებს თრუს, every-ს შემთხვევაში თუ ყველა არ იქნება იქნება ფოლსი
// let array=[100,25,4,8].every(function(item){
//     return item < 125;
// })
// console.log(array);

// sort -ზრდადობის და კლებადობის მიხედვით

// let array=[100, 225,4,8].sort(function(x,y){
//     return y - x;
// })
// console.log(array);

// მაქსიმალური რიცხვის ამოღება
// let array=[100, 225,4,8];
// let maxvalue=array.sort((x,y)=> y-x)[0];
// console.log(maxvalue);

// concate
// let array1=['nino', 'ana'];
// let array2=['beka','sandro'];

// let array=array1.concat(array2);
// console.log(array);

// reduce

// let array=[[0,1],[2,3],[4,5]].reduce(function(accumalator, currentvalue) {
//     return accumalator.concat(currentvalue);
// })
// console.log(array);

// let array=[[15,-3,10],[25,-2,5],[-100,-5,6]];
// for(let item of array){
//     for(let positive of item){
//         if (positive>0) {
//             console.log(positive);
//         }
//     }
// }

// let array=[[15,-3,10],[25,-2,5],[-100,-5,6]].reduce((accumulator, currentValue)=>accumulator.concat(currentValue));
// let newArray=array.filter(item => item > 0);
// console.log(newArray);

// splice
// let array=['html','css','javascript','python','c#'];
// // array.splice(1,2);
// // console.log(array);
// // scan delete elements
// // let arra2=array.splice(1,3);
// // console.log(arra2);
// // delete javascirpt and add new element instead of javascript
// // array.splice(2,1,'nodeJS');
// // console.log(array);
// // add new value
// // array.splice(2,0,'java');
// // console.log(array);
// // delete reverse
// array.splice(-2,1);
// console.log(array);

// foreach
// let array=[10,25,4,9];
// array.forEach(function(item){
//     console.log(item);
// })

// es6
// let user={
//     name:'sandro',
//     age:25;
// }
// let printname=user.name+ " " + 'is' + " " +user.age+" " +'age';
// console.log(printname);

// let user={
//         name:'sandro',
//         age:25
//     }
   
let number=5;
// if(number<10){
// } else{
//     console.log(hello);
// }

let result=(number <10) ? 'hello' : 'error';