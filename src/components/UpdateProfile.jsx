import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from 'react-hot-toast';
import { AuthContext } from "../Providers/AuthProvider";

const UpdateProfile = () => {

    const { user  } = useContext(AuthContext);
    const [firebaseError, setFirebaseError ] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
      } = useForm({ 
        defaultValues: { 
            fullName: user?.displayName,
            email: user?.email,
            photoUrl: user?.photoURL
        } 
    });

      const onSubmit = (data) => {
        console.log(data)
      }

    return (
        <div className=" min-h-[75vh] bg-base-200">
        <div className="flex justify-center items-center flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold my-10">Update Profile</h1>
            
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
                  {...register("fullName",{ required: true})}                  
                />
                {errors.fullName && <span className="text-red-500"> This field is required</span>}
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>                
                <input
                  type="email"
                  readOnly
                  placeholder="email"                 
                  className="input input-bordered"
                  {...register("email")}
                />                
                
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
              
              {firebaseError && <span className="text-red-500">{firebaseError}</span>}
              <div className="form-control mt-6">
                <button className="btn btn-primary">Update</button>
              </div>
            </form>            
            
          </div>
        </div>
        <Toaster />
      </div>
    );
};

export default UpdateProfile;