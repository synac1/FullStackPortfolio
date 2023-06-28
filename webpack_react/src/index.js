import React from "react"
import {createRoot} from "react-dom/client"


const messagePar = document.createElement("p")
messagePar.innerHTML = "Message of the day"
document.body.append(messagePar)

const Hi =()=>{ return (<h1>Hello Component</h1>) }
const root = createRoot(document.getElementById("root"))
root.render(<Hi/>)