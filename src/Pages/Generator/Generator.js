import styles from './Generator.module.css';

import { useState } from 'react';
import {Link, useNavigate} from 'react-router-dom';
import swal from 'sweetalert';

import {MdLock} from 'react-icons/md';


export default function Generator(){
    const navigate = useNavigate();
    const [upp, setUpp] = useState(false);
    const [low, setLow] = useState(false);
    const [numb, setNumb] = useState(false);
    const [simb, setSimb] = useState(false);
    const [charValue, setChar] = useState(0);
    
    
    const char = (text) => {
        setChar(text.target.value);
    }
    const rand = require('../../Scripts/RandomNum/GenerateNum');
    const charLowerCase = ()=> String.fromCharCode(rand(97, 123));
    const charUpperCase =  ()=> String.fromCharCode(rand(65, 91));
    const charNumber = ()=> String.fromCharCode(rand(48, 58));
    const simbols = '/-_;/]}[{!@#$%&*()';
    const simbol = Array.from(simbols).join('');

    function toggleUpperCase(){
        setUpp(!upp);
    }

    function toggleLowerCase(){
        setLow(!low);
    }

    function toggleNumb(){
        setNumb(!numb);
    }

    function toggleSimb(){
        setSimb(!simb);
    }
    
    function createPass(char, upperCase, lowerCase, numbers, simbols) {

        let pass = [];

        
    
        for(let i=0; i<=char; i++){

            upperCase && pass.push(charUpperCase());
            lowerCase && pass.push(charLowerCase());
            numbers && pass.push(charNumber());
            simbols && pass.push(simbol[rand(0, simbol.length)]);
        }
    
        return pass.join('').slice(0, char);
    }   

    
    

    return(
        <section className={styles.generator} id='generatorContainer'>
            <MdLock/>
            <form className={styles.form}>
                <div className={styles.char}>
                    <p>Quantos caracteres você deseja?</p>
                    <input type="number" placeholder='Insira um valor entre 5 e 20' min='1' max='20' id='qtdChar' onChange={char}/>
                </div>
                
                <p>O que deseja incluir na sua senha?</p>
                
                <div className={styles.formCheckbox}>
                
                <div className={styles.upperCase}>
                <input type="checkbox" id='chk-upperCase' onChange={toggleUpperCase}/>
                <label>Letras maiúsculas</label>
                </div>
                
                <div className={styles.lowerCase}>
                <input type="checkbox" id='chk-lowerCase' onChange={toggleLowerCase}/>
                <label>Letras minúsculas</label>
                </div>
                
                <div className={styles.numbers}>
                <input type="checkbox" id='chk-numbers' onChange={toggleNumb}/>
                <label>Números</label>
                </div>
                
                <div className={styles.simbols}>
                <input type="checkbox" id='chk-simbols' onChange={toggleSimb}/>
                <label>Símbolos</label>
                </div>

                
                
                
                
                
                </div>
            </form>
                
                
                
            <button className={styles.btnSubmit} id='#submit' onClick={()=>{
               localStorage.setItem("password", createPass(charValue, upp, low, numb, simb));
               if(upp === false && low === false && numb === false && simb === false){
                
                swal({
                    icon: 'error',
                    title: 'Oops, parece que você esqueceu de marcar pelo menos um tipo de caractere.'
                })
                
                
               } else if(charValue === 0){
                swal({
                    icon: 'error',
                    title: 'Oops, parece que você esqueceu de inserir um valor.'
                })
               } else if(charValue > 20){
                swal({
                    icon: 'error',
                    title: 'Digite um valor menor do que 20'
                })
            } else{
                navigate('/password')
               }
            }}>
                <Link>CRIE UMA SENHA PARA MIM</Link></button>
        </section>
    )
}
    

    
   
    
    
    
    

    
    
