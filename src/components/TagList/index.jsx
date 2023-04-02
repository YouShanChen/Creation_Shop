import styles from "./taglist.module.css"
import { Row, Col } from "antd";
export default function TagList() {

    return (

        <div className={styles.box}>
            <p className={styles.tagTitle}>
                作品標籤
            </p>
            <Row gutter={[24, 5]}>
                <Col xs={8} xl={4} >
                    <p className={styles.tagItem}>
                        標籤一
                    </p>
                </Col>
                <Col xs={8} xl={4} >
                    <p className={styles.tagItem}>
                        標籤一
                    </p>
                </Col>
                <Col xs={8} xl={4} >
                    <p className={styles.tagItem}>
                        標籤一
                    </p>
                </Col>
                <Col xs={8} xl={4} >
                    <p className={styles.tagItem}>
                        標籤一
                    </p>
                </Col>
                <Col xs={8} xl={4} >
                    <p className={styles.tagItem}>
                        標籤一
                    </p>
                </Col>
                <Col xs={8} xl={4} >
                    <p className={styles.tagItem}>
                        標籤一
                    </p>
                </Col>
            </Row>



        </div>


    );
}