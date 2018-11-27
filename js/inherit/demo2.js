function Person(){
    this.names = ['kevin','daisy'];
}
//this 永远跟函数运行的方式有关
function Child(){
    //得到Person 的属性？
    Person.call(this);
}

var child1 = new Child();
console.log(child1.names);
var child2 = new Child();
console.log(child2.names)