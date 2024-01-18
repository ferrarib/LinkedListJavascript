
class LinkedList {
  
    constructor(head = null) {
      this.head = head;
    }
  
    head(){
      return this.head;
    }
  
    tail() {
      let node = this.head;
      while(node.next){
        node = node.next;
      }
  
      return node;
    }
  
    at(index) {
  
      if (index > this.size() - 1){
        return "Out of Bounds";
      }
  
      let node = this.head;
      for(let i = 0; i < index; i++){
        node = node.next;
      }
  
      return node;
    }
  
    append(value){
      let newNode = new Node();
      newNode.value = value;
  
      let node = this.head;
  
      if (node == null){
        this.head = newNode;
        return;
      }
      
      while(node.next){
        node = node.next;
      }
  
      node.next = newNode;
    }
  
      prepend(value){
      let newNode = new Node();
      newNode.value = value;
  
      let node = this.head;
  
      newNode.next = node;
      this.head = newNode;
    }
  
    size() {
      let node = this.head;
  
      let count = 0;
  
      while(node){
        count++;
        node = node.next;
      }
  
      return count;
    }
  
    pop() {
      let node = this.head;
      while(node.next.next){
        node = node.next;
      }
  
      node.next = null;
    }
  
    contains(value){
      let node = this.head;
  
      while(node){
        if (node.value === value)
          return true;
         
        node = node.next;
      }
  
      return false;
    }
  
    find(value){
      let node = this.head;
      let index = 0;
  
      while(node){
        if (node.value === value)
          return index;
         
        node = node.next;
        index++;
      }
  
      return null;
    }
  
    insertAt(value, index){
      let newNode = new Node();
      newNode.value = value;
  
      if (index === 0){
        this.prepend(value);
        return;
      }
  
      if (index >= this.size()){
        this.append(value);
        return;
      }
  
      let tail = this.at(index);
      newNode.next = tail;
  
      let head = this.head;
      for (let i = 0; i < index - 1; i++){
        head = head.next;
      }
  
      head.next = newNode;
  
    }
  
    removeAt(index){
      if (index == null || index === 0){
        this.head = this.head.next;
        return;
      }
  
      if (index > this.size() - 1){
        return;
      }
  
       let head = this.head;
      for (let i = 0; i < index - 1; i++){
        head = head.next;
      }
  
      head.next = head.next.next;
    }
  
    toString(){
      let node = this.head;
      let result = "";
      while(node){
        result += `( ${node.value} ) -> `;
        node = node.next;
      }
  
      result += 'null'
  
      return result;
    }
  
  }
  
  class Node {
    constructor(){
      this.value = null;
      this.next = null;
    }
  }
  
  let list = new LinkedList();
  list.append(3);
  list.append(4);
  list.prepend(5);
  list.prepend(6)
  list.insertAt(10,10);
  list.removeAt(4);
  list.removeAt(3);
  list.removeAt(2);
  list.removeAt(1);
  console.log(list.toString());
  