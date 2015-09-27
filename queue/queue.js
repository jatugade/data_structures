/**
 * Queue represents a first-in-first-out (FIFO) list of objects
 */
function Queue() {
	var head;
	var tail;

	/**
	 * Inserts the specified element into this queue.
	 */
	var offer = function(item) {
		if(tail) {
			tail.node = new Node(item, null);
			tail = tail.node;
		} else {
			head = tail = new Node(item, null);
		}
	};

	/**
	 * Retrieves and removes the head of this queue, or returns null if this queue is empty.
	 */
	var poll = function() {
		if(head) {
			var item = head.item;
			head = head.node;
			return item;
		} else {
			return null;
		}
	};

	/**
	 * Retrieves, but does not remove, the head of this queue, or returns null if this queue is empty.
	 */
	var peek = function() {
		if(head) {
			return head.item;
		} else {
			return null;
		}
	};

	var Node = function(item, node) {
		this.item = item;
		this.node = node;
	};

	return {
		offer:offer,
		poll:poll,
		peek:peek
	}
}