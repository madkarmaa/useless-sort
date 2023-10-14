const uselessSort = (arr) => {
    if (!arr) throw new Error('No array was passed');
    if (!arr.length) throw new Error('The array is empty');
    if (!Array.isArray(arr)) throw new TypeError("That's not an array");

    arr = [...arr];
    for (let i = 0; i < Math.floor(Math.random() * 100); i++) arr.push(arr[Math.floor(Math.random() * arr.length)]);
    return arr.sort(() => Math.random() - 0.5);
};

module.exports = uselessSort;
