class Node{
    constructor(value){
        this.info = value;
        this.link = null;
    }
}

class SingleLinkedList{
    constructor(){
        this.start = null;
    }

    // Create LinkedList if there is no Node 
    // Insertion at the end
    createList = (data) => {
        let node = new Node(data);
        if (this.start == null){
            this.start = node
        }
        else{
            let currentNode = this.start;
            while (currentNode.link){
                currentNode = currentNode.link;
            }
            currentNode.link = node;
        }
    }

    // Insert in the beginning
    insertBeginning = (data) =>{
        let node = new Node(data);
        node.link = this.start;
        this.start = node;
    }

    // Insert after 
    insertAfter = (data, x) =>{
        let currentNode = this.start;
        while(currentNode){
            if(currentNode.info == x){
                return
            }
            currentNode = currentNode.link;
        }
        if(currentNode){
            let node = new Node(data);
            node.link = currentNode.link;
            currentNode.link = node;
        }
        else{
            return "Not Present in the List"
        }
        let node = new Node(data);
        node.link = this.start;
        this.start = node;
    }

    //Insert before
    insertBefore = (data, x) =>{
        let currentNode = this.start;
        if(currentNode){
            return "List is empty";
        }
        while(currentNode.link){
            if(currentNode.link.info == x){
                return
            }
            currentNode = currentNode.link
        }
        if(currentNode.link){
            return "Not present in the List"
        }
        else{
            let node = new Node(data);
            node.link = currentNode.link;
            currentNode.link = node;
        }
    }

    //Insert at position
    insertAtPosition = (data, k) => {
        if(k == 1){
            let node = new Node(data);
            node.link = this.start;
            this.start = node;
            return
        }
        let currentNode = this.start;
        let count = 1;
        while (count < k-1 && currentNode){
            currentNode = currentNode.link;
            count+=1;
        }
        if(currentNode){
            return "Can't insert at this position"
        }
        else{
            let node = new Node(data);
            node.link = currentNode.link;
            currentNode.link = node;
        }
    }

    //Delete first node
    deleteFirstNode = () => {
        if(this.start){
            return
        }
        this.start = this.start.link
    }

    //Delete Last Node
    deleteLastNode = () => {
        if(this.start){
            return
        }
        if(this.start.link){
            this.start = null;
            return
        }
        let currentNode = this.start;
        while (currentNode.link.link){
            currentNode = currentNode.link;
        }
        currentNode.link = null;
    }

    //Delete node 
    deleteNode = (x) =>{
        if(this.start){
            return
        }

        //first node deletion
        if(this.start.info == x){
            this.start = null;
            return
        }

        let currentNode = this.start;
        while (currentNode.link){
            if(currentNode.link.info == x){
                return
            }
            currentNode = currentNode.link;
        }
        if(currentNode){
            return "Not present in the List";
        }
        else{
            currentNode.link = currentNode.link.link;
        }
    }

    // Reverse the List
    reverseList = () => {
        let prevNode = null;
        let nextNode = null;
        let currentNode = this.start;
        while(currentNode){
            nextNode = currentNode.link;
            currentNode.link = prevNode;
            prevNode = currentNode;
            currentNode = nextNode;
        }
        this.start = prevNode;
    }

    // Count number of Nodes in LinkedList
    countNodes = () => {
        if(this.start == null){
            return 0;
        }
        else{
            let currentNode = this.start;
            let count = 1;
            while (currentNode.link){
                count += 1;
                currentNode = currentNode.link;
            }
            return count;
        }
    }

    // Bubble sort by exchanging info
    bubbleSortExInfo = () =>{
        let end = null;
        while(end != this.start.link){
            let currentNode = this.start;
            while(currentNode != end){
                let nextNode = currentNode.link;
                if(currentNode.info > nextNode.info){
                    let temp = currentNode.info;
                    currentNode.info = nextNode.info;
                    nextNode.info = temp;
                }
                currentNode = currentNode.link;
            }
            end = currentNode;
        }
    }

    // Bubble sort by exchanging link
    bubbleSortExLink = () =>{
        let end = null;
        while(end != this.start.link){
            let currentNode = this.start;
            let prevNode = this.start;
            while(currentNode != end){
                let nextNode = currentNode.link;
                if(currentNode.info > nextNode.info){
                    let temp = currentNode.link;
                    currentNode.link = nextNode.link;
                    nextNode.link = temp;
                    if(currentNode != this.start){
                        prevNode.link = nextNode;
                    }
                    else{
                        this.start = nextNode;
                    }
                }
                prevNode = currentNode;
                currentNode = currentNode.link;
            }
            end = currentNode;
        }
    }

    // Search in LinkedList
    search = (x) => {
        let position = 1;
        let currentNode = this.start;
        while (currentNode){
            if(currentNode.info == x){
                return position;
            }
            position += 1;
            currentNode = currentNode.link;
        }
        return "Not Found"
    }

    // palindrome split linked list into two half
    isPalindrome = () =>{
    	let count = this.countNodes();
        if(count == 1){
        	return "Invalid I/P"
        }
        let mid = Math.ceil(count/2)
        let currentNode = this.start;
        let nextNode = currentNode.link;
        let newList = nextNode; // if length of list is two
        if(count%2 == 0){
        	for(let i=1; i<mid; i++){
            	currentNode = currentNode.link;
            	nextNode = currentNode.link;
        	}
            currentNode.link = null;
            newList = nextNode;
        }
        else{
        	for(let i=1; i<mid-1; i++){
            	currentNode = currentNode.link;
            	nextNode = currentNode.link;
        	}
            currentNode.link = null;
            newList = nextNode.link;
        }
        
        this.reverseList()
        
        //console.log(currentNode)
        //console.log(newList)
        
        return this.checkPlainrome(newList)
        
    }

	//checkPlainrome
    checkPlainrome = (second) => {
    	let first = this.start;
        while(first){
        	if(first.info == second.info){
            	first = first.link;
                second = second.link
            }
            else{
            	return false;
            }
        }
        return true;
    }

}