import DoorModel from "../../model/door";

export function CreateDoors (qtd: number, temPresente: number) : DoorModel[] {
    return Array.from({length: qtd}, (_, i) => {
        const number = i + 1;
        const presente = number === temPresente;

        return new DoorModel(number, presente)
    })
}

export function attDoors(doors: DoorModel[], doorModify: DoorModel) {
    return doors.map(doorCurrent => {
        const doorModifyCurrent = doorCurrent.number === doorModify.number;

        if (doorModifyCurrent) {
            return doorModify
        } else {
            return doorModify.opendoor ? doorCurrent : doorCurrent.desselect()
        }
    })
}