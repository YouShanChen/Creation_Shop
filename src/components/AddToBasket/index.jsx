import { theme,Button, notification } from "antd"
import { useDispatch } from "react-redux";
import { addCartItems } from "../../redux/cartSlice";
import styles from "./addtobasket.module.css"

export default function AddToCart({ comission }) {
    const dispatch = useDispatch();
    const {
      token: {colorDetailTitle },
  } = theme.useToken();
    const openNotification = () => {
      notification.open({
        message: "通知",
        description:
          `成功發出委託`,
        placement: 'bottomRight'
      });
    };
  
    const addToCart = () => {
      openNotification();
      dispatch(addCartItems({
        id: comission.id,
        category:comission.category,
        name: comission.name,
        image1:comission.image1,
        image2:comission.image2,
        image3:comission.image3,
        price: comission.price,
        des1:comission.des1,
        des2:comission.des2,
        des3:comission.des3,
        des4:comission.des4,
      }))
    };
  
    return (
      <Button type="primary" className={styles.btn} onClick={addToCart} style={{backgroundColor:colorDetailTitle}}>
        發起委託
      </Button>
    );
  }