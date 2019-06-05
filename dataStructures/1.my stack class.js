/*
Your Stack class should have a push method.
Your Stack class should have a pop method.
Your Stack class should have a peek method.
Your Stack class should have a isEmpty method.
Your Stack class should have a clear method.
The peek method should return the top element of the stack
The pop method should remove and return the top element of the stack
The isEmpty method should return true if a stack does not contain any elements
The clear method should remove all element from the stack */

//es6
class Stack { 
    constructor(){
        this.collection = [];
    }
    
    print() {
        console.log(this.collection);
    };
    push(item){
        this.collection[this.collection.length] = item;
    }
    pop(){
        let tec = [];
        let last = this.collection[this.collection.length-1];
        
        for (let i = 0; i < collection.length-1; i++){
            tec[i] = this.collection[i];
        }

        this.collection = tec
        return last
    }
    peek(){
        return this.collection[this.collection.length-1]
    }
    isEmpty(){
        return this.collection.length == 0
    }
    clear(){
        this.collection = [];
        
    }
}



let mystack = new Stack()
mystack.print()
mystack.push(0)
mystack.print()
mystack.push(1)
mystack.print()
console.log(mystack.peek())
console.log(mystack.isEmpty())
mystack.clear()
console.log(mystack.collection)
//console.log(mystack)