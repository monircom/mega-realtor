import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";

const Register = () => {

    const {createUser} = useContext(AuthContext)

    const [showPassword, setShowPassword] = useState(false)

    //console.log(createuser);
    const {
      register,
      handleSubmit,
      watch,
      formState: { errors },
    } = useForm()
  
    const onSubmit = (data) => {
      console.log(data)
    }



    const handleRegister = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email,password)
        createUser(email,password)
        .then(result => {
            console.log(result.user)
        })
        .catch(error=>{
            console.error(error)
        })
    }
    return (
        <div className=" min-h-[75vh] bg-base-200">
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
                  {...register("photoUrl")}                 
                />                
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
                
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
            <p className="pl-8"  >Already have account? Please<Link to="/login">
            <button className="btn btn-link">Login</button>
            </Link></p>
          </div>
        </div>
      </div>
    );
};

export default Register;