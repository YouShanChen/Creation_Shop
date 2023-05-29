import { Row, Col, theme, Button } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styles from "./myworklist.module.css"

export default function MyWorkList({works}) {
   const { token: { colorBgBase, colorPrimary, colorOrder } } = theme.useToken();

   const dispatch = useDispatch();
   return (
      <div className={styles.box} style={{ backgroundColor: colorOrder }}>

         {works.length === 0 ? (
            <div className={styles.notification} >My work is empty</div>
         ) : (
            <Row gutter={[32, 32]}>
               {works.map(item => (
                  <Col
                     key={item.id}
                     xs={{ span: 24 }}
                     sm={{ span: 24 }}
                     md={{ span: 12 }}
                  >
                     <div className={styles.outerBox}>
                        <div className={styles.itemBox}>

                           <Link to={`/comissions/id/${item.id}`}>
                              <div className={styles.imgBox}>
                                 <img
                                    className={styles.img1}
                                    src={item.image1}
                                    alt={item.name} />
                                 <img
                                    className={styles.img2}
                                    src={item.image2}
                                    alt={item.name} />
                                 <img
                                    className={styles.img3}
                                    src={item.image3}
                                    alt={item.name} />
                              </div>

                           </Link>
                           <div className={styles.info}>
                              <h2 className={styles.category}>
                                 {item.category}
                              </h2>
                              <h2 className={styles.price}>
                                 {item.price}
                              </h2>
                           </div>
                        </div>
                        <Button
                           type="primary"
                           className={styles.work__button}
                        >
                           完成委託
                        </Button>
                     </div>


                  </Col>
               ))}
            </Row>

         )}
      </div>
   )
}