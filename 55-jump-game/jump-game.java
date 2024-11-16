public class Solution {
    public boolean canJump(int[] nums) {
        int farthest = 0;
        int counter = 0;
        for (int i = 0; i < nums.length; i++) {
            if (i > farthest) {
                return false;
            }
            if(farthest < i + nums[i]){
                farthest = i + nums[i];
            }
            if (farthest >= nums.length - 1) {
                return true;
            }
        }
        return false;
    }
}
