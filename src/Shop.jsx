import Item from './Item.jsx'

export default function Shop({setIsLoggedIn}) {
    return (
        <>
            <h1>Магазин</h1>
            <button onClick={() => setIsLoggedIn(false)}>Выйти в меню</button>
        </>

    )
}