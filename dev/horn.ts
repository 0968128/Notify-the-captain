/// <reference path="gameobject.ts" />

class Horn extends GameObject implements Subject {
    private observers:Observer[] = []
    
    constructor() {
        super()

        this._position = new Vector(window.innerWidth / 2 - this.clientWidth / 2, window.innerHeight / 2 - this.clientHeight / 2)

        this.draw()
    }

    subscribe(observer: Observer): void {
        this.observers.push(observer)
    }

    unsubscribe(observer: Observer): void {
        //this.observers.splice(0, 1, observer)
    }

    notifyObservers(): void {
        for(const observer of this.observers) {
            observer.notify()
        }
    }
}

window.customElements.define("horn-component", Horn)