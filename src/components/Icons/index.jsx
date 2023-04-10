import styles from "./icons.module.css"

export function Sun({ color }) {
    return (
      <div className={styles.lightbox} style={{color:color}}>
         亮
      </div>

    );
 }
 
 export function Moon({ color }) {
    return (
      <div className={styles.darkbox} style={{color:color}}>
      暗
   </div>
    );
 }