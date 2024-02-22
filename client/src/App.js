import "./styles/App.css"
import "./styles/App.less"

import Home from "./modules/home"
import { ConfigProvider } from 'antd'
import {
    BrowserRouter as Router,
    Routes,
    Route
} from "react-router-dom"
import themeAntd from './styles/themeAntd'
import Login from "./modules/login"

const App = ({ authorized, firebase, user }) => (
    <ConfigProvider theme={{ token: themeAntd }}>
        <Router>
            <Routes>
                <Route exact path="/home" element={<Home authorized={authorized} firebase={firebase} user={user} />} />
                <Route exact path="/" Component={() => (<Login authorized={authorized} firebase={firebase} user={user} />)} />

                <Route path="/:id">Page not found!</Route>
            </Routes>
        </Router>
    </ConfigProvider>
)

export default App
