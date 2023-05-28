import styles from "./creator.module.css"
import { Row, Col ,theme} from "antd";

export default function CreatorList() {
    const {
        token: { colorCreatorList,colorCreator},
    } = theme.useToken();
    return (

        <div className={styles.box} style={{backgroundColor:colorCreatorList}}>
            <p className={styles.creatorTitle} >
                熱門創作者
            </p>
            <Row justify="space-around" gutter={[{ xs: 12, sm: 12, md: 24, lg: 128 }, 5]}>
                <Col span={8} >

                    <div className={styles.creatorItem} style={{backgroundColor:colorCreator}}>

                        <img src="/images/icon.png" alt="icon" className={styles.creatorImage} />

                        <div className={styles.creatorText}>
                            <p className={styles.creatorName}>Noki</p>
                            <p className={styles.creatorDetail}>不定時開放少量名額，有商用需求請另議。<br />
                                IG、Twitter：@nokinok_art<br />
                                FB：No Ki(諾齊)</p>

                        </div>
                    </div>
                </Col>
                <Col span={8} >
                    <div className={styles.creatorItem} style={{backgroundColor:colorCreator}}>

                        <img src="/images/unknownicon.png" alt="icon" className={styles.creatorImage} />

                        <div className={styles.creatorText}>
                            <p className={styles.creatorName}>未定</p>
                            <p className={styles.creatorDetail}>未定</p>

                        </div>
                    </div>
                </Col>
                <Col span={8} >
                    <div className={styles.creatorItem} style={{backgroundColor:colorCreator}}>

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