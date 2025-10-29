import {useState} from "react";

export default function ItemPage({setIsLoggedIn, setIsAddItem,}) {
    const [itemName, setItemName] = useState('')
    const [itemDescription, setItemDescription] = useState('')
    const [itemCount, setItemCount] = useState(1)
    const [items, setItems] = useState([])

    function handleFormSubmit(event) {
        setItems([...items, item()])
        setItemName("")
        setItemDescription("")
        setItemCount(0)
        event.preventDefault()

    }

    const handleChangePage = () => {
        setIsAddItem(false)
        setIsLoggedIn(true)
    }
    const item = () => {
        return (
            <>
                <h1>{itemName}</h1>
                <p>{itemDescription}</p>
                <button onClick={setItemCount(prev => prev - 1)}>-</button>
                <p>{itemCount}</p>
                <button onClick={setItemCount(prev => prev + 1)}>+</button>
            </>
        )
    }
    return (
        <>
            <h1>Item Page</h1>
            <button onClick={() => setIsAddItem(false)}>Выйти в меню</button>
            <br/>
            <button onClick={() => handleChangePage()}>Вернуться в магазин</button>
            <br/>
            <form onSubmit={handleFormSubmit}>
                <input type={"text"} value={itemName} onChange={event => setItemName(event.target.value)}/>
                <input type={"text"} value={itemDescription}
                       onChange={event => setItemDescription(event.target.value)}/>
                <input type={"submit"}/>
            </form>
            {items}
        </>

    )
}