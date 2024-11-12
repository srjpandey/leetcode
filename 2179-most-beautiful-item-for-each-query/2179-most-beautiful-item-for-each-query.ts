function maximumBeauty(items: number[][], queries: number[]): number[] {

    // OPTIMIZATIONS
    // + Sort the items and queries, so we can do the lowest-priced query 
    //   first, then continue with its answer for the next query, etc.
    // + When we're done, map the answers back into the correct query order.

    const PRICE = 0;
    const BEAUTY = 1;

    const NITEMS = items.length;
    const NQUERIES = queries.length;

    items.sort((a, b) => (a[PRICE] - b[PRICE]));

    let sortedQueries: number[] = queries.slice().sort((a, b) => (a - b));

    let ansMap: Map<number, number> = new Map<number, number>();

    let maxBeauty: number = 0;

    let ii: number = 0;
    for (let iq = 0; iq < NQUERIES; ++iq) {

        let query: number = sortedQueries[iq];

        if (!ansMap.has(query)) {

            while (ii < NITEMS && items[ii][PRICE] <= query) {
                if (maxBeauty < items[ii][BEAUTY]) {
                    maxBeauty = items[ii][BEAUTY];
                }
                ++ii;
            }

            ansMap.set(query, maxBeauty);
        }
    }

    let ans: number[] = [];

    queries.forEach((query) => {
        ans.push(ansMap.get(query));
    });

    return ans;
};