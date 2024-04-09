import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config"


const Home = () => {
    
    console.log(auth);
    return (
        <div>
            <h2 className="text-3xl">This is Home</h2>
            
        </div>
    );
};

export default Home;