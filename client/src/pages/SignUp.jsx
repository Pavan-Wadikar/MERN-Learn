import { useState } from "react"
import { Link,useNavigate } from "react-router-dom"


const Signup = () => {
  const [formData,setFormData]=useState({})
  const [error,setError]=useState(null)
  const [loading,setLoading]=useState(false)
   const navigate=useNavigate();

  const url="http://localhost:8000"
  const handleChange=(e)=>{
    setFormData({
      ...formData,
      [e.target.id]:e.target.value,
    })

   }
   const handleSubmit= async(e)=>{
    e.preventDefault();
    try {
      setLoading(true)
    const res= await fetch(`${url}/api/auth/signup`,{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(formData),
    })
   const data= await res.json();
   if(data.success==false){
    setError(data.message)
    
    setLoading(false)
    return

   }
   setLoading(false)
   setError(null)
   navigate('/sign-in')
   console.log(data);
      
    } catch (err) {
      setLoading(false)
      setError(err.message)
      
      
    }
    


   }


  return (
    <div className="p-3 max-w-lg mx-auto">
    <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input type="text" className="border p-3 rounded-lg" placeholder="UserName" id='username' name="username" onChange={handleChange}/>
      <input type="email" className="border p-3 rounded-lg" placeholder="Email" id='email' name="email" onChange={handleChange}/>
       <input type="password" className="border p-3 rounded-lg" placeholder="Password" id='password' name="password" onChange={handleChange}/>
    <button type='submit' disabled={loading}  className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-75" >{loading?'Loading...':'SignUp'}</button>

    </form>
    <div className="flex gap-2 mt-5">
      <p>Have an account?</p>
      <Link to='/sign-in'><span className="text-blue-700">SignIn</span></Link>
    </div>
    {error&& <p className="text-red-500">{error}</p>}
    </div>
  )
}

export default Signup