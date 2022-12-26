function Queue(){
   let collection =[];
   //print the queue elements.
   this.print=()=>{
       console.log(collection);
   };
   
   //Enqueue:-

   this.enqueue=(element)=>{
       collection.push(element);
   };

   //Dequeue:-

   this.dequeue=()=>{
       return collection.shift();
   };

   this.front=()=>{
       return collection[0];
   };

   this.size=()=>{
       return collection.length;
   };

   this.isEmpty=()=>{
       return collection.length===0;
   };

}

var q=new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.enqueue('d');
q.print();
q.dequeue()
q.print();
console.log(q.front())
console.log(q.size())
q.dequeue()
q.dequeue()
q.dequeue()
console.log(q.isEmpty())