function divide(dividend: number, divisor: number): number {
    const MAX_NEGATIVE_NUMBER = -2147483648
    const IS_DIVIDEND_NEGATIVE = dividend < 0
    const IS_DIVISOR_NEGATIVE = divisor < 0
    const IS_QUOTIENT_NEGATIVE = IS_DIVIDEND_NEGATIVE !== IS_DIVISOR_NEGATIVE

    let quotient = 0
    let tempQuotient: number, tempDivisor: number

    if (!IS_DIVIDEND_NEGATIVE) {
        dividend = -dividend
    }
    if (!IS_DIVISOR_NEGATIVE) {
        divisor = -divisor
    }

    while (dividend <= divisor) {
        tempDivisor = divisor
        tempQuotient = -1
        while (tempDivisor > (dividend >> 1)) {
            tempDivisor <<= 1
            tempQuotient <<= 1
        }
        dividend -= tempDivisor
        quotient += tempQuotient
    }

    return IS_QUOTIENT_NEGATIVE ? quotient : -(Math.max(quotient, MAX_NEGATIVE_NUMBER + 1));
};