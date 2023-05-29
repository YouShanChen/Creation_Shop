import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { theme,Form, Input, Button, Checkbox } from 'antd';
import { WarningOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import { useSignInWithEmailPassword } from "../../react-query";
import styles from './logincard.module.css';

const LoginCard = ({ redirect }) => {
    const {
        token: { colorButton },
     } = theme.useToken();

    const { mutate, error, isLoading, isError, isSuccess, data } = useSignInWithEmailPassword();
    const [isRemember, setIsRemember] = useState(false);
    const [form] = Form.useForm();
    const navigate = useNavigate();

    const onFinish = (values) => {
        console.log("Received values of form: ", values);
        mutate(values);
    };

    useEffect(() => {
        if (isSuccess) {
            navigate(redirect);
        }
    }, [isSuccess, redirect]);
    
    return (
        <Form
            name="normal_login"
            className={styles.loginForm}
            form={form}
            initialValues={{
                isRemember: true,
            }}
            onFinish={onFinish}
        >
            <Form.Item
                name="email"
                rules={[
                    {
                        type: "email",
                        message: "The input is not valid E-mail!",
                    },
                    {
                        required: true,
                        message: "Please input your E-mail!",
                    },
                ]}
                hasFeedback
            >
                <Input
                    prefix={<MailOutlined />}
                    placeholder="E-Mail"
                    style={{color:colorButton}}
                />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[
                    {
                        required: true,
                        message: "Please input your Password!",
                    },
                ]}
                hasFeedback
            >
                <Input.Password
                    prefix={<LockOutlined />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Link className={styles.loginForm__forgot} to={"/"}>
                    Forgot password
                </Link>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox onChange={() => setIsRemember(!isRemember)} checked={isRemember}>
                        Remember me
                    </Checkbox>
                </Form.Item>
            </Form.Item>

            <Form.Item>
                <Button
                    type="primary"
                    htmlType="submit"
                    className={styles.loginForm__button}
                >
                    Log in
                </Button>
                Or <Link to={`/auth/register?redirect=${redirect}`}>register now!</Link>
            </Form.Item>
        </Form>
    );
};

export default LoginCard;