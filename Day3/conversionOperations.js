// // let score=33
// // let score1="33"
// // let score2="33abc"
// // // let score3=33abc //reuturns error since alphanumeric value
// // let score4=null
// // let score5=undefined
// // let score6=true
// // let score7=false


// // console.log(typeof(score))//print type of "score using method"
// // console.log(typeof score) //print type of score using second way

// // let valueInNumber=Number(score)//Number is converting the actual type of score to type "number" type casting taking place  
// // console.log(typeof valueInNumber)
// // console.log(valueInNumber)  //returns NaN if value in score is alphanumeric or undefined meaning "Not a Number"
// // console.log(typeof score1);
// // console.log(typeof score2);
// // console.log(typeof score3);
// // console.log(typeof score4);
// // console.log(typeof score5);
// // let valueInNumber5=Number(score5)
// // console.log(typeof valueInNumber5)
// // console.log("value in number 5 is:",valueInNumber5)
// // console.log(typeof score6);
// // console.log(typeof score7);
// // let valueInNumber6=Number(score6)
// // console.log(valueInNumber6);
// // let valueInNumber7=Number(score7)

// // console.log(valueInNumber7);
// // //Notes
// // // value "33"=>coverted to 33(type is number)
// // // value "33abc"=>returns NaN(not a number )
// // // value true=>1
// // //value false=>0

// // let isLoggedIn=1
// // console.log(typeof isLoggedIn);

// // let booleanIsLoggedIn=Boolean(isLoggedIn)
// // console.log(typeof booleanIsLoggedIn);
// // console.log(booleanIsLoggedIn);


// // let isLoggedIn1="gaurav"
// // let booleanIsLoggedIn1=Boolean(isLoggedIn1)
// // console.log(typeof booleanIsLoggedIn1);
// // console.log(booleanIsLoggedIn1);

// // //1=>true
// // //0=>false
// // //empty quotes("")=>false
// // //value in quotes(eg."gaurav")=>true


// // let someNumber=33
// // let stringSomeNumber=String(someNumber)
// // console.log(stringSomeNumber);
// // console.log(typeof stringSomeNumber);


// // ---------operations-----------//

// let value=33
// let negValue=-value
// // console.log(negValue);
// // console.log(2+2);
// // console.log(2-2);
// // console.log(2*2);
// // console.log(2/2);
// // console.log(2**2);
// // console.log(2%2);
// // let str1="gaurav"
// // let str2=" popli"
// // let str3=str1+str2
// // console.log(str3);

// // console.log(2+"1");//all 3 return 21 not value =3 this is string concatination
// // console.log("2"+"1");//all 3 return 21 not value =3 this is string concatination
// // console.log("2"+1);//all 3 return 21 not value =3 this is string concatination
// // console.log("1"+2+2); //gives 122 simple logic if string is first operation and others will also be treated as string  don't use this ambigious code use parenthesis 
// // console.log(1+2+"2");//gives 32 simple if numbers are first operation then first arithmetic operation will be performed and the string operation here, concatination will be performed don't use this ambigious code use parenthesis 

// // console.log((1+2)*2);//use this kind of code its impressive and unnambigious gives correct output as result value=6


// // console.log(2-1);    //all the subtractions give answer =1
// // console.log(2-"1");
// // console.log("2"-"1");
// // console.log("2"-1);

// console.log(true);
// console.log(+true);
// console.log(-true);

// console.log(+"");


// let num1,num2,num3
// num1=num2=num3=2+2  //dont use this practice since others in your team will also read this code and must understand it its important to remember in industry

// console.log([num1,num2,num3])//printing values of all num1,to to num3

// let gameCounter=100
// gameCounter++
// console.log(gameCounter)