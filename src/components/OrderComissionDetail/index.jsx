import styles from "./ordercomissiondetail.module.css"
import { theme } from "antd";
function OrderComissionDetail({ comission }) {
    const { token: { colorBgBase,colorPrimary,colorDetail} } = theme.useToken();
    return (
        <div className={styles.box} style={{backgroundColor:colorBgBase}}>
            <div className={styles.imageBox}>
                <img
                    className={styles.image1}
                    src={comission.image1}
                    alt={comission.name} />
                <div className={styles.imageSubBox}>
                <img
                    className={styles.image2}
                    src={comission.image2}
                    alt={comission.name} />
                <img
                    className={styles.image3}
                    src={comission.image3}
                    alt={comission.name} />
                </div>
                
            </div>

            <div className={styles.detail} style={{color:colorDetail}}>
                <div className={styles.info}>
                    <h2 className={styles.category}>
                        {comission.category}
                    </h2>
                    <h2 className={styles.price}>
                        {comission.price}
                    </h2>
                    <h6 className={styles.name}>
                        {comission.name}
                    </h6>
                </div>
                <div className={styles.text}>
                    <p className={styles.desTitle}>•預計交期：</p>
                    <p className={styles.des}>{comission.des1}</p>
                    <p className={styles.desTitle}>•授權範圍：</p>
                    <p className={styles.des}>{comission.des2}</p>
                    <p className={styles.desTitle}>•修改次數：</p>
                    <p className={styles.des}>{comission.des3}</p>
                    <p className={styles.desTitle}>•付款分段：</p>
                    <p className={styles.des}>{comission.des4}</p>
                </div>
            </div>
        </div>
    );

}
export default OrderComissionDetail;