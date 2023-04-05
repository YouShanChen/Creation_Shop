import Link from '../Link';
import styles from "./comissionitem.module.css"

export default function ComissionItem({ comission }) {

    return (
        <div className={styles.box}>
            <Link to={`/comissions/id/${comission.id}`}>
                <img
                    style={{ width: '100%' }}
                    src={comission.image1}
                    alt={comission.name} />
            </Link>
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

        </div>

    );
}