
import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import { Row, Col, Modal } from 'antd'
import "../home/css/index.css"

export default function Home({ authorized, firebase, user }) {
    const navigate = useNavigate()

    const [loading, setLoading] = useState(false)

    const [blog, setBlog] = useState()

    useEffect(() => {
        
    }, [])

    return (
        <div>
            Home page
        </div>
    )
}