import { useContext, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

const Login = () => {
  const { signInUser, googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);

  const [showPassword, setShowPassword] = useState(false)
  const [firebaseError, setFirebaseError ] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    const {email, password} = data;
        console.log(email,password);
        signInUser(email, password)
        .then((result) => {
          toast.success("Logged in Successfully", {
            duration: 2000,
            position: "top-center",
          });
          console.log(result.user);          
          setTimeout(function () {
            navigate(location?.state ? location.state : "/");
          }, 2500);
        })
        .catch((error) => {
          console.error(error)
            toast.error(error.message.split("/")[1].replace(")",""), {
              duration: 2000,
              position: 'top-center',
            });
            setFirebaseError(error.message.split("/")[1].replace(")",""))
        });
    
  }  

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user); 
        toast.success("Logged in Successfully", {
          duration: 2000,
          position: "top-center",
        });        
        setTimeout(function () {
          navigate(location?.state ? location.state : "/");
        }, 2500);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        console.log(result.user);
        toast.success("Logged in Successfully", {
          duration: 2000,
          position: "top-center",
        });        
        setTimeout(function () {
          navigate(location?.state ? location.state : "/");
        }, 2500);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="min-h-[75vh] bg-base-200">
        <div className="flex justify-center items-center flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold my-10">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  {...register("email",{ required: true })}
                />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <div className="flex relative">
                <input                  
                  type={showPassword ? "text" :"password" }
                  placeholder="password"                  
                  className="input input-bordered grow" 
                  {...register("password",{ required: true })}
                />
                <span className="absolute top-3 right-3 text-xl hover:cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                 {
                  showPassword ? <FaEyeSlash></FaEyeSlash> :<FaEye></FaEye>
                 }
                  </span>
                </div>  
                {errors.password && <span className="text-red-500">This field is required</span>}
                {firebaseError && <span className="text-red-500">{firebaseError}</span>}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Login</button>
              </div>
            </form>
            <p className="pl-8">
              New to the Mega Realtor? Please
              <Link to="/register">
                <button className="btn btn-link">Register</button>
              </Link>
            </p>
            <p className="flex justify-center font-bold p-4">Alternate Login Method</p>
            <div className="flex justify-center items-center gap-2 p-4">
              
              <button onClick={handleGoogleLogin} className="btn">
              <FcGoogle />  Google
              </button>
              <button onClick={handleGithubLogin} className="btn">
              <FaGithub /> Github
              </button>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
