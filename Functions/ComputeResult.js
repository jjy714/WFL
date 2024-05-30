import React, { useContext } from "react";

function queryData(filter, data) {
    return data.filter(filter === filter);
}

function ComputeResult(answers) {
    const jsonData = require("../data/food_data_copy.json");
    let filteredData = jsonData; 

    if (!answers || Object.keys(answers).length === 0) {
        console.log("No suggested answer available");
        return [];
    }

    for (const key in answers) {
        if (answers.hasOwnProperty(key)) {
            console.log(`Processing ${key}: ${answers[key]}`); 
            try {
                if (key === "Question1") {
                    if (answers[key] === "Very hot(About Buldak)" || answers[key] === "Medium spicy(About Shin ramyeon)") {
                        filteredData = filteredData.filter(item =>
                            item.Spiciness.includes("TRUE")
                        );
                    } else {
                        filteredData = filteredData.filter(item =>
                            item.Spiciness.includes("FALSE")
                        );
                    }
                }
                if (key === "Question2") {
                    if (answers[key] === "Korean") {
                        filteredData = filteredData.filter(item =>
                            item.Category.includes("한식")
                        );
                    } else if (answers[key] === "Chinese") {
                        filteredData = filteredData.filter(item =>
                            item.Category.includes("중식")
                        );
                    } else if (answers[key] === "Japanese") {
                        filteredData = filteredData.filter(item =>
                            item.Category.includes("일식")
                        );
                    } else if (answers[key] === "Western") {
                        filteredData = filteredData.filter(item =>
                            item.Category.includes("양식")
                        );
                    } else if (answers[key] === "etc") {
                        filteredData = filteredData.filter(item => {
                            const category = item.Category;
                            return !(
                                category.includes("한식") ||
                                category.includes("중식") ||
                                category.includes("일식") ||
                                category.includes("양식") ||
                                category.includes("디저트") ||
                                category.includes("간식")
                            );
                        });
                    }
                }
                if (key === "Question3") {
                    if (answers[key] === "Hot") {
                        filteredData = filteredData.filter(
                            item =>
                                item["Hot/Cold"].includes("h") ||
                                item["Hot/Cold"].includes("Hot")
                        );
                    } else {
                        filteredData = filteredData.filter(
                            item =>
                                item["Hot/Cold"].includes("c") ||
                                item["Hot/Cold"].includes("Cold")
                        );
                    }
                }
                if (key === "Question4") {
                    if (answers[key] === "Rice") {
                        filteredData = filteredData.filter(item =>
                            item["Rice/Noodle/Bread"].includes("밥")
                        );
                    } else if (answers[key] === "Noodle") {
                        filteredData = filteredData.filter(item =>
                            item["Rice/Noodle/Bread"].includes("면")
                        );
                    } else if (answers[key] === "Bread") {
                        filteredData = filteredData.filter(item =>
                            item["Rice/Noodle/Bread"].includes("빵")
                        );
                    } else {
                        filteredData = filteredData.filter(item => {
                            const category = item["Rice/Noodle/Bread"];
                            return !(
                                category.includes("밥") ||
                                category.includes("면") ||
                                category.includes("빵")
                            );
                        });
                    }
                }
                if (key === "Question5") {
                    if (answers[key] === "Yes") {
                        filteredData = filteredData.filter(item =>
                            item.Soup.includes("TRUE")
                        );
                    } else {
                        filteredData = filteredData.filter(item =>
                            item.Soup.includes("FALSE")
                        );
                    }
                }
                console.log(filteredData); 
            } catch (err) {
                alert(err);
            }
        }
    }
    return filteredData;
}

export default ComputeResult;
