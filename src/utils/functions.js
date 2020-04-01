export const getPercentage = (total, number, decimals = 0) => {
    if (!Number.isNaN(total) && !Number.isNaN(number)){
        return (number * 100 / total).toFixed(decimals);
    }
    return 0;
};