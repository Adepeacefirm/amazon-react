import {useNavigate, Outlet} from "react-router-dom"
import { toast } from "sonner"

const ProtectedRoute = ()=>{
    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem("user"))
    const token = localStorage.getItem("token")
    if(!user || !token){
        toast.error("You need to login to access this page")
        navigate("/login")
    }else{
        return <Outlet />
    }
}

export default ProtectedRoute