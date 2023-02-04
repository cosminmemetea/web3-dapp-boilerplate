import {Circle} from "../components/Circle";
import style from "../styles/Contact.module.css";

const Contact = () => {
  return (
    // <div className={style.container}>
    //     <Circle backgroundColor="green" left="-40vh" top="-20vh" className={style.circle}/>
    //     <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" className={style.circle}/>
    //   <h1 className={style.title}>Get in Touch</h1>
    //   <form className={style.form}>
    //     <input className={style.inputS} type="text" placeholder="Name" />
    //     <input className={style.inputS} type="text" placeholder="Phone" />
    //     <input className={style.inputL} type="text" placeholder="Email" />
    //     <input className={style.inputL} type="text" placeholder="Subject" />
    //     <textarea
    //       className={style.textArea}
    //       rows={6}
    //       placeholder="Message"
    //     />
    //     <button className={style.button}>SUBMIT</button>
    //   </form>
    // </div>\
    <div className={style.container}>
        <Circle backgroundColor="green" left="-40vh" top="-20vh" className={style.circle}/>
        <Circle backgroundColor="yellow" right="-30vh" bottom="-60vh" className={style.circle}/>
      <div className={style.contactus}>
                                  
            <span className={style.cat}> Write us right now</span>

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
                <button className={style.button}>SUBMIT</button>
            </form>
      </div>
    </div>
      
  );
};

export default Contact;