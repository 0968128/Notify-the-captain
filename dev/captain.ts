class Captain extends HTMLElement {
    private ship:PirateShip

    constructor(pirateShip : PirateShip) {
        super()

        this.ship = pirateShip
        this.ship.appendChild(this)
    }
}

window.customElements.define("captain-component", Captain as any)