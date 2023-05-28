import Link from '../Link';
import styles from "./taglist.module.css"
import { Row, Col ,theme} from "antd";
export default function TagList() {
    const {
        token: { colorTagList,colorTag},
    } = theme.useToken();
    return (

        <div className={styles.box} style={{backgroundColor:colorTagList}}>

            
            <p className={styles.tagTitle} >
                熱門標籤
            </p>
            <Row gutter={[24, 5]}>
                <Col xs={8} xl={4} >
                    <Link to="/comissions/category/tag1">
                        <p className={styles.tagItem} style={{backgroundColor:colorTag}}>
                            半寫實
                        </p>
                    </Link>
                </Col>
                <Col xs={8} xl={4} >
                    <Link to="/comissions/category/tag2">
                        <p className={styles.tagItem} style={{backgroundColor:colorTag}}>
                            全彩
                        </p>
                    </Link>
                </Col>
                <Col xs={8} xl={4} >
                    <Link to="/comissions/category/tag3">
                        <p className={styles.tagItem} style={{backgroundColor:colorTag}}>
                            黑白
                        </p>
                    </Link>
                </Col>
                <Col xs={8} xl={4} >
                    <Link to="/comissions/category/tag4">
                        <p className={styles.tagItem} style={{backgroundColor:colorTag}}>
                            正比
                        </p>
                    </Link>
                </Col>
                <Col xs={8} xl={4} >
                    <Link to="/comissions/category/tag5">
                        <p className={styles.tagItem} style={{backgroundColor:colorTag}}>
                            日系
                        </p>
                    </Link>
                </Col>
                <Col xs={8} xl={4} >
                    <Link to="/comissions/category/tag6">
                        <p className={styles.tagItem} style={{backgroundColor:colorTag}}>
                            韓系
                        </p>
                    </Link>
                </Col>
            </Row>



        </div>


    );
}