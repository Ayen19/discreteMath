const { log } = console;

log("Hello world");

class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertNode(value) {
        if (value <= this.value) {
            if (!this.left) this.left = new BST(value);
            else this.left.insertNode(value);
        } else if (value > this.value) {
            if (!this.right) this.right = new BST(value);
            else this.right.insertNode(value);
        }
    }
}

let myBst = new BST(50);

myBst.insertNode(30);
myBst.insertNode(80);
myBst.insertNode(24);
myBst.insertNode(32);
myBst.insertNode(71);
myBst.insertNode(85);
myBst.insertNode(21);
myBst.insertNode(22);
myBst.insertNode(31);
myBst.insertNode(40);
myBst.insertNode(84);
myBst.insertNode(89);
log(myBst);