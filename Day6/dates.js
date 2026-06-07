//Dates
// let myDate=new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);//very imp for interview answer of typeof myDate is Object
// let myCreatedDate=new Date(2026,5,26,5,3)//(year,month,day of month,hour of day,minute of day) //month starts from 0 in JS like 0=January 1=February etc in number value 
// let myCreatedDate=new Date(2026,5,26)//(year,month,day of month)

let myCreatedDate=new Date("2026-03-26")//yyyy-mm-dd

let myTimeStamp=  Date.now()
// console.log(myTimeStamp.toLocaleString());
// // console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate1=new Date()
console.log(newDate1);
console.log(newDate1.getMonth()+1);//month+1 to get exact month as in JS month starts form 0=Jan so month +1 will return 1=Jan
console.log(newDate1.getDay());
//imp concept method below
newDate1.toLocaleString('default',{
    weekday:"long"
})