import {useState} from 'react'
import Shop from './Shop.jsx'
import './App.css'

function App() {
    const [isUserLoggedIn, setUserLoggedIn] = useState(false)
    const login = "TIM"
    const password = "TIM"
    const handleLoginChangeClick = () => setUserLoggedIn(prev => !prev)
    if (isUserLoggedIn) {
        return (
            <>
                <button type={"button"} onClick={handleLoginChangeClick}>Выйти с магазина</button>
                <Shop/>
            </>
        )


    } else if (!isUserLoggedIn) {
        return (
            <div className={"login-form"}>
                <h1>Нужно залогинится!</h1>
                <form className={"login-group"}>
                    <label htmlFor={"login"}>Введите логин</label>
                    <input type={"text"} id={"login"}/>
                    <br/>
                    <br/>
                    <label htmlFor={"login"}>Введите пароль</label>
                    <input type={"password"} id={"password"}/>
                    <br/>
                    <br/>
                    <input type={"submit"} value={"Продолжить"}/>
                </form>
            </div>
        )

    }
}

export default App
