import styles from "./comissionlisttitle.module.css"
import { theme} from "antd";
export default function ComissionListTitle() {
    const {
        token: { colorPrimary, colorBgBase,colorTextBase,colorItem,colorNavItem},
    } = theme.useToken();
    return (
        <div className={styles.box} >
            <p className={styles.comissionListTitle} style={{backgroundColor:colorPrimary,color:colorTextBase}}>
                篩選結果
            </p>
        </div>
    );
}