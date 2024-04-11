import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const { signInUser, googleLogin, githubLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        toast.success("User Login Successfully", {
          duration: 2000,
          position: "top-center",
        });
        console.log(result.user);
        e.target.reset();

        setTimeout(function () {
          navigate("/");
        }, 2500);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        console.log(result.user); 
        toast.success("User Login Successfully", {
          duration: 2000,
          position: "top-center",
        });        
        setTimeout(function () {
          navigate("/");
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
        toast.success("User Login Successfully", {
          duration: 2000,
          position: "top-center",
        });        
        setTimeout(function () {
          navigate("/");
        }, 2500);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <div className="hero min-h-[75vh] bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Login now!</h1>
          </div>
          <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
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
            <div className="flex">
              <button onClick={handleGoogleLogin} className="btn btn-ghost">
                Google
              </button>
              <button onClick={handleGithubLogin} className="btn btn-ghost">
                Github
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
