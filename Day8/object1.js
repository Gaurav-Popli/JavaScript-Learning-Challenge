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

const users=[
    {id:1,
        email:"123@abc.com",
    },
    {id:2,
        email:"223@abc.com",
    },
    {id:3,
        email:"323@abc.com",
    }
]
console.log(users[1].email)
console.log(instaUser1)
console.log(Object.keys(instaUser1))//gives array of keys of the object
console.log(Object.values(instaUser1))//gives array of values of the object
console.log(Object.entries(instaUser1))//gives array of key value pairs of the object

console.log(instaUser1.hasOwnProperty("isLoggedIn"))//gives true if the object has the property mentioned in the parameter otherwise gives false