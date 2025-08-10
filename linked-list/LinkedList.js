class Node{
    constructor(val){
        this.val = val;
        this.next = null
        this.prev = null
    }
}
class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    insert(data){
        if(data === undefined || data === null){
            return false;
        }
        if(this.head == null){
            this.head = new Node(data);
        }else{
            let currNode = this.head;
            while(currNode.next){
                currNode = currNode.next;
            }
            const newNode = new Node(data);
            newNode.prev = currNode; 
            currNode.next = newNode;
        }
        this.size++;
    }

    insertAt(data, index){
        if(data === undefined || data === null){
            return false;
        }
        let i=0;
        let temp = this.head;
        const newNode = new Node(data);

        while(i<index){
            temp = temp.next;
            i++;
        }
        const previous = temp.prev;
        newNode.next = temp;
        previous.next = newNode;
        newNode.prev = previous; 
        temp.prev = newNode;
        this.size++;
    }

    deleteAt(index){
        if(index >= this.size){
            return false;
        }
        let i=0,temp = this.head;
        while(i<index){
            temp = temp.next;
            i++;
        }

        const previous = temp.prev;
        if(previous)
            previous.next = temp.next;
        else
            this.head = temp.next;
        
        const next = temp.next;
        if(next)
            next.prev = previous;
        
        temp.prev = null;
        temp.next = null;
        this.size--;
    }

    getAt(index){
        if(index >= this.size){
            return false;
        }
        let i=0,temp = this.head;
        while(i<index){
            temp = temp.next;
            i++;
        }
        return temp;
    }
    
    print(){
        let currNode = this.head;
        while(currNode){
            console.log({val: currNode.val, next: currNode.next, prev:currNode.prev});
            currNode = currNode.next;
        }
        console.log({size: this.size})
    }
    
}
export default LinkedList;