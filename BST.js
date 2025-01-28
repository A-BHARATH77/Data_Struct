class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

// Function to create a new node
function createNode(data) {
    return new Node(data);
}
function inorder(temp, outputDiv1) {
    //alert("this is inorder.")
    if (temp === null) {
        return;
    }
  
    inorder(temp.left, outputDiv1);
    outputDiv1.innerHTML += temp.data + ' ';
    inorder(temp.right, outputDiv1);
  }
function preorder(temp, outputDiv2) {
    if (temp === null) {
        return;
    }

    outputDiv2.innerHTML += temp.data + ' ';
    preorder(temp.left, outputDiv2);
    preorder(temp.right, outputDiv2);
}
function postorder(temp, outputDiv3) {
    if (temp === null) {
        return;
    }

    postorder(temp.left, outputDiv3);
    postorder(temp.right, outputDiv3);
    outputDiv3.innerHTML += temp.data + ' ';
}

// Function to insert a node in the BST
function insertNode(root, data) {
    if (root === null) {
        return createNode(data);
    }

    if (data < root.data) {
        root.left = insertNode(root.left, data);
    } else {
        root.right = insertNode(root.right, data);
    }

    return root;
    
}
function deleteNode(root, data) {
    if (!root) {
        return root; // Base case: the tree is empty
    }

    // Recursively traverse the tree
    if (data < root.data) {
        root.left = deleteNode(root.left, data);
    } else if (data > root.data) {
        root.right = deleteNode(root.right, data);
    } else {
        // Node with only one child or no child
        if (!root.left) {
            return root.right;
        } else if (!root.right) {
            return root.left;
        }

        // Node with two children: get the inorder successor (smallest in the right subtree)

        let minLargerNode = findMin(root.right);
        root.data = minLargerNode.data; // Copy the inorder successor's value
        root.right = deleteNode(root.right, minLargerNode.data); // Delete the inorder successor
    }
    return root; // Return the (possibly unchanged) root pointer
}
function findMin(node) {
    while (node.left) {
        node = node.left;
    }
    return node;
}

// Function to print the tree in a tree-like format
function printTree(node) {
    if (!node) return "";

    function traverse(node) {
        if (!node) return '';

        let left = traverse(node.left);
        let right = traverse(node.right);

        return `
            <div class="node">
                ${node.data}
                <div class="children">
                    <div class="left-link">${left ? left : ''}</div>
                    <div class="right-link">${right ? right : ''}</div>
                </div>
            </div>
        `;
    }

    return traverse(node);
}

// Driver code
let root = null;

function insertElement() {
    const elementInput = document.getElementById('elementInput');
    const data = parseInt(elementInput.value);

    if (isNaN(data)) {
        alert("Please enter a valid number");
        return;
    }

    root = insertNode(root, data);
    elementInput.value = ''; // Clear the input box
   // document.getElementById('treeOutput').innerHTML = printTree(root);

   
    updateTraversals();

}
function deleteElement() {
    alert("delete")
    const deleteInput = document.getElementById('deleteInput');
    const data1 = parseInt(deleteInput.value);

    if (isNaN(data1)) {
        alert("Please enter a valid number");
        return;
    }

    root = deleteNode(root,data1);
    deleteInput.value = ''; // Clear the input box
   // document.getElementById('treeOutput').innerHTML = printTree(root);
    
  
updateTraversals();
}

function updateTraversals() {
    
  alert("update")

const outputDiv1 = document.getElementById('output1');
outputDiv1.innerHTML = 'The In-order traversal of the BST is : ';
console.log("Calling inorder");
inorder(root, outputDiv1);
    const outputDiv2 = document.getElementById('output2');
   outputDiv2.innerHTML = 'The Pre-order traversal of the BST is: ';
    preorder(root, outputDiv2);

    const outputDiv3 = document.getElementById('output3');
    outputDiv3.innerHTML = 'The Post-order traversal of the BST is: ';
    postorder(root, outputDiv3);
}

document.addEventListener("DOMContentLoaded", function() {
    const button1 = document.getElementById('button1');
    if (button1) {
      button1.addEventListener('click', () => {
        window.location.href = 'home.html';
      });
    } 
  });