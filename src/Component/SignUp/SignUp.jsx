import React, { useContext, useState } from "react";
import banner from "../../assets/images/banner.jpg";
import { Link } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import app from "../../Firebase/firebase.init";
import { AuthContext } from "../../context/UserContext";




const SignUp = () => {
  const {createUser,updateUser, googleSignIn,verifyEmail} = useContext(AuthContext)
  //const [users, setUsers] = useState({});
 // console.log(users);
  
 const [error, setError] = useState();
  //const  [ error, setError] = useState("");
  const handleSignUp=(event)=>{
    //parameter event and preventDefault event stop the reload
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    if(!/(?=.*?[A-Z])/.test(password)){
       setError("Atleast one character should be uppercase(A-Z)");
       return;
    }
    if(!/(?=.*?[a-z])/.test(password)){
       setError("Atleast one character should be lowercase(a-z)");
       return;
    }
    if(!/(?=.*?[#?!@$%^&*-])/.test(password)){
      setError("Atleast one character should be # ? ! @ $ % ^ & * - ");
      return;
   }
    
    if(password.length < 6){
     setError("Password should be more than 6 character");
     return ;
    }
 

  setError("");
  createUser(email, password)
  .then((result) => {
    const user = result.user;
    updateUser(name);
    verifyEmail()
  .then(() => {
    alert("please check your email and verify your email address");
  })
  .catch((error) => {
    console.log(error);
    
  });
    console.log(user);
    // setUsers(user);
  })
  .catch((error) =>{ 
    console.log("Error: ",error);
    
  });

  


    form.reset();
    
    
  } ;
  //handle google function 
  const handleGoogleSignIn =() =>{
 googleSignIn()
 .then((result) => {
  const user = result.user;
  console.log(user);

  
})
.catch((error) =>{ 
  console.log(error);
  
});
  }
  
  
  
  return (
    <div className="hero bg-base-200 min-h-screen">
    
      <img className="w-full hidden md:block " src={banner} alt="" />
      <div className="hero-content   flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Sign Up now!</h1>
          <p className="py-6">
            To get started, make sure to sign up for an account first. Once
            you've completed the registration,<br></br> you can log in using
            your credentials to access your account.
          </p>
        </div>

        <div className="md:w-96 card bg-base-100 shrink-0 shadow-2xl">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
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
                name= "password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <p className="text-red-500" >{error}</p>
              <label className="label">
                <Link to="/login" className="label-text-alt link link-hover">
                  Already Have an Account? Please sign in
                </Link>
              </label>
            </div>
            <div className="form-control mt-4">
              <input type="submit" className="btn btn-warning hover:bg-orange-500 " value= "Sign Up"/>
               
            </div>
            <div className="divider"> or</div>
            <div className="form-control mt-0">
              <button onClick={handleGoogleSignIn} className="btn btn-warning hover:bg-orange-500   ">
                Continue with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
