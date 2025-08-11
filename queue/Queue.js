import LinkedList from "../linked-list/LinkedList.js";

class Queue{
    constructor(){
        this.list = new LinkedList();
    }
    enqueue(val){
        this.list.insert(val);
        return this;
    }
    dequeue(){
        return this.list.deleteAt(0);
    }

}
export default Queue;