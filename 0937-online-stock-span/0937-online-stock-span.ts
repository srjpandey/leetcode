class StockSpanner {
  private stackOfPreviousPrices: number[];
  private spanMap: Map<number, number>;
  private currentPrices: number[];

  constructor() {
      this.stackOfPreviousPrices = [];
      this.spanMap = new Map();
      this.currentPrices = [];
  }

  next(price: number): number {
      this.currentPrices.push(price);
      let span = 1;

      let lastBiggestPriceIdx = this.stackOfPreviousPrices[this.stackOfPreviousPrices.length - 1];

      while (
          this.stackOfPreviousPrices.length !== 0 &&
          price >= this.currentPrices[lastBiggestPriceIdx]
      ) {
          span += this.spanMap.get(lastBiggestPriceIdx);
          this.stackOfPreviousPrices.pop();
          lastBiggestPriceIdx = this.stackOfPreviousPrices[this.stackOfPreviousPrices.length - 1];
      }

      this.spanMap.set(this.currentPrices.length - 1, span);
      this.stackOfPreviousPrices.push(this.currentPrices.length - 1);

      return span;
  }
}
