import styles from "./creator.module.css"
import { Row, Col } from "antd";

export default function CreatorList() {

    return (

        <div className={styles.box}>
            <p className={styles.creatorTitle}>
                熱門創作者
            </p>
            <Row  justify="space-around" gutter={[{xs:12,sm:12,md:24,lg:128}, 5]}>
                <Col   span={8} >
                    
                    <div className={styles.creatorItem}>
                        
                            <img src="/images/icon.png" alt="icon" className={styles.creatorImage} />
                        
                        <div className={styles.creatorText}>
                            <p className={styles.creatorName}>Noki</p>
                            <p className={styles.creatorDetail}>十年以上繪圖經驗<br/>有接案經歷<br/>擅長多種風格</p>

                        </div>
                    </div>
                </Col>
                <Col span={8} >
                <div className={styles.creatorItem}>
                        
                        <img src="/images/unknownicon.png" alt="icon" className={styles.creatorImage} />
                    
                    <div className={styles.creatorText}>
                    <p className={styles.creatorName}>未定</p>
                        <p className={styles.creatorDetail}>未定</p>

                    </div>
                </div>
                </Col>
                <Col span={8} >
                <div className={styles.creatorItem}>
                        
                        <img src="/images/unknownicon.png" alt="icon" className={styles.creatorImage} />
                    
                    <div className={styles.creatorText}>
                        <p className={styles.creatorName}>未定</p>
                        <p className={styles.creatorDetail}>未定</p>

                    </div>
                </div>
                </Col>
            </Row>
        </div>


    );
}