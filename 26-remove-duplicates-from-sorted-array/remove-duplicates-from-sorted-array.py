class Solution(object):
    def removeDuplicates(self, nums):
        if not nums:
            return 0
        unique_ptr = 0
        for i in range(len(nums)):
            if nums[i] != nums[unique_ptr]:
                unique_ptr += 1
                nums[unique_ptr] = nums[i]
        
        return unique_ptr + 1
