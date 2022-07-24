export default class DoorModel {
    #number: number;
    #temPresente: boolean;
    #select: boolean;
    #open: boolean;

    constructor(number: number, temPresente=false, select=false, open=false) {
        this.#number = number;
        this.#temPresente = temPresente;
        this.#select = select;
        this.#open = open;
    }

    get number() {
        return this.#number
    }

    get temPresente() {
        return this.#temPresente
    }

    get select() {
        return this.#select
    }

    get opendoor() {
        return this.#open
    }

    desselect() {
        const select = false;
        return new DoorModel(this.#number, this.#temPresente, select, this.#open);
    }

    toggleselect() {
        const select = !this.#select;
        return new DoorModel(this.#number, this.#temPresente, select, this.#open);
    }

    open() {
        const open = true;
        return new DoorModel(this.#number, this.#temPresente, this.#select, open);
    }
};