import styles from "./comissionstate.module.css"
import { Row, Col } from "antd";
export default function ComissionState() {
    return (
        <div className={styles.box}>
            <div className={styles.title}>委託狀態</div>
            <div className={styles.list}>
                <div className={styles.col}>
                    <div className={styles.squre}></div>
                    <div className={styles.text}>訂金支付</div>
                </div>
                <div className={styles.bar}></div>
            </div>
            <Row gutter={[0, 0]}>

                <Col span={1}>
                    <div className={styles.col}>
                        <div className={styles.squre}> 123</div>
                        <div className={styles.text}>訂金支付</div>
                    </div>
                </Col>
                <Col span={1}>
                    <div className={styles.bar}>1</div>
                </Col>

            </Row>
        </div>
    );
}