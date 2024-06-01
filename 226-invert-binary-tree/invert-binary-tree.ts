/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


function invertTree(root: TreeNode | null): TreeNode | null {
    const preLeft = root?.left || null
    const preRight = root?.right|| null
    if(root){
     root.left = preRight || null
     root.right=preLeft|| null}
   preLeft && invertTree(preLeft)
    preRight &&invertTree(preRight)
    return root
};