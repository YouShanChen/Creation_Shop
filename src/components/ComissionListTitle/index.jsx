import styles from "./comissionlisttitle.module.css"
import { theme} from "antd";
export default function ComissionListTitle() {
    const {
        token: { colorPrimary,colorTextBase,colorText},
    } = theme.useToken();
    return (
        <div className={styles.box} >
            <p className={styles.comissionListTitle} style={{backgroundColor:colorPrimary,color:colorText}}>
                篩選結果
            </p>
        </div>
    );
}