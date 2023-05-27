import styles from "./icons.module.css"
import { Button } from "antd"
export function Sun({ color, background }) {
   return (

      <Button type="link" styles={{ color: color, backgroundColor: background }}>
         Light
      </Button>
   );
}

export function Moon({ color, background }) {
   return (
      <Button type="link" styles={{ color: color, backgroundColor: background }}>
      Dark
   </Button>
   );
}