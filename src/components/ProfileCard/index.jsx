import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { theme, Form, Input, Button } from "antd";
import styles from "./profilecard.module.css"
import { useUpdateProfile, useLogout, useUserInfo } from "../../react-query";

const ProfileCard = ({ redirect }) => {
  const {
    token: { colorButton, colorForm },
  } = theme.useToken();
  const { data: userInfo } = useUserInfo() || {};
  const update = useUpdateProfile();
  const logout = useLogout();
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onUpdate = async (values) => {
    console.log("Received update info: ", values);
    update.mutate({ ...values, uid: userInfo.uid });
  };

  const onLogout = () => {
    logout.mutate();
    navigate("/");
  }

  useEffect(() => {
    form.setFieldsValue(userInfo)
  }, [userInfo])

  return (
    <Form
      onFinish={onUpdate}
      name="normal_login"
      className={styles.profileForm}
      form={form}
      initialValues={userInfo}
      style={{ backgroundColor: colorForm }}
    >
      <div className={styles.title}>Profile</div>
      <Form.Item
        label="姓名: "
        name="name"
        rules={[
          {
            type: "string",
            message: "並非有效的姓名!",
          },
          {
            message: "請輸入你的姓名!",
          },
        ]}
      >
        <Input placeholder={userInfo.name} style={{ color: colorButton }} />
      </Form.Item>
      <Form.Item
        label="身分: "
        name="property"
        rules={[
          {
            type: "string",
            message: "並非有效的身分!",
          },
          {
            message: "請輸入你的身分!",
          },
        ]}
      >
        <Input placeholder={userInfo.property} style={{ color: colorButton }} />
      </Form.Item>
      <Form.Item
        label="地址: "
        name="adrs"
        rules={[
          {
            type: "string",
            message: "並非有效的電話號碼!",
          },
          {
            message: "請輸入你的電話號碼!",
          },
        ]}
      >
        <Input placeholder={userInfo?.adrs || ""} style={{ color: colorButton }} />
      </Form.Item>
      <Form.Item
        label="電話: "
        name="tel"
        rules={[
          {
            type: "string",
            message: "並非有效的電話號碼!",
          },
          {
            message: "請輸入你的電話號碼!",
          },
        ]}
      >
        <Input placeholder={userInfo?.tel || 'xxxx-xxxxxx'} style={{ color: colorButton }} />
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          className={styles.profileForm__button}
        >
          <Link className={styles.profileForm__gotowork} to={"/auth/mywork"} >
            Go to My Work
          </Link>
        </Button>

        <Button
          type="primary"
          htmlType="submit"
          style={{ marginTop: "1rem" }}
          className={styles.profileForm__button}
        >
          Submit
        </Button>

        <Button
          type="primary"
          danger
          style={{ marginTop: "1rem" }}
          className={styles.profileForm__button}
          onClick={onLogout}
        >
          Log out
        </Button>
      </Form.Item>
    </Form>
  );
};
export default ProfileCard;
``