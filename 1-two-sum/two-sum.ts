function twoSum(nums: number[], target: number): number[] {
    const numsObj  = {}
    for(let i=0 ; i<nums.length ; i++){
        const compl = target - nums[i] 
        if(numsObj[compl]!== undefined )
            return [numsObj[compl] , i]
        numsObj[nums[i]] = i
    }
};