import { BrowserRouter, Route, Routes } from "react-router-dom"
import Checklist from "../pages/checklist"
import Login from "../pages/login"
import Register from "../pages/register"

const WebRoute = () => {
    return(
        <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                    <Route path='/checklist' element={<Checklist />} />
                </Routes>
            </BrowserRouter>
    )
} 
export default WebRoute;