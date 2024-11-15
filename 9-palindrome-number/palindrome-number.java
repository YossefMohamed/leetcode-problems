
class Solution {
    public boolean isPalindrome(int x) {
        if(x < 0)
        return false;
        int num = x;
        int r = 0;
        while(true){
            int remi = x%10;
            r = (r *10) + remi;
            x/=10;
            if(x <=0){
                break;
            }
        }
                System.out.println(r);  // false

      return r==num;
    }
}