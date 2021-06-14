/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

    for(var i=0;i<nums.length;i++){
        var num = target - nums[i];
        var secondIndex = nums.indexOf(num);
        if(secondIndex!==-1 && secondIndex!==i){
            return [i, secondIndex];
        }
    }
    
};


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum1 = function(nums, target) {
    var map = {};
    for(var i=0;i<nums.length;i++){
        map[target-nums[i]] = i;
        var nextNum = nums[i+1];
        if(nextNum in map){
            return [map[nextNum], i+1];
        }
        /*var secondIndex = nums.indexOf(target - nums[i]);
        if(secondIndex!==-1 && secondIndex!==i) {
            return [i, secondIndex];
        }*/
        
    }
};
