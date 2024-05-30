const getRandom = (max) => {
    return Math.floor(Math.random() * max);
}

function RandomResult(data){
    if (!Array.isArray(data) || data.length === 0) {
        return null; // handle the case where data is not an array or is empty
    }
    let id = getRandom(data.length);
    return data[id];
}

export default RandomResult;
