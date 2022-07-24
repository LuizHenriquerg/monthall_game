import {CreateDoors, attDoors } from '../../../src/functions/DoorsFunc'
import { useRouter } from '../../../node_modules/next/router'
import Door from '../../../src/components/DoorComponent'
import styles from '../../../styles/Game.module.css'
import Link from '../../../node_modules/next/link'
import { useEffect, useState } from 'react'

export default function Home() {
    const router = useRouter();
    const [doors, setDoors] = useState([]);
    const [validate, setvalidate] = useState(false);

    useEffect(() => {
        const qtdDoors = +router.query.portas;
        const temPresente = +router.query.presente;

        const doorsValidate = qtdDoors >= 3 && qtdDoors <= 100;
        const giftValidate = temPresente >= 1 && temPresente <= qtdDoors;

        setvalidate(doorsValidate && giftValidate);
    }, [doors])

    useEffect(() => {
        const qtdDoors = +router.query.portas;
        const temPresente = +router.query.presente;

        setDoors(CreateDoors(qtdDoors, temPresente));
    }, [router?.query])

    function renderDoors() {
        return doors.map(door => {
        return <Door key={door.number} door={door} onChange={newDoor => setDoors(attDoors(doors, newDoor))}></Door>
        })
    }

    return (
        <div className={styles.game}>
            <div className={styles.doors}>
                { validate ? renderDoors() : <h1>Valores inválidos!</h1>}
            </div>
            <div className={styles.buttons}>
                <Link href='/'>
                <button>Restart</button>
                </Link>
            </div>
        </div>
    )
}
