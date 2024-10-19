"use client"
import { auth, db } from "@/firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { setDoc,doc } from "firebase/firestore";

const RegisterPage = () => {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message,setMessage] = useState('')
  const [error, setError] = useState(false)
  const router = useRouter()
  // const [createUserWithEmailAndPassword] = useCreateUserWithEmailAndPassword(auth);

  const handleSignUp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setError(false)
    setMessage("")
    try {
        const res = await createUserWithEmailAndPassword(auth,email, password)
        await setDoc(doc(db, "users", res.user.uid), {
          username,
          email,
          id: res.user.uid
        })
        // console.log({res})
        setMessage("Registration Successful.")
        setUsername('')
        setEmail('');
        setPassword('')
        router.push("/login")


    } catch(e){
        console.error(e)
        setError(true)
        setMessage("An error occurred!")
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900">
      <div className="bg-gray-800 p-10 rounded-lg shadow-xl w-96">
        <h1 className="text-white text-2xl mb-5">Sign Up</h1>
        <input 
          required
          type="text" 
          placeholder="Username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <input 
          required
          type="email" 
          placeholder="Email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        <input 
          required
          type="password" 
          placeholder="Password"
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          className="w-full p-3 mb-4 bg-gray-700 rounded outline-none text-white placeholder-gray-500"
        />
        {message && <span className={error ? "text-red-500 text-xs" : "text-green-500 text-xs"}>{message}</span>}
        <button 
          onClick={handleSignUp}
          className="w-full p-3 bg-indigo-600 rounded text-white hover:bg-indigo-500"
        >
          Sign Up
        </button>
        <Link href="/login" className="text-white cursor-pointer text-sm underline">Already have an account? Sign In</Link>
      </div>
    </div>
  )
}

export default RegisterPage