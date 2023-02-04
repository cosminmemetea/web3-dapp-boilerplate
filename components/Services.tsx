import Image from "next/image";

import { PropsWithChildren } from 'react';
import styles from '../styles/Services.module.css'

export type IService={
    id:number,
    name:string,
    description:string,
    animation:string 

}
export type ServicesProps = PropsWithChildren<{services:Array<IService>}>;

export function Services(props:ServicesProps) {
    return(
        <div className={styles.container}>   
        <h1 className={styles.title}>What We Can Offer You</h1>
        <h1 className={styles.subtitle}>Services we can help you with</h1>
        <div className={styles.services}>
  
        {props.services.map((service : IService)=>
                (<div className ={styles.service} key ={service.id} >
                  <span className={styles.catInfo}>  {service.description} </span>
                  <span className={styles.cat}>  {service.name} </span>
                  <div className={styles.media}> 
                     <Image
                       src={`/img/${service.animation}`} 
                       width="100%"
                       height="100%"
                       layout="responsive"
                       objectFit="cover"
                       alt=""
                       ></Image></div>
                </div>)
        )}
        </div>
        </div>
    );
}