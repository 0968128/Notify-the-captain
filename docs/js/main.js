"use strict";
class Captain extends HTMLElement {
    constructor(pirateShip) {
        super();
        this.ship = pirateShip;
        this.ship.appendChild(this);
    }
}
window.customElements.define("captain-component", Captain);
class GameObject extends HTMLElement {
    constructor() {
        super();
        this._position = new Vector(0, 0);
        this.rotation = 0;
        let game = document.getElementsByTagName("game")[0];
        game.appendChild(this);
    }
    get position() { return this._position; }
    draw() {
        this.style.transform = `translate(${this._position.x}px, ${this._position.y}px) rotate(${this.rotation}deg)`;
    }
}
class Horn extends GameObject {
    constructor() {
        super();
        this.observers = [];
        this._position = new Vector(window.innerWidth / 2 - this.clientWidth / 2, window.innerHeight / 2 - this.clientHeight / 2);
        this.draw();
    }
    subscribe(observer) {
        this.observers.push(observer);
    }
    unsubscribe(observer) {
        let index = this.observers.indexOf(observer);
        this.observers.splice(index, 1);
    }
    notifyObservers() {
        for (const observer of this.observers) {
            observer.notify();
        }
    }
    static getInstance() {
        if (!this.instance) {
            this.instance = new Horn();
        }
        return this.instance;
    }
}
window.customElements.define("horn-component", Horn);
class Main {
    constructor() {
        this.ships = [];
        let horn = Horn.getInstance();
        let messageboard = new MessageBoard();
        for (let i = 0; i < 10; i++) {
            this.ships.push(new PirateShip());
        }
        for (const ship of this.ships) {
            ship.addEventListener("click", () => {
                ship.changeSubscription(ship);
            });
        }
        horn.addEventListener("click", () => {
            messageboard.addMessage("Je hebt op de horn geklikt.");
            horn.notifyObservers();
        });
    }
}
window.addEventListener("load", () => new Main());
class MessageBoard extends GameObject {
    constructor() {
        super();
    }
    addMessage(text) {
        console.log("Er zou nu een message toegevoegd moeten worden.");
        let message = document.createElement("message");
        message.innerHTML = text;
        this.appendChild(message);
    }
}
window.customElements.define("messageboard-component", MessageBoard);
class Ship extends GameObject {
    constructor() {
        super();
        this._activeImage = "";
        this.colors = ["Green", "Blue", "Orange", "White", "Black", "Red"];
        this._color = "";
        this.rotation = Math.random() * 360;
        this._position = new Vector(Math.random() * window.innerWidth - this.clientWidth, Math.random() * window.innerHeight - this.clientHeight);
        this.createShip();
    }
    get color() { return this._color; }
    get activeImage() { return this._activeImage; }
    createShip() {
        Ship.numberOfShips++;
        if (Ship.numberOfShips > 6)
            Ship.numberOfShips = 1;
        this._activeImage = `url(images/ship${Ship.numberOfShips + 3}.png)`;
        this.style.backgroundImage = "url(images/ship-unregistered.png)";
        this._color = this.colors[Ship.numberOfShips - 1];
    }
}
Ship.numberOfShips = 0;
class PirateShip extends Ship {
    constructor() {
        super();
        this._subscribed = false;
        this.captain = new Captain(this);
        this.draw();
    }
    get subscribed() { return this._subscribed; }
    set subscribed(value) { this._subscribed = value; }
    notify() {
        this.captain.style.backgroundImage = "url(images/emote_alert.png)";
    }
    changeSubscription(ship) {
        if (ship.subscribed) {
            ship.subscribed = !ship.subscribed;
            Horn.getInstance().unsubscribe(ship);
            ship.style.backgroundImage = "url(images/ship-unregistered.png)";
        }
        else if (!ship.subscribed) {
            ship.subscribed = !ship.subscribed;
            Horn.getInstance().subscribe(ship);
            ship.style.backgroundImage = ship.activeImage;
        }
    }
}
window.customElements.define("ship-component", PirateShip);
class Vector {
    constructor(x, y) {
        this._x = 0;
        this._y = 0;
        this._x = x;
        this._y = y;
    }
    get x() { return this._x; }
    set x(value) { this._x = value; }
    get y() { return this._y; }
    set y(value) { this._y = value; }
}
//# sourceMappingURL=main.js.map