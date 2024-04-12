import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config"
import SwiperPage from "./SwiperPage";
import Residentials from "./Residentials";


const Home = () => {    
    
    return (
        <div>           

        <SwiperPage></SwiperPage>

        <Residentials></Residentials>
            
        </div>
    );
};

export default Home;