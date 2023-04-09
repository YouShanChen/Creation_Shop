import { Button, notification } from "antd"
import { useDispatch } from "react-redux";
import { addCollectionItems } from "../../redux/collectionSlice";
import styles from "./addtocollection.module.css"
import { StarOutlined } from '@ant-design/icons';
export default function AddToCollection({ comission }) {
    const dispatch = useDispatch();
  
    const openNotification = () => {
      notification.open({
        message: "通知",
        description:
          `成功加入收藏`,
        placement: 'bottomRight'
      });
    };
  
    const addToCollection = () => {
      openNotification();
      dispatch(addCollectionItems({
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
      <Button type="primary" shape="circle" icon={<StarOutlined />} className={styles.btn} onClick={addToCollection}>
         
      </Button>
    );
  }