import styles from './Password.module.css'

import {Link} from 'react-router-dom'
import { CopyToClipboard } from 'react-copy-to-clipboard'

import {RxCopy} from 'react-icons/rx'
import {FaRedoAlt} from 'react-icons/fa'
import {IoIosArrowDropleftCircle} from 'react-icons/io'
import swal from 'sweetalert'

export default function Password(){

    const password = localStorage.getItem("password");

    function copy(){
        swal({
            title: 'Copiado!',
            icon: 'success',
            timer: 1500
        })
    }
    
    return(
        <div className={styles.password}>
            <section>
                <div className={styles.text}>
                    <h1>Prontinho!</h1>
                    <p>Já pode pegar sua senha</p>
                </div>
                
                <div className={styles.pass}>
                    <p id='pass'>{password}</p>
                </div>

                <div className={styles.btns}>
                
                <CopyToClipboard text={password}>
                <button className={styles.btnCopy} onClick={copy}><RxCopy/> <br/>Copiar</button>
                </CopyToClipboard>
                <button className={styles.btnGen}><Link to='/'><FaRedoAlt/> <br/>Gerar outra</Link></button>
                
        
                
                
                </div>

                <div>
                <button className={styles.btnBack}><Link to='/'><IoIosArrowDropleftCircle/> Voltar</Link></button>
                </div>
               
                
                   
                

                

                
                
            </section>
                
        </div>
    )
}