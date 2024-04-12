import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash  } from "react-icons/fa";
import toast, { Toaster } from 'react-hot-toast';

const Register = () => {

    const {createUser, updateUser} = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false)
    const [passwordError, setPasswordError ] = useState("");
    const [firebaseError, setFirebaseError ] = useState("");
    const navigate = useNavigate();
    const {
      register,
      handleSubmit,      
      formState: { errors },
    } = useForm()
  
    const onSubmit = (data) => {

      const {email, password, fullName, photoUrl} = data;
       // console.log(email,password, fullName, photoUrl);
        setPasswordError("");
        setFirebaseError("")

        if(password.length<6){
           //console.log(password);
           toast.error('Password must be at least 6 characters', {
            duration: 2000,
            position: 'top-center',
          });
           setPasswordError("Password must be at least 6 characters")
           return;
        }
        else if(!/[A-Z]/.test(password)){
          toast.error('Password must have an Uppercase letter', {
            duration: 2000,
            position: 'top-center',
          });
          setPasswordError("Password must have an Uppercase letter")
          return;          
        }
        else if(!/[a-z]/.test(password)){
          toast.error('Password must have a Lowercase letter', {
            duration: 2000,
            position: 'top-center',
          });
          setPasswordError("Password must have a Lowercase letter")
          return;          
        }       

        createUser(email,password)
        .then(result => {
            //console.log(result.user)
            toast.success('User Registered Successfully', {
              duration: 2000,
              position: 'top-center',
            });
            updateUser( fullName , photoUrl)
            .then(() => {
              //console.log("Profile updated!")
              setTimeout(function(){
                navigate("/");
            }, 1000);
            }).catch((error) => {
              console.error(error)
              // An error occurred
              // ...
            });
        })
        .catch(error=>{
            console.error(error)
            toast.error(error.message.split("/")[1].replace(")",""), {
              duration: 2000,
              position: 'top-center',
            });
            setFirebaseError(error.message.split("/")[1].replace(")",""))
        })

      //console.log(data)
    }

    return (
        <div className="min-h-[75vh] bg-base-200">
        <div className="flex justify-center items-center flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold my-10">Register now!</h1>
            
          </div>
          <div className="shrink-0 w-full max-w-lg shadow-2xl bg-base-100 rounded-lg mb-5 p-4">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">

            <div className="form-control">
                <label className="label">
                  <span className="label-text">Full Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Full Name"                  
                  className="input input-bordered"                  
                  {...register("fullName",{ required: true })}                  
                />
                {errors.fullName && <span className="text-red-500"> This field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"                 
                  className="input input-bordered"
                  {...register("email",{ required: true })}
                />
                {errors.email && <span className="text-red-500">This field is required</span>}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"                  
                  className="input input-bordered"                  
                  {...register("photoUrl",{ required: true })}                 
                />      
                {errors.photoUrl && <span className="text-red-500">This field is required</span>}          
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
                {passwordError && <span className="text-red-500">{passwordError}</span>}
                {firebaseError && <span className="text-red-500">{firebaseError}</span>}
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="pl-8"  >Already have an account? Please<Link to="/login">
            <button className="btn btn-link">Login</button>
            </Link></p>
          </div>
        </div>
        <Toaster />
      </div>
      
    );
};

export default Register;