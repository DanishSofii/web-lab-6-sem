class Queue{
    constructor(){
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        if(this.isEmpty()){
            return "Queue Empty";
        }
        else{
            return this.items.shift();
        }
    }
    front(){
        if(this.isEmpty()){
            return "Queue Empty";
        }
        return this.items[0];
    }
    isEmpty(){
        return this.items.length ===0;
    }
    size(){
        return this.items.length;
    }
    clear(){
        this.items = [];
    }
    print() {
        console.log(this.items.toString());
    }
}

module.exports = Queue;