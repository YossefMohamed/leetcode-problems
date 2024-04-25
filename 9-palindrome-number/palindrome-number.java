class Solution {
    public boolean isPalindrome(int x) {
        // Check for negative numbers and single digit numbers
        if (x < 0 || (x != 0 && x % 10 == 0)) {
            return false;
        }

        int reversed = 0;
        int original = x;

        // Reverse the integer
        while (x > 0) {
            int digit = x % 10;
            reversed = reversed * 10 + digit;
            x /= 10;
        }

        // Compare the original and reversed integers
        return original == reversed;
    }
}