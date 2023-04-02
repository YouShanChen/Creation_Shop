import AddToBasket from "../AddToBasket"
import styles from "./productdetail.module.css"
function ComissionDetail({ comission }) {
    return (
        <div className={styles.box}>
            <div className={styles.image}>

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
                    <p className={styles.des}>{comission.des1}</p>
                    <p className={styles.des}>{comission.des2}</p>
                    <p className={styles.des}>{comission.des3}</p>
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