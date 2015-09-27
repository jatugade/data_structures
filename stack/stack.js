/**
 * Stack represents a last-in-first-out (LIFO) stack of objects
 */
function Stack() {
	var head;

	/**
 	 * Pushes an item onto the top of this stack.
	 */
	var push = function(item) {
		if(head) {
			var node = new Node(item, head);
			head = node;
		} else {
			head = new Node(item, null);
		}
		return true;
	};

	/**
	 * Removes the object at the top of this stack and returns that object as the value of this function.
	 */
	var pop = function() {
		if(head) {
			var node = head;
			head = head.node;
			return node.item;
		} else {
			return null;
		}
	};

	/**
	 * Looks at the object at the top of this stack without removing it from the stack.
	 */
	var peek = function() {
		return (head ? head.item : null);
	};

	/**
	 * Returns the 1-based position where an object is on this stack. 
	 */
	var search = function(item) {
		var index = 1;
		var current = head;
		while(current) {
			if(current.item === item) {
				return index;
			}
			current = current.node;
			index++;
		}
		return -1;
	};

	/**
	 * Tests if this stack is empty.
	 */
	var isEmpty = function() {
		return (head ? false : true);
	}

	var Node = function(item, node) {
		this.item = item;
		this.node = node;
	};
	
	return {
		push:push,
		pop:pop,
		peek:peek,
		search: search,
		isEmpty:isEmpty
	}
}


