import style from "../styles/Footer.module.css";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <div className={style.container}>
      <div className={style.cardL}>
        <h1 className={style.title}>XΞDΞUM</h1>
        <h1 className={style.linkTitle}>
          <Link href="/contact" passHref>
            <div className={style.link} >
              <span className={style.linkText}>WORK WITH US</span>
              {/* <Image
                // src={process.env.NEXT_PUBLIC_URL + "/img/link.png"}
                src=""
                width="40px"
                height="40px"
                alt=""
              /> */}
            </div>
          </Link>
        </h1>
      </div>
      <div className={style.cardS}>
        <div className={style.cardItem}>
          45 William Shakespeare STREET
          <br /> USA
           xedeum.ai@gmail.com
          <br /> 021 334 4443
        </div>
      </div>
      <div className={style.cardS}>
        {/* <div className={style.cardItem}>
          FOLLOW US:
          <br /> __FB __IN __BE __TW
        </div> */}
        <div className={style.cardItem}>
          © 2023 XΞDΞUM,
          <br />
          ALL RIGHTS RESERVED
        </div>
      </div>
    </div>
  )
}