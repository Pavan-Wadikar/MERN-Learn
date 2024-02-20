import {GoogleAuthProvider, getAuth, signInWithPopup} from 'firebase/auth'
import { app } from '../firebase'
import {useDispatch } from 'react-redux'
import {signInSuccess} from '../redux/user/userSlice'
import { useNavigate } from 'react-router-dom'

const OAuth = () => {
    const dispatch=useDispatch()
    const navigate=useNavigate();
    const handleGoogleClick= async (e)=>{
        e.preventDefault()
        try {
            const provider=new GoogleAuthProvider()            
            const auth=getAuth(app)
            const result=await signInWithPopup(auth,provider)
            const res=await fetch(`http://localhost:8000/api/auth/google`,{
                method:'POST',
                headers:{
                    'Content-Type':'application/json'
                },
               body:JSON.stringify({name:result.user.displayName,email:result.user.email,photo:result.user.photoURL}) 
            }) 
            console.log(res);
            const data= await res.json();
            console.log(data);
            dispatch(signInSuccess(data))
            navigate('/profile')
        
        } catch (error) {
            console.log('could not signIn with google ',error);
            
        }
    
    }
    
  return (
    <button onClick={handleGoogleClick} type="button" className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 ">Continue with google</button>
  )
}

export default OAuth