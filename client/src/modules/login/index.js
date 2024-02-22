import { useEffect } from "react"
import {
    Image,
    Card,
    Row,
    Col
} from 'antd'

import LoginItem from "./LoginItem"
import "../login/css/index.css"

export default function Login() {

    return (
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: 24, paddingBottom: 24 }}>
            <Card
                style={{
                    minWidth: 270,
                    maxWidth: 440,
                    borderRadius: 20,
                    boxShadow: "2px 2px 16px 5px rgba(208, 216, 243, 1)",
                }}
            >
                <LoginItem />
            </Card>
        </div>
    )
}

