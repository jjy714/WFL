


function MakeResultPresentable(dataAfterComputation){
    let foodresult;
    for (var key in dataAfterComputation){
        if (key === 'Food name'){
            foodresult = dataAfterComputation[key]
        }
        else{
            continue
        }
    }
    return foodresult;
}


export default MakeResultPresentable;