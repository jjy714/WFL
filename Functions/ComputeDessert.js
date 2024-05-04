
let dessert = [];

function ComputeDessert(answers){
    const jsonData = require("../food_data.json");
    
    for (var key in answers){
        try{
        if(key ==='Question5'){
            if(Object.values(answers).includes('Yes')){
                dessert = jsonData.filter(item=> {
                    const category = item.Category;
                    return (
                        category.includes('간식') &&
                        category.includes('디저트')
                    );
                })
            }
            else{
                return;
            }
            }
        }
        catch(err){
            alert(err);
        }
    }
    return dessert;
}

export default ComputeDessert;