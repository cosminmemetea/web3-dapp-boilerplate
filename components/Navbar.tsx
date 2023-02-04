import React from 'react'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'
import { Web3Address, Web3Button } from '.';
export function Navbar() {
    return(
        <div className={styles.container}>
            {/* <Link href='/'>ΛΞKTRO</Link> */}
            <Link href='/'>XΞDΞUM</Link>
            {/* <Web3Address/> */}
            <ul className={styles.list}>
                <li className={styles.listItem}>
                    <Web3Button/>
                </li>
                <li className={styles.listItem}>
                    <Link href='/whitepaper'>Whitepaper</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href='/team'>Team</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href='/portofolio'>Portofolio</Link>
                </li>
                <li className={styles.listItem}>
                    <Link href='/contact'>Contact</Link>
                </li>
            </ul>
     
        </div>
    );
}