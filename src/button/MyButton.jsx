import React, {useState} from "react"
export const MyButton = () => {
    const [data, setData] = useState(0);
    const handleClick = () => {
        setData(data + 1);
        alert("button clicked "+data);
    }
    return <button onClick={handleClick}>Testing Button</button>
}