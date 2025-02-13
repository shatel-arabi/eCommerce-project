import React, { useContext, useState } from "react";
import banner from "../../assets/images/banner.jpg";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AuthContext } from "../../context/UserContext";





const Login = () => {
  const {signIn} = useContext(AuthContext)
 // const [users, setUsers] = useState({});
  //console.log(users);
  
const [error, setError] = useState("");
  const handleSignIn=(event)=>{
    //parameter event and preventDefault event stop the reload
    event.preventDefault();
    const form = event.target;
    //const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    //console.log(email,password);


     signIn(email, password )
      .then((result) => {
        const user = result.user;
       console.log(user);
       // setUsers(user);
       })
      .catch((error) =>{ 
       // console.log(error);
        setError(error.message);
        
      });
    
    
     form.reset();
     setError("");
        
        
    
   
} ;
  return (
    <div className="hero bg-base-200 min-h-screen">
      <img className="w-full hidden md:block " src={banner} alt="" />
      <div className="hero-content   flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            To get started, make sure to sign up for an account first. Once
            you've completed the registration,<br></br> you can log in using
            your credentials to access your account.
          </p>
        </div>
        

        <div className="md:w-96 card bg-base-100 shrink-0 shadow-2xl">
          <form onSubmit={handleSignIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name ="email"
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
                type="password"
                name ="password"
                placeholder="password"
                className="input input-bordered"
                required
              />

{error && <p className="text-red-500">Email or Password does not match</p>}

              <label className="label">
                <button className="label-text-alt link link-hover">Forget password</button>
                <Link to="/sign-up" className="label-text-alt link link-hover">
                  I have no account? Please Register now.
                </Link>
              </label>
             
            </div>
            <div className="form-control mt-4">
            <input type="submit" className="btn btn-warning hover:bg-orange-500 " value= "Log In "/>
            </div>
            <div className="divider"></div>
            <div className="form-control mt-0">
              <button className="btn btn-warning hover:bg-orange-500">
                Continue with Google <i class="fa-brands fa-google"></i>
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
