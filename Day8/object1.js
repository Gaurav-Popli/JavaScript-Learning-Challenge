//const instaUser=new Object();//singleton oblject
const instaUser1={};//non singleton object ,object literal

instaUser1.id="123ab";
instaUser1.name="Gaurav";
instaUser1.isLoggedIn=true;  

//console.log(instaUser)
// console.log(instaUser1)

const regularUser={
    email:"123@abc.com",
    fullname:{
        userfullname:{
            firstname:"Gaurav",
            lastname:"Popli"
        }
    }

}
// console.log(regularUser.fullname.userfullname.firstname)

const obj1={1:"a",2:"b"};
const obj2={3:"c",4:"d"};
//const obj3={obj1,obj2};//nested object
// const obj3=Object.assign({},obj1,obj2);//merging two objects into one object i.e.in "{}"     named as obj3
const obj3={...obj1,...obj2}//using spread operator to merge two objects into one object i.e.in name as obj3
console.log(obj3)


