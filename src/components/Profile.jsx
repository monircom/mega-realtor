
import { useContext } from "react";
import avater from "../assets/avatar.png";
import { AuthContext } from "../Providers/AuthProvider";
import { Link } from "react-router-dom";
const Profile = () => {

    const { user , logOut } = useContext(AuthContext);
  return (

    <div className="min-h-[75vh] bg-base-200 flex justify-center items-center flex-col">

<div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold mb-10">Profile</h1>            
          </div>
        
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={user?.photoURL || avater}
            alt="User"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{user?.displayName || "User Name Not Found"}</h2>
          <p>{user?.email || "Email  Not Found"}</p>
          <div className="card-actions">
          <Link to="/update"><button className="btn btn-primary">Update Profile</button> </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
