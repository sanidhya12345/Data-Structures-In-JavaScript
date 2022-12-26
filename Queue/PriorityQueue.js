function ProrityQueue(){
    let collection=[];

    this.print=()=>{
        console.log(collection);
    };

    this.isEmpty=()=>{
        return collection.length===0;
    }
    this.enqueue=(element)=>{
        if(this.isEmpty())
          collection.push(element)
        else{
            var added=false;
            for(let i=0;i<collection.length;i++){
                if(element[1]<collection[i][1]){
                    collection.splice(i,0,element);
                    added=true;
                    break;
                }
            }
            if(!added){
                collection.push(element);  
            }
        }
    }

    this.dequeue=()=>{
        return collection.shift()[0];
    }

    this.size=()=>{
        return collection.length;
    }

    this.front=()=>{
        return collection[0];
    }
}

var pq=new ProrityQueue()

pq.enqueue(['sanidhya',2])
pq.enqueue(['ashish',3])
pq.enqueue(['ramesh',1])
pq.enqueue(['ankit',4])
pq.print()
pq.dequeue()
console.log(pq.front())