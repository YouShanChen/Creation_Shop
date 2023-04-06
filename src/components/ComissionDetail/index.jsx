import AddToBasket from "../AddToBasket"
import styles from "./comissiondetail.module.css"
function ComissionDetail({ comission }) {
    return (
        <div className={styles.box}>
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

            <div className={styles.detail}>
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
                <div >
                    <AddToBasket comission={comission} />
                </div>
            </div>
        </div>
    );

}
export default ComissionDetail;