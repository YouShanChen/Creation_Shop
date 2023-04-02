import Link from '../Link';
import styles from "./comissionitem.module.css"

export default function ComissionItem({ comission }) {

    return (
        <div className={styles.box}>
            <Link to={`/products/id/${comission.id}`}>
                <img
                    style={{ width: '100%' }}
                    src={comission.image}
                    alt={comission.name} />
            </Link>
            <div className={styles.info}>
                <h6 className={styles.category}>
                    {comission.category}
                </h6>
                <h6 className={styles.price}>
                    {comission.price}
                </h6>
                <h2 className={styles.name}>
                    {comission.name}
                </h2>
            </div>

        </div>

    );
}