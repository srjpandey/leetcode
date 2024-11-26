class RecentCounter {
    reqTime: number[] = [];

    ping(t: number): number {
        this.reqTime.push(t);

        const limit = t - 3000;
        let l = 0;
        let r = this.reqTime.length - 1;

        while (l < r) {
            const mid = Math.floor((l + r) / 2);

            this.reqTime[mid] < limit
                ? l = mid + 1
                : r = mid;
        }

        return this.reqTime.length - r;
    }
}