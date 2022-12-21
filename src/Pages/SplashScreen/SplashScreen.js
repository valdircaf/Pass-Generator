import  styles from './SplashScreen.module.css'
import {MdLock} from 'react-icons/md'

export default function SplashScreen(){
 


    return(
        
        <section className={styles.splashScreen}>
            <MdLock/>
            <h1>Pass Generator</h1>
        </section>
    )
}