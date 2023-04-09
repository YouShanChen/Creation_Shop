import styles from "./comissionstate.module.css"
import { useState } from 'react'
import { Row, Col, Button } from "antd";
export default function ComissionState() {

var [state,addState] = useState(0);


    return (
        <div className={styles.box}>
            <div className={styles.title}>委託狀態</div>
            <div className={styles.list}>
                <div className={styles.col}>
                    <div className={state > 0 ? styles.squreComplete : styles.squre}></div>
                    <div className={styles.text}>訂金支付</div>
                </div>
                <div className={state > 1 ? styles.barComplete : styles.bar}></div>
                <div className={styles.col}>
                    <div className={state > 1 ? styles.squreComplete : styles.squre}></div>
                    <div className={styles.text}>草稿確認</div>
                </div>
                <div className={state > 2 ? styles.barComplete : styles.bar}></div>
                <div className={styles.col}>
                    <div className={state > 2 ? styles.squreComplete : styles.squre}></div>
                    <div className={styles.text}>線稿確認</div>
                </div>
                <div className={state > 3 ? styles.barComplete : styles.bar}></div>
                <div className={styles.col}>
                    <div className={state > 3 ? styles.squreComplete : styles.squre}></div>
                    <div className={styles.text}>上色確認</div>
                </div>
                <div className={state > 4 ? styles.barComplete : styles.bar}></div>
                <div className={styles.col}>
                    <div className={state > 4 ? styles.squreComplete : styles.squre}></div>
                    <div className={styles.text}>細化確認</div>
                </div>
                <div className={state > 5 ? styles.barComplete : styles.bar}></div>
                <div className={styles.col}>
                    <div className={state > 5 ? styles.squreComplete : styles.squre}></div>
                    <div className={styles.text}>餘額確認</div>
                </div>
                <div className={state > 6 ? styles.barComplete : styles.bar}></div>
                <div className={styles.col}>
                    <div className={state > 6 ? styles.squreComplete : styles.squre}></div>
                    <div className={styles.text}>交稿</div>
                </div>
            </div>
            <Button  onClick={()=>addState(state>7?state=0:state++)}>
                完成進度
            </Button>
        </div>
    );
}