/* eslint-disable react-hooks/exhaustive-deps */

import { useState } from 'react'
import '../login/css/loginItem.css'
import { Row, Col, Button, Input, Form } from 'antd'
import { useNavigate } from 'react-router-dom'
import { getSignFetch } from './API'
export default function LoginItem() {

    const navigate = useNavigate()
    const [form] = Form.useForm()
    const [loadingSignIn, setLoadingSignIn] = useState(false)
    const [reminderSignIn, setReminderSignIn] = useState("")

    const onFinish = async (value) => {
            setLoadingSignIn(true)
            let username = value.username ? value.username : null
            let password = value.password ? value.password : null

            if (username && password) {

                let obj = { username, password }
                console.log("obj : ", obj)
                const result = await getSignFetch(obj)
                console.log("result : ", result)

                if (result?.code === "auth/wrong-password") {
                    setReminderSignIn("ชื่อผู้ใช้งาน หรือรหัสผ่านไม่ถูกต้อง")
                }
            } else {
                setReminderSignIn("โปรดกรอกชื่อผู้ใช้ เเละรหัสผ่าน")
            }
            setLoadingSignIn(false)
    }

    return (
        <Form form={form} layout="vertical" onFinish={onFinish} >
            <Row gutter={[10, 10]}>
                <Col span={24} style={{ textAlign: "left", paddingBottom: 6 }}>
                    <label style={{ fontSize: 22, fontWeight: 600 }}>เข้าสู่ระบบ</label>
                </Col>

                <Col span={24} style={{ height: 60 }}>
                    <Form.Item
                        name="username"
                        style={{ width: '100%' }}
                        rules={[{ required: true, message: <span style={{ float: "left" }}>กรุณากรอกอีเมล หรือชื่อผู้ใช้งาน</span> }]}
                    >
                        <Input
                            placeholder="ชื่อผู้ใช้"
                            size="large"
                        />
                    </Form.Item>
                </Col>

                <Col span={24} style={{ height: 60 }}>
                    <Form.Item
                        name="password"
                        style={{ width: '100%' }}
                        rules={[{ required: true, message: <span style={{ float: "left" }}>กรุณากรอกรหัสผ่าน</span> }]}
                    >
                        <Input.Password
                            placeholder="รหัสผ่าน"
                            size="large"
                            onKeyDown={(e) => {
                                if (e.keyCode === 13) {
                                    form.submit()
                                }
                            }}
                        />
                    </Form.Item>
                </Col>

                <Col span={24} style={{}}>
                    <span style={{ color: "red", fontSize: '1.2rem', float: "left" }}>{reminderSignIn}</span>
                </Col>

                <Col span={24} style={{}}>
                    <Button
                        size="large"
                        type="primary"
                        style={{ width: "100%" }}
                        loading={loadingSignIn}
                        onClick={() => form.submit()}
                    >{!loadingSignIn ? "เข้าสู่ระบบ" : ""}</Button>
                </Col>
            </Row >
        </Form >
    )
}
