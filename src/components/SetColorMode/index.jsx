import { theme } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { Sun, Moon } from "../Icons";
import styles from "./setcolormode.module.css"
import { selectLightMode, setColorMode } from "../../redux/colorSlice";

export default function SetColorMode() {
    const { token: { colorTextBase ,colorReverse} } = theme.useToken();
    const lightMode = useSelector(selectLightMode);
    const dispatch = useDispatch();
 
    const toggleColor = () => {
       dispatch(setColorMode(!lightMode))
    }
 
    return (
       <div onClick={toggleColor} className={styles.cartSummary} >
          {
             lightMode ? (
                <Sun color={colorTextBase} background={colorReverse}/>
             ) : (
                <Moon color={colorTextBase} background={colorReverse}/>
             )
          }
       </div>
    );
 }