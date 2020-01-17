// #!/usr/bin/env node
// console.log('aa1');
// console.log(process.env);
//链表
function NodeList(val){
    this.val = val;
    this.next = null;
}
let head = new NodeList('head');
let ar = ['a','b','c','end'];
let cur = head;
ar.forEach(t=>{
    cur.next = new NodeList(t);
    cur = cur.next;
})
cur = head;
let nodeArr = [];
while(cur){
    nodeArr.unshift(cur.val);
    cur = cur.next;
}

function findNode(head,val){
    let cur = head;
    while(cur){
        if(cur.val == val) return cur;
        cur = cur.next;
    }
    return false;
}
function findPreNode(head,val){
    let cur = head;
    while(cur){
        if(cur.next.val == val) return cur;
        cur = cur.next;
    }
    return false;
}

//树
function TreeNode(data){
    this.data = data;
    this.left = null;
    this.right = null;
}

function insert(root,data){
    if(!root){
        return new TreeNode(data);
    }
    let cur = root;
    while(1){
        if(data > root.data){
            
            if(!cur.right){
                cur.right = new TreeNode(data);
                break;
            }
            cur = cur.right;
        }else{
            if(!cur.left){
                cur.left = new TreeNode(data);
                break;
            }
            cur = cur.left;
        }
        
    }
}

function findTreeNode(root,val){
    if(!root) return false;
    let cur = root,parent;
    while(cur){
        if(cur.data == val) return [cur,parent];
        if(cur.data > val) {parent = cur;cur = cur.left;}
        else {parent = cur;cur = cur.right;}
    }
    return false;
}

function rmTreeNode(root,val){
    
    if(!findTreeNode(val)) return false;
    let [node,parent] = findTreeNode(root,val);
    let side = parent.left == node?'left':'right';
    if(!node.left && !node.right) parent[side] = null;
    else if(!node.left && node.right) parent[side] = node.right;
    else if(node.left && !node.right) parent[side] = node.left;
    else{
        let cur = node;
        while(cur.right){
            cur = cur.right;
        }
        parent[side] = cur;
        if(cur != node.right){
            cur.right = node.right;
        }
        cur.left = node.left;
    }
}

let midArr = []
function midOrder(node){
    if(!node) return ;
    midArr.push(node.data);
    midOrder(node.left);
    midOrder(node.right);
}

let leftArr = []
function leftOrder(node){
    if(!node) return ;
    leftOrder(node.left);
    leftArr.push(node.data);
    leftOrder(node.right);
}

let rightArr = []
function rightOrder(node){
    if(!node) return ;
    rightOrder(node.left);
    rightOrder(node.right);
    rightArr.push(node.data);
}

let root = new TreeNode(20);
insert(root,18);
insert(root,15);
insert(root,24);
console.log(root);
midOrder(root);
leftOrder(root);
rightOrder(root);

export  let a = 'aaa';