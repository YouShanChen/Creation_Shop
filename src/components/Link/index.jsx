import { Link } from "react-router-dom"
import { theme } from "antd"

export default function (props) {
   const {
      token: { colorText},
    } = theme.useToken();
   return (
      <Link {...props} style ={{
         textDecoration: 'none',
         color: colorText,
      }}>
         {props.children}
      </Link>
   )
}