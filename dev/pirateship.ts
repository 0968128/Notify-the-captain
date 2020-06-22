/// <reference path="ship.ts" />

class PirateShip extends Ship implements Observer {
    // Fields
    private captain:Captain
    private subject:Subject

    constructor(subject:Subject) {
        super()
        this.captain = new Captain(this)
        this.subject = subject
        this.draw()
    }

    alert():void {
        this.style.backgroundImage = this.activeImage
    }

    notify():void {
        this.captain.style.backgroundImage = "url(images/emote_alert.png)" 
    }
}

window.customElements.define("ship-component", PirateShip as any)