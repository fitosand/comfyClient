import React from "react";
import ReactDOM from "react-dom";
import "antd/dist/antd.css";
import "../Login.css";
import { Form, Input, Button, Checkbox } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

interface LoginProps{

}

interface LoginState{}

class Login extends React.Component {
    // const NormalLoginForm = () => {
    onFinish = (values?: any) => {
        alert(values.Email);
        console.log("Received values of form: ", values);
    };
    render(){
        return (
            <div className="loginPage">
            <div className="loginImageArea">
                {/* <img
                className="ImgSm"
                src="https://gw.alipayobjects.com/mdn/rms_08e378/afts/img/A*OJoaQ77tczIAAAAAAAAAAABkARQnAQ"
                alt="bldg"
                /> */}
                <img
                className="ImgSm"
                src="https://www.tutoreye.com/images/home/login-illus-1.svg"
                alt="bldg"
                />
            </div>
            <div className="formArea">
                <Form
                name="normal_login"
                className="login-form"
                initialValues={{
                    remember: true
                }}
                // onFinish={onFinish}
                >
                <Form.Item
                    name="Email"
                    rules={[
                    {
                        required: true,
                        type: "email"
                    }
                    ]}
                >
                    <Input
                    prefix={<UserOutlined className="site-form-item-icon" />}
                    placeholder="Email"
                    />
                </Form.Item>
                <Form.Item
                    name="password"
                    rules={[
                    {
                        required: true,
                        message: "Please input your Password!"
                    }
                    ]}
                >
                    <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                    />
                </Form.Item>
                <Form.Item>
                    <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Remember me</Checkbox>
                    </Form.Item>

                    {/* <a className="login-form-forgot" href="">
                    Forgot password
                    </a> */}
                </Form.Item>

                <Form.Item>
                    <Button
                    type="primary"
                    htmlType="submit"
                    className="login-form-button"
                    >
                    Log in
                    </Button>
                    Or <a href="Register.tsx">register now!</a>
                    
                </Form.Item>
                </Form>
            </div>
            </div>
        );
        };
}

// ReactDOM.render(<NormalLoginForm />, document.getElementById("container"));

export default Login;
