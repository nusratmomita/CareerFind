import React,{useState,useEffect} from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router";
import { toast, ToastContainer } from "react-toastify";
// import { authContext } from "../../Root/Root";

const ForgetPassword = () => {
  const location = useLocation();
//   const {user} = useContext(authContext)
  
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, []);

  const handleResetPassword = (e) => {
    e.preventDefault();
    if (!email) 
        return toast.error("Enter your email first")

    // redirecting to gmail
    window.location.href="https://mail.google.com"
  };

  return (
    <>
    <Helmet>
        <title>Forget Password</title>
    </Helmet>
        <ToastContainer></ToastContainer>
        <div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 bg-gray-800 text-white mx-auto my-10">
        <h2 className="text-2xl font-bold mb-4 text-center">Reset Password</h2>
        <form onSubmit={handleResetPassword} className="space-y-4">
            <div>
            <label htmlFor="email" className="block text-lg mb-1">Email</label>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800"
            />
            </div>
            <button
            type="submit"
            className="cursor-pointer w-full px-4 py-2 font-semibold rounded-md bg-violet-600 text-white hover:bg-violet-700"
            >
            Reset Password
            </button>
        </form>
        </div>
    </>
  );
};

export default ForgetPassword;
