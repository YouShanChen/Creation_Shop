import styles from "./icons.module.css"

export function Sun({ color }) {
    return (
      <div className={styles.box} style={{color:color}}>
         <div  className={styles.squre} ></div>
         <div className={styles.textBox}><div className={styles.text}>亮</div></div>
      </div>

    );
 }
 
 export function Moon({ color }) {
    return (
      <div className={styles.box} style={{color:color}}>
      暗
   </div>
    );
 }