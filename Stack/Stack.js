class Stack {
    constructor(){
        this.list = [];
    }
    push(val){
        this.list.push(val);
        return this;
    }
    pop(){
        return this.list.pop();
    }
}

export default Stack;