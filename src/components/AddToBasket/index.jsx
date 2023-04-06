import { Button, notification } from "antd"
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";
import styles from "./addtobasket.module.css"

export default function AddToCart({ comission }) {
    const dispatch = useDispatch();
  
    const openNotification = () => {
      notification.open({
        message: "消息通知",
        description:
          `成功發出委託`,
        placement: 'bottomRight'
      });
    };
  
    const addToCart = () => {
      openNotification();
      dispatch(addCartItems({
        id: comission.id,
        name: comission.name,
        image:comission.image,
        price: comission.price,
      }))
    };
  
    return (
      <Button type="primary" className={styles.btn} onClick={addToCart}>
        <Basket color={"#ffffff"}/>發起委託
      </Button>
    );
  }