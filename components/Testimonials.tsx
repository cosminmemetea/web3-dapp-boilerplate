import styles from '../styles/Testimonials.module.css'
import { Circle } from './Circle';
import {users} from "../data";
import Image from 'next/image';
export function Testimonials(){
    return(
        <div className={styles.container}>
            <Circle backgroundColor="darkblue" left="50vh"/>
            <h1 className={styles.title}>Testimonials</h1>
            <div className={styles.wrapper}>
                {users.map(user=>(
                    <div key ={user.id} className={styles.card}> 
                        <Image
                        src={`/img/${user.logo}`}
                        width="30"
                        height="30"
                        >
                        </Image>
                        <p className={styles.comment}>{user.comment}</p>
                        <div className={styles.person}>
                            <Image
                            className={styles.avatar}
                            src={`/img/${user.avatar}`}
                            width="100"
                            height="100"
                            ></Image>
                            <div className={styles.info}>
                                <span className={styles.username}>{user.name}</span>
                                <span className={styles.jobTitle}>{user.title}</span>
                            </div>
                      
                        </div>
                    </div>
                  
                ))}

            </div>
        </div>
    );
}