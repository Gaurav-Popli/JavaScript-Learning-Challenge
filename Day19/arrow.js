const user={
    username:"Gaurav",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);//prints the complete current context
   }

}
user.welcomeMessage()

user.username="bob"
user.welcomeMessage()


 console.log(this);//returns or prints empty curly braces since in node environment the  this keyword is referring to empty object as there is no global context present 