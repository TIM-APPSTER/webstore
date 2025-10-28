import {useState} from "react";

export default function DataBase({login,password, idd}){
    const [baza,setBaza] = useState([])

    function CreateUser({login, password}) {
        setBaza(prev => ([...prev, { login, password }]))

    }

    function FindUser({login, password}) {
        return baza.some(user => user.login === login && user.password === password)
    }
    if (idd === "зарегистрироваться" && !FindUser({login, password})) {
        CreateUser({login, password})
        return true
    } else if (idd === "авторизоваться") {
        return FindUser({login, password})
    } else {
        return false
    }
}

