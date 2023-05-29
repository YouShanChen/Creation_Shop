import styles from "./icons.module.css"
import { Button } from "antd"
export function Sun({ background }) {
   return (

      <Button className={styles.button} styles={{ backgroundColor: background }}>
         <p style={{ color: "#000000" }}>
            Light
         </p>

      </Button>
   );
}

export function Moon({ background }) {
   return (
      <Button className={styles.button} styles={{ backgroundColor: background }}>
         <p style={{ color: "#ffffff" }}>
            Dark
         </p>
      </Button>
   );
}