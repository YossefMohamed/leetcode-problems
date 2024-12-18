/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        var isSingle = true;
        for (var j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] === nums[j]) {
                isSingle = false;
                break; 
            }
        }
        if (isSingle) {
            return nums[i];
        }
    }
};
