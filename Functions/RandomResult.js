const getRandom = (max) => {
    return Math.floor(Math.random() * max);
}

function RandomResult(data){
    let idx = Object.keys(data).length;
    let id = getRandom(idx);

    return data[id];
}

export default RandomResult;
