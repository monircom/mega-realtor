import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config"
import SwiperPage from "./SwiperPage";


const Home = () => {    
    
    return (
        <div>
            <h2 className="text-3xl">This is Home</h2>

        <SwiperPage></SwiperPage>
            
        </div>
    );
};

export default Home;