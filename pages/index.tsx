import { useState } from 'react'
import Link from '../node_modules/next/Link'
import Card from '../src/components/CardComponent'
import styles from '../styles/Form.module.css'
import EnterInput from '../src/components/EnterInputComponent'

export default function Home() {
  const [qtdDoors, setDoors] = useState(3)
  const [giftDoor, setGift] = useState(2)
  
  return (
    <div className={styles.form}>
        <div>
          <Card bgColor="#c0392c"><h1>Mont Hall</h1></Card>
          <Card>
            <EnterInput text='Gift door?' value={giftDoor} onChange={newGift => setGift(newGift)}/>
          </Card>
        </div>
        <div>
          <Card>
            <EnterInput text='Quantity doors?' value={qtdDoors} onChange={newDoors => setDoors(newDoors)}/>
          </Card>
          <Card bgColor="#28a085">
            <Link href={`/game/${qtdDoors}/${giftDoor}`}>
              <h2 className={styles.link}>Iniciar</h2>
            </Link>
          </Card>
        </div>
    </div>
  )
}
