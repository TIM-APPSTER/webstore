import {useState} from 'react'
import Shop from './Shop.jsx'
import DataBase from './DataBase.jsx'

import './App.css'

function App() {
    const [login, setLogin] = useState("авторизоваться")
    function handleCheckboxChange(event) {
        if (event.target.checked) {
            setLogin('зарегистрироваться')
        } else {
            setLogin('авторизоваться')
        }
    }
    return (
        <>
            <h1>Нужно {login}!</h1>
            <div className={"start-menu"}>
                <label className={'switch'}>
                    <input type={'checkbox'} id={"bik"} onChange={handleCheckboxChange}/>
                    <span className={'slider'}></span>
                </label>

                <label htmlFor={'login'}>Логин</label>
                <input id={'login'} />

                <label htmlFor={'password'}>Пароль</label>
                <input id={'password'} />
            </div>
        </>
    )
}

export default App
