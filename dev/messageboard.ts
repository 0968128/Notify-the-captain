/// <reference path="gameobject.ts" />

class MessageBoard extends GameObject {
    public constructor() {
        super()
    }
    
    public addMessage(text:string) {
        console.log("Er zou nu een message toegevoegd moeten worden.")
        let message = document.createElement("message")
        message.innerHTML = text
        this.appendChild(message)
    }
}

window.customElements.define("messageboard-component", MessageBoard)