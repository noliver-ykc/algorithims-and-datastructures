// push only

class Node {
  constructor(val){
      this.val = val;
      this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }
  push(val){
      var newNode = new Node(val);
      if(!this.head){
          this.head = newNode;
          this.tail = this.head;
      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length++;
      return this;
  }
  pop(){
    let current = this.head;
    let newTail;
    if(!current) return undefined;
    while(current.next) {
        newTail = current;
        current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if(this.length === 0){
        this.head = null;
        this.tail = null;
    }
    return current;

}
}

var list = new SinglyLinkedList()
list.push("Hello")
list.push("goodbye")