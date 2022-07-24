import styles from '../../styles/Door.module.css'
import DoorModel from '../../model/door'
import Presente from './PresenteComponent';

interface DoorProps {
    door: DoorModel,
    onChange: (newDoor: DoorModel) => void
}

function renderDoor(select: any, door: any, open: any) {
    return (
        <div className={styles.door}>
            <div className={styles.number}>{door.number}</div>
            <div className={styles.macaneta} onClick={open}></div>
        </div>
    )
}

function Door(props: DoorProps) {
    const {door} = props;
    const select = door.select && !door.opendoor ? styles.select : '';

    const toggleselect = (e:any) => props.onChange(door.toggleselect());
    const open = (e:any) => {
        e.stopPropagation()
        props.onChange(door.open())
    }
    
    return (
        <div className={styles.area} onClick={toggleselect}>
            <div className={`${styles.estrutura} ${select}`}>
                {!door.opendoor ? renderDoor(select, door, open) : 
                    door.temPresente ? <Presente/> : false
                }
            </div>
            <div className={styles.floor}></div>
        </div>
    )
}

export default Door;