import Image from 'next/image';
import { Circle } from './Circle';
import styles from '../styles/Intro.module.css'
import serviceStyle from '../styles/Services.module.css'

import { useForm, SubmitHandler } from "react-hook-form";
import { useState } from "react";
interface IFormInput {
  firstName: string;
  lastName: string;
  age: number;
}

export function Intro() {
    const { register, handleSubmit } = useForm<IFormInput>();
    const onSubmit: SubmitHandler<IFormInput> = data => console.log(data);
    return(
        <div className={styles.container}>
            
            <Circle backgroundColor="#b0ff49" top="-20vh" left="-30vh"/>
            <Circle backgroundColor="#01c686" right="-50vh"/>

            <div className={styles.cart}>
                <h1 className={styles.title}>
                    {/* <span className={styles.brand}>ΛΞKTRO Blockchain Developers League</span> */}
                    <span className={styles.brand}>Empowering Health Care</span>
                </h1>
                <p className={styles.description}>Join a Network of Hospitals Improving Health Data Management</p>
                <p className={styles.description}>Secure Data Sharing Among Contributing Hospitals</p>
                 <p className={styles.description}>Transform Patient Care with AI-Powered Decisions, Together</p>

                {/* <button className={styles.button}>DISCOVER</button> */}
                <button className={styles.button}>JOIN RIGHT AWAY</button>

            </div>
            <div className={styles.cart}>
        <div className ={serviceStyle.service} >
                  <span className={serviceStyle.catInfo}> XΞDΞUM CORE  </span>
                  <span className={serviceStyle.cat}>    </span>
                  <div className={serviceStyle.media}> 
                     <Image
                       src={`/img/1.gif`} 
                       width="100%"
                       height="100%"
                       layout="responsive"
                       objectFit="cover"
                       alt=""
                       ></Image></div>
                </div>
        {/* <div className={styles.contactus}>
                              
        <span className={styles.cat}> Write us right now</span>

        <form className={style.form}>
            <input className={style.inputS} type="text" placeholder="Name" />
            <input className={style.inputS} type="text" placeholder="Phone" />
            <input className={style.inputL} type="text" placeholder="Email" />
            <input className={style.inputL} type="text" placeholder="Subject" />
            <textarea
            className={style.textArea}
            rows={6}
            placeholder="Message"
            />
            <button className={styles.button}>SUBMIT</button>
        </form>
       
        </div> */}

        {/* <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
            <input className={style.inputS} {...register("firstName", { required: true, maxLength: 20 })} />
            <input className={style.inputS} {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
            <input className={style.inputL} type="number" {...register("age", { min: 18, max: 99 })} />
            <input className={style.inputL} type="submit" />
        </form> */}
     
                {/* <Image 
                src='/img/ai.jpeg'
                 width="100%"
                  height="100%"
                   layout="fill"
                   objectFit="cover"></Image> */}
            </div>
        </div>
    );
}