class Main {
    private ships : PirateShip[] = []

    constructor() {
        // Subject
        let horn = Horn.getInstance()
        let messageboard : MessageBoard = new MessageBoard()

        for (let i = 0; i < 10; i++) {
            // Observers
            this.ships.push(new PirateShip())
        }

        for(const ship of this.ships) {
            ship.addEventListener("click", () => {
                ship.changeSubscription(ship)
            })
        }

        horn.addEventListener("click", () => { 
            messageboard.addMessage("Je hebt op de horn geklikt.")
            horn.notifyObservers()
        })
    }
}

window.addEventListener("load", () => new Main())