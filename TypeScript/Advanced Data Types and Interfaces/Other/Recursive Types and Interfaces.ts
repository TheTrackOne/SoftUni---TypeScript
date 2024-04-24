interface TreeNode {
    value :number;
    left :TreeNode;
    right :TreeNode;
};

type TreeNodeNew = {
    value :number, 
    left :TreeNodeNew,
    right :TreeNodeNew,
};

