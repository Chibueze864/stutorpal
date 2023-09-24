import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword  } from "firebase/auth";
import {auth,db} from "../config"
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import {useState, useEffect} from "react"
import { useRouter } from "next/router"
import { collection, addDoc } from "firebase/firestore";
import Link from 'next/link';


export default function Register(){
    const provider = new GoogleAuthProvider();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const router = useRouter()


  const signInWithGoogle = async () => {
    const result = await signInWithPopup(auth, provider);
    console.log(result.user);
          router.push("/")

  };
  const register = async()=>{
    let emailSubmit = email;
    let passwordSubmit = password;
    let nameSubmit = name
       await createUserWithEmailAndPassword(auth, emailSubmit, passwordSubmit)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
    

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
    const docRef = await addDoc(collection(db, "users"), {
            email: emailSubmit,

            name: name,
  
});
    alert("Signup Succesful")
              router.push("/")

  }
  return(
    <div>
               <Header></Header>

       <div className="lg:px-20 py-8" style={{ backgroundImage: "url(https://stutorpal.github.io/waitlist/img/banner-4.png)", backgroundSize: "cover" }} >

        <div className="text-center   flex flex-col gap-4 items-center">
               

                {/* Form */}
       
    
<div className="flex justify-center w-full  items-center">
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-full max-w-md">
    <h2 className="text-3xl font-bold mb-6 text-center text-white">
      <span className="text-black text-4xl font-semibold tracking-wide leading-none">
        Register
      </span>
    </h2>
  
              <div className="mt-4">
    <button onClick={signInWithGoogle} className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-101 duration-300 text-[#002D74]">
        <svg className="mr-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="25px">
          <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z" />
          <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z" />
          <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z" />
          <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z" />
        </svg>
        Register With Google
      </button>
    </div>
      <div className="my-2">or</div>
          <div className="mb-6">
        <label  className="block text-gray-700 text-left text-sm font-bold mb-2">
          <i className="fas fa-envelope mr-2"></i>Name
        </label>
        <div>
          <input id="name" onChange={(e)=>setName(e.target.value)} type="text" className="shadow-sm  border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"  placeholder="Enter your email" required/>
        </div>
      </div>

      <div className="mb-6">
        <label className="block text-gray-700 text-left text-sm font-bold mb-2">
          <i className="fas fa-envelope mr-2"></i>Email
        </label>
        <div>
          <input id="email" onChange={(e)=>setEmail(e.target.value)} type="email" className="shadow-sm  border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$" title="Invalid Email" placeholder="Enter your email" required/>
        </div>
      </div>
      <div className="mb-6">
        <label  className="block text-left text-gray-700 text-sm font-bold mb-2">
          <i className="fas fa-lock mr-2"></i>Password
        </label>
        <div>
          <input id="password" onChange={(e)=>setPassword(e.target.value)}  type="password" className="shadow-sm  border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
  title="Must contain at least one  number and one uppercase and lowercase letter, and at least 8 or more characters" placeholder="Enter your password" required/>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button onClick={register} type="submit" className="bg-blue-500 text-white px-16 py-4 rounded-lg font-bold tracking-widest w-full hover:bg-blue-800">
          Register
        </button>
      </div>
     
 
    
    <p className="text-center text-gray-600 mt-6">Do you have an account? <Link href="/login" className="text-blue-500 hover:underline">Login</Link></p>
  </div>
</div>

                                    
                

            </div>     
        </div>
               <Footer></Footer>

    </div>
  )
  
}
