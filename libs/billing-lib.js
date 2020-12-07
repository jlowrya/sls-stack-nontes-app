export function calculateCost(storage) {
    const rate = storage <= 10
    ? 4
    : storage <= 100
        ? 2
        : 1;
    console.log(rate);
    return rate * storage * 100;
}