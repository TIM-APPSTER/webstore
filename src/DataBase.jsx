import {useState} from "react";

export default function DataBase({login,password, id}){
    const [baza,setBaza] = useState([])

    function CreateUser({login, password}) {
        setBaza(prev => ([...prev, { login, password }]))

    }

    function FindUser({login, password}) {
        return baza.some(user => user.login === login && user.password === password)
    }
    if (id === "зарегистрироваться") {
        CreateUser({login, password})
    } else {
        return FindUser({login, password})
    }
}

