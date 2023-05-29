import { NavLink } from "react-router-dom"
import { theme } from "antd"

export default function (props) {
   const {
      token: { colorText },
    } = theme.useToken();
   return (
      <NavLink {...props} style ={{
         textDecoration: 'none',
         color: colorText,
      }}>
         {props.children}
      </NavLink>
   )
}