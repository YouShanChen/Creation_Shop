import { Row, Col, theme } from "antd";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeCartItems } from "../../redux/cartSlice";

import styles from "./basketmodal.module.css"

import { selectCartItems } from "../../redux/cartSlice";
export default function BasketModal() {
   const { token: { colorBgBase,colorTextBase, colorPrimary ,colorOrder} } = theme.useToken();

   const dispatch = useDispatch();
   const cartItems = useSelector(selectCartItems);
   return (
      <div className={styles.box} style={{backgroundColor:colorOrder}}>

         {cartItems.length === 0 ? (
            <div className={styles.notification} >Cart is empty</div>
         ) : (
            <Row gutter={[32, 32]}>
               {cartItems.map(item => (
                  <Col
                     key={item.id}
                     xs={{ span: 24 }}
                     sm={{ span: 24 }}
                     md={{ span: 12 }}
                  >
                     <div className={styles.itemBox}>

                        <Link to={`/orders/id/${item.id}`}>
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
                           <h6 className={styles.name}>
                              {item.name}
                           </h6>
                        </div>
                        <div className={styles.delete} onClick={() => dispatch(removeCartItems(item.id))}>
                           x
                        </div>
                     </div>

                  </Col>
               ))}
            </Row>

         )}
      </div>
   )
}