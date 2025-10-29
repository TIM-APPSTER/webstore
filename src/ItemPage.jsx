export default function ItemPage ({setIsLoggedIn, setIsAddItem}) {
    const handleChangePage = () => {
        setIsAddItem(false)
        setIsLoggedIn(true)


    }
    return (
        <>
            <h1>Item Page</h1>
            <button onClick={() => setIsAddItem(false)}>Выйти в меню</button>
            <br />
            <button onClick={() => handleChangePage()}>Вернуться в магазин</button>
        </>

    )
}