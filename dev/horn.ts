/// <reference path="gameobject.ts" />

class Horn extends GameObject implements Subject {
    private observers:Observer[] = []
    private static instance:Horn
    
    private constructor() {
        super()

        this._position = new Vector(window.innerWidth / 2 - this.clientWidth / 2, window.innerHeight / 2 - this.clientHeight / 2)

        this.draw()
    }

    subscribe(observer: Observer): void {
        this.observers.push(observer)
    }

    unsubscribe(observer: Observer): void {
        let index = this.observers.indexOf(observer)
        this.observers.splice(index, 1)
    }

    notifyObservers(): void {
        for(const observer of this.observers) {
            observer.notify()
        }
    }

    public static getInstance() {
        if(!this.instance) {
            this.instance = new Horn()
        }
        return this.instance
    }
}

window.customElements.define("horn-component", Horn as any)