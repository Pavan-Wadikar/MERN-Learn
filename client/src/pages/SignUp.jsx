import { Link } from "react-router-dom"


const Signup = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
    <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
    <form className="flex flex-col gap-4">
      <input type="text" className="border p-3 rounded-lg" placeholder="UserName" id='username' name="username"/>
      <input type="email" className="border p-3 rounded-lg" placeholder="Email" id='email' name="email"/>
      <input type="password" className="border p-3 rounded-lg" placeholder="Password" id='password' name="password"/>
    <button  className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-75" type="submit">SignUp</button>

    </form>
    <div className="flex gap-2 mt-5">
      <p>Have an account?</p>
      <Link to='/sign-in'><span className="text-blue-700">SignIn</span></Link>
    </div>
    </div>
  )
}

export default Signup