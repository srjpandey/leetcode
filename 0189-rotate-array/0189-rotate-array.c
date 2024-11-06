void rotate(int* nums, int numsSize, int k) {
    k = k%numsSize;
    if(k==0) return;
    int i = 0;
    int j = numsSize-k-1;
    while(i<j){
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }

    i = numsSize-k;
    j = numsSize-1;
    while(i<j){
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }

    i = 0;
    j = numsSize-1;
    while(i<j){
        int temp = nums[i];
        nums[i] = nums[j];
        nums[j] = temp;
        i++;
        j--;
    }
}