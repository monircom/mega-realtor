import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config"
import SwiperPage from "./SwiperPage";
import Residentials from "./Residentials";
import GetInTouch from "./GetInTouch";


const Home = () => {    
    
    return (
        <div>           

        <SwiperPage></SwiperPage>

        <Residentials></Residentials>

        <GetInTouch></GetInTouch>
            
        </div>
    );
};

export default Home;