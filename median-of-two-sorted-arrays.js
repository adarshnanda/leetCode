/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const mergedArray = []
    const totalLen = nums1.length+nums2.length;
    for(let i=0;i<totalLen;i++){
        const j = nums1.length-1;
        const k = nums2.length-1;
        if(j<0 || nums1[j]<nums2[k]){
            mergedArray.push(nums2.pop());
        }else{
            mergedArray.push(nums1.pop());
        }
    }
    const length = mergedArray.length;
    const mid = length/2;
    if(length%2){
        return mergedArray[Math.floor(mid)];
    }else{
        return (mergedArray[mid]+mergedArray[mid-1])/2;
    }
};
