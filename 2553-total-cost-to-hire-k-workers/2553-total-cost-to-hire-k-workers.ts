function totalCost(costs: number[], k: number, candidates: number): number {
    let totalCost = 0;
    let left = 0;
    let right = costs.length - 1;
    const leftMinHeap: number[] = [];
    const rightMinHeap: number[] = [];

    for (; left < candidates; left++) {
        minHeapAdd(leftMinHeap, costs[left]);
    }

    for (; right > costs.length - 1 - candidates && right >= left; right--) {
        minHeapAdd(rightMinHeap, costs[right]);
    }

    for (;k > 0;k--) {
        if (rightMinHeap[0] === undefined || leftMinHeap[0] <= rightMinHeap[0]) {
            totalCost += minHeapPop(leftMinHeap);
            if (left <= right) {
                minHeapAdd(leftMinHeap, costs[left++]);
            }
        } else {
            totalCost += minHeapPop(rightMinHeap);
            if (right >= left) {
                minHeapAdd(rightMinHeap, costs[right--]);
            }
        }
    }

    return totalCost;
};

const minHeapAdd = (heap: number[], item: number): void => {
    heap.push(item);

    let i = heap.length - 1;
    let parent = Math.floor((i - 1) / 2);

    while (heap[i] < heap[parent]) {
        [heap[i], heap[parent]] = [heap[parent], heap[i]];
        i = parent;
        parent = Math.floor((i - 1) / 2);
    }
}

const minHeapPop = (heap: number[]): number => {
    const item = heap[0];

    heap[0] = heap[heap.length - 1];
    heap.pop();

    let i = 0;
    let minChild = findMinChild(heap, i);

    while (heap[i] > heap[minChild]) {
        [heap[i], heap[minChild]] = [heap[minChild], heap[i]];
        i = minChild;
        minChild = findMinChild(heap, i);
    }

    return item;
}

const findMinChild = (heap: number[], i: number): number => {
    let leftChild = 2 * i + 1;
    let rightChild = 2 * i + 2;
    return heap[rightChild] === undefined || heap[leftChild] < heap[rightChild] ? leftChild : rightChild;
}