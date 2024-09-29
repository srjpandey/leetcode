class Solution {
public:
    bool increasingTriplet( vector<int>& nums) {
        if (nums.size() < 3) {
            return false;
        }
        int one = nums[0], two = INT_MAX, three = nums[0], four = INT_MAX;
        for (int i = 0; i < nums.size();i++) {
            if (nums[i] < three && four > nums[i]) {
                three = nums[i];
                four = INT_MAX;
            } else if (nums[i] < four && nums[i] > three) {
                four = nums[i];
            }
            if (three <= one && four <= two) {
                one = three;
                two = four;
            }
            if (one < two && two < nums[i]) {
                return true;
            }
        }
        return false;
    }
};