// Constructors of List and Nodes
function List(){
	this.head=null;
}

function Node(val){
	this.val=val;
	this.next=null;
}

//Make the array into Single linked list. 
function arrToNode(arr){
	var list = new List();
	list.head= new Node(arr[0]);
	var curr = list.head;
	for (var i=1; i<arr.length; i++){
		curr.next = new Node(arr[i]);
		curr = curr.next;
	}
	return list;
}

//Print the SLL 
function printList(list){
	if(!list.head){
		return "Empty list"
	}
	var str="";
	console.log("List head: "+list.head.val)
	var curr = list.head;
	while(curr){
		str+=curr.val+" -> ";
		curr=curr.next;

	}
	str+="null";
	return str;
}


newList = arrToNode([1,2,3,4,2,1,1]);
console.log(printList(newList));
