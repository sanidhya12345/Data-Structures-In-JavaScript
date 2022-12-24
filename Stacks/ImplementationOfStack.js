//create a stack
var stack=function(){
    this.count=0;
    this.storage={};

    this.push=function(value){
        this.storage[this.count]=value; 
        this.count++;
    }
    //Removes and returns the value at the end of stack
    this.pop=function(){
        if(this.count==0){
            return undefined;
        }
        this.count--;
        var result=this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size=function(){
        return this.count;
    }

    //Returns the value at the end of stack
    this.peek=function(){
        return this.storage[this.count-1];
    }
}

var myStack=new stack();

myStack.push(1)
myStack.push(2)
console.log(myStack.peek())
console.log(myStack.pop())
console.log(myStack.peek())
console.log(myStack.size())