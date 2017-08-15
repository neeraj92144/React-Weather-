 var arr= ['a','b','c'];
//
// arr.forEach(arr =>  console.log(arr)
// );


var myFunc = (params) => { return params; }

//console.log(myFunc('Mera Function <--Neeraj Jangid--> '));

var that = this;
var person ={
  name : 'Andrew',
  greet : function (){
    arr.forEach( (name) => {
      console.log(this.name+'<<Name>>'+name)
    })
  }
}

person.greet();
