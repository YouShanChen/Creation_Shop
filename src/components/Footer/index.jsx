import styles from './footer.module.css';
import { Row, Col } from "antd";
import { TwitterOutlined, FacebookOutlined, InstagramOutlined } from '@ant-design/icons';
export default function Footer() {

    return (

        <div>

            <footer className={styles.footer}>

                <Row gutter={[20, 20]}>
                    <Col justify="center" span={15} >
                        <Row justify="center">
                            <a href="/" className={styles.footerLink}>首頁</a>
                        </Row >
                        <Row justify="center">
                            <a href="/" className={styles.footerLink}>訂單</a>
                        </Row>
                        <Row justify="center">
                            <a href="/" className={styles.footerLink}>收藏</a>
                        </Row>

                    </Col>
                    <Col span={3}>
                        <a href="https://www.facebook.com/no.ki.75491856/">
                            <FacebookOutlined style={{ color: 'white', fontSize: '3rem' }} /></a>

                    </Col>
                    <Col span={3}>
                        <a href="https://www.instagram.com/nokinok_art/">
                            <InstagramOutlined style={{ color: 'white', fontSize: '3rem' }} /></a>
                    </Col>
                    <Col span={3}>
                        <a href="https://twitter.com/noki_nok_">
                            <TwitterOutlined style={{ color: 'white', fontSize: '3rem' }} /></a>
                    </Col>
                </Row>



                <p className={styles.copyRight}>
                    ©2023 Creation Shop
                </p>
            </footer>
        </div>

    );
}