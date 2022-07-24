import styles from '../../styles/Card.module.css'

interface CardInterface {
   bgColor?: String
   children?: any
}

export default function Card(props: CardInterface) {
    return (
        <div className={styles.card} style={{
            backgroundColor: props.bgColor ?? '#fff'
        }}>
            {props.children}
        </div>
    )
}