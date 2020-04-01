export const getPercentage = (total, number, decimals = 0) => {
    if (!Number.isNaN(total) && !Number.isNaN(number)){
        return (number * 100 / total).toFixed(decimals);
    }
    return 0;
};

export const getMockApiResponseTime = () => {
    return Math.floor((Math.random() + 0.1) * 10000);
};

export const maybeThrowApiError = () => {
    const chance =  Math.round(Math.random() * 10);
    return chance <= 2;
};