const uselessSort = (arr) => {
    arr = [...arr];
    for (let i = 0; i < Math.floor(Math.random() * 100); i++) arr.push(arr[Math.floor(Math.random() * arr.length)]);
    return arr.sort(() => Math.random() - 0.5);
};

module.exports = uselessSort;
