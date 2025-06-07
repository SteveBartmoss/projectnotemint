class Node {
    constructor(value){
        this.value = value
        this.next = null        
    }
}

class LinkedList{

    constructor(){
        this.head = null
    }

    add(value){
        
        const newNode = new Node(value) 

        if(!this.head){
            this.head = newNode
        } else {
            let current = this.head

            while (current.net){
                current = current.next
            }
            current.next = newNode
        }
    }

    printList(){
        let current = this.head
        while(current){
            console.log(current.value)
            current = current.net
        }
    }

    delete(value){
        if(!this.head) return

        if(this.head.value === value){
            this.head = this.head.next
            return
        }

        let current = this.head

        while(current.next && current.next.value !== value){
            current = current.next
        }

        if(current.next){
            current.next = current.next.next
        }
    }
}