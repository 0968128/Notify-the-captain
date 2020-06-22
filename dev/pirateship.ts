/// <reference path="ship.ts" />

class PirateShip extends Ship implements Observer {
    // Fields
    private captain:Captain
    private _subscribed:boolean = false

    public get subscribed():boolean { return this._subscribed }
    public set subscribed(value:boolean) { this._subscribed = value }

    constructor() {
        super()
        this.captain = new Captain(this)
        this.draw()
    }

    notify():void {
        this.captain.style.backgroundImage = "url(images/emote_alert.png)" 
    }

    public changeSubscription(ship:PirateShip) {
        if(ship.subscribed) {
            ship.subscribed = !ship.subscribed
            Horn.getInstance().unsubscribe(ship)
            ship.style.backgroundImage = "url(images/ship-unregistered.png)"
        } else if(!ship.subscribed) {
            ship.subscribed = !ship.subscribed
            Horn.getInstance().subscribe(ship)
            ship.style.backgroundImage = ship.activeImage
        }
    }
}

window.customElements.define("ship-component", PirateShip as any)