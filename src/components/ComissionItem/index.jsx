import Link from '../Link';
import styles from "./comissionitem.module.css"
import { theme} from "antd";
export default function ComissionItem({ comission }) {
    const {
        token: { colorPrimary, colorBgBase,colorTextBase,colorItem,colorNavItem},
    } = theme.useToken();
    return (
        <div className={styles.box}>
  
            <Link to={`/comissions/id/${comission.id}`}>
                <div className={styles.imgBox}>
                <img
                    className={styles.img1}
                    src={comission.image1}
                    alt={comission.name} />
                <img
                    className={styles.img2}
                    src={comission.image2}
                    alt={comission.name} />
                <img
                    className={styles.img3}
                    src={comission.image3}
                    alt={comission.name} />
                </div>
            </Link>
           
            
            <div className={styles.info} style={{color:colorTextBase}}>
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