import Item from './Item.jsx'

export default function Shop({setIsLoggedIn, setIsAddItem}) {
    const handleChangePage = () => {
        setIsAddItem(true)
        setIsLoggedIn(false)


    }
    return (
        <>
            <h1>Магазин</h1>
            <button onClick={() => setIsLoggedIn(false)}>Выйти в меню</button>
            <br />
            <button onClick={() => handleChangePage()}>Добавить новый товар на новой странице</button>
        </>

    )
}