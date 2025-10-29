import {useState} from 'react'
import Shop from './Shop.jsx'
import DataBase from './DataBase.jsx'
import ItemPage from './ItemPage.jsx'
import './App.css'

function App() {
    const [login, setLogin] = useState("авторизоваться")
    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [loginName, setLoginName] = useState("")
    const [password, setPassword] = useState("")
    const [isAddItem, setIsAddItem] = useState(false)
    function handleCheckboxChange(event) {
        if (event.target.checked) {
            setLogin('зарегистрироваться')
        } else {
            setLogin('авторизоваться')
        }
    }

    function handleFormSubmit(event) {
        setIsLoggedIn(<DataBase loginName={loginName} passwords={password} idd={login}/>)

        event.preventDefault()

    }

    if (isLoggedIn) {
        return <Shop setIsLoggedIn={setIsLoggedIn} setIsAddItem={setIsAddItem}/>

    } else if (isAddItem){
        return <ItemPage setIsLoggedIn={setIsLoggedIn} setIsAddItem={setIsAddItem}/>
    } else {
        return (
            <>
                <h1>Нужно {login}!</h1>
                <div className={"start-menu"}>
                    <label className={'switch'}>
                        <input type={'checkbox'} id={"bik"} onChange={handleCheckboxChange}/>
                        <span className={'slider'}></span>
                    </label>
                    <form onSubmit={handleFormSubmit}>
                        <label htmlFor={'login'}>Логин</label>
                        <input id={'login'} onChange={prev => setLoginName(prev.target.value)}/>
                        <label htmlFor={'password'}>Пароль</label>
                        <input id={'password'} onChange={prev => setPassword(prev.target.value)}/>
                        <input type={'submit'}/>
                    </form>
                </div>
            </>
        )
    }

}

export default App
