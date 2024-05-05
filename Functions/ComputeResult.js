import React, { useContext } from "react";



function queryData(filter, data) {
	return data.filter(filter === filter);
}


let filteredData = [];
function ComputeResult(answers) {
	const jsonData = require("../food_data.json");
	//If the answer is spicy or not
	// What kind of food?
	// Hot or cold
	// Soup or not
	// Desert or not.
	for (var key in answers){
        if(answers == null){
            return console.log("no suggested answer available");
        }
        try{
        
        
        if(key === 'Question1'){
            if(Object.values(answers).includes('hot')){
                filteredData = jsonData.filter(item => item.Spiciness.includes('TRUE'));
            }
            else{
                filteredData = jsonData.filter(item => item.Spiciness.includes('FALSE'));
            }
        }
        if (key === 'Question2') {
            if (Object.values(answers).includes('Korean')) {
                filteredData = filteredData.filter(item => item.Category.includes('한식'));
            } else if (Object.values(answers).includes('Chinese')) {
                filteredData = filteredData.filter(item => item.Category.includes('중식'));
            } else if (Object.values(answers).includes('Japanese')) {
                filteredData = filteredData.filter(item => item.Category.includes('일식'));
            } else if (Object.values(answers).includes('Western')) {
                filteredData = filteredData.filter(item => item.Category.includes('양식'));
            } else if (Object.values(answers).includes('etc')) {

                filteredData = filteredData.filter(item => {
                    const category = item.Category;
                    return !(
                        category.includes('한식') ||
                        category.includes('중식') ||
                        category.includes('일식') ||
                        category.includes('양식') ||
                        category.includes('디저트') ||
                        category.includes('간식')
                    );
                });
            }
        }
        if(key === 'Question3'){
            if(Object.values(answers).includes('Hot')){
                // filteredData = filteredData.filter(item => item[Hot/Cold].includes('h'));
                filteredData = filteredData.filter(item => item["Hot/Cold"].includes('h') || item["Hot/Cold"].includes('Hot'));
            }
            
            else{
                filteredData = filteredData.filter(item => item["Hot/Cold"].includes('c') || item["Hot/Cold"].includes('Cold'));
            }
        }
        if(key === 'Question4'){
            if(Object.values(answers).includes('Rice')){
                // filteredData = filteredData.filter(item => item[Hot/Cold].includes('h'));
                filteredData = filteredData.filter(item => item["Rice/Noodle/Bread"].includes('밥'));
            }
            else if(Object.values(answers).includes('Noodle')){
                filteredData = filteredData.filter(item => item["Rice/Noodle/Bread"].includes('면'));
            }
            else if(Object.values(answers).includes('Bread')){
                filteredData = filteredData.filter(item => item["Rice/Noodle/Bread"].includes('빵'));
            }
            else{
                filteredData = filteredData.filter(item => {
                    const category = item["Rice/Noodle/Bread"];
                    return !(
                        category.includes('밥') ||
                        category.includes('면') ||
                        category.includes('빵')
                    );
                });
            }
        }
        if(key ==='Question5'){
            if(Object.values(answers).includes('Yes')){
                filteredData = filteredData.filter(item => item.Soup.includes('TRUE'));
            }
            else{
                filteredData = filteredData.filter(item => item.Soup.includes('FALSE'));
            }
        }
        }
       catch(err){
            alert(err)
       }

}
        return filteredData;
}




export default ComputeResult;
