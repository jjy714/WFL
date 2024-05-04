import React, {createContext} from "react";


export default SelectContext = createContext({
    Question : '',
    Answer : '',
    setQuestion: () => {},
    setAnswer: () => {},
})