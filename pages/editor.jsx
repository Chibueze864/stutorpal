import { useRef, useMemo , useState, useEffect} from "react"

import dynamic from "next/dynamic";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import { collection, addDoc } from "firebase/firestore"; 
import {db,auth} from "../config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/router"

const JoditEditor = dynamic(() => import("jodit-react"), { ssr: false });



const Jodit = () => {
  const editor = useRef(null)
  const [content, setContent] = useState("")
const [user, setUser] = useState(null)
const [providerUser, setProviderUser] = useAuthState(auth);

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    const uid = user.uid;
    // ...
    setUser(user)
  } else {
    // User is signed out
    // ...
    console.log("No current signed in user")
  }
});
},[])
  
async function saveBlogPost(){
    // Add a new document in collection "blog-post"
     try {
       const date = new Date().toUTCString().slice(5, 16);
       
     let headerContent = content.replace(/<h1>/g, '<h1 className="text-gray-900 pb-4 font-bold text-3xl mb-2">');
              setContent(headerContent)

      let paragraphContent = content.replace(/<p>/g, '<p className="text-base leading-8 my-5">');
              setContent(paragraphContent)

       const imageRegex = /<img\s+src="([^"]+)"[^>]*>/i;
      let  imageContent = content.replace(imageRegex, (match, src) => {
  // Create the desired <div> tag with styles and attributes
  return `<div className="bg-cover h-64 text-center overflow-hidden" style={{height: "450px", backgroundImage: "url('${src}')"}} title="Blog Content"></div>`;
});
              setContent(imageContent)

       const headerRegex = /<h([2-6])>/g;

// Use the regex pattern with replace to modify the HTML
let smallerHeaderContent = content.replace(headerRegex, '<h$1 className="text-2xl font-bold my-5">');
              setContent(smallerHeaderContent)

// Define a regex pattern to match blockquote tags
const blockquoteRegex = /<blockquote>/g;

// Use the regex pattern with replace to modify the HTML
let blockQuoteContent = content.replace(blockquoteRegex, '<blockquote className="text-md italic leading-8 my-5 p-8 text-indigo-600 font-semibold">');
              setContent(blockQuoteContent)

       console.log(content)
  const docRef = await addDoc(collection(db, "blog-post"), {
            author: "Stutorpal",

            content: content,
  image:"https://media.licdn.com/dms/image/D4D03AQHBPYfM4ifK7w/profile-displayphoto-shrink_400_400/0/1691456234299?e=1700092800&v=beta&t=uqlRKMowP0lR0bxTvm5k-uUrh1SKqJixsM0y3wv6FMk",
    date: date
});
               setContent(null);

  console.log("Document written with ID: ", docRef.id);
         setContent("");
    alert("Blog Post Added")
} catch (e) {
  console.error("Error adding document: ", e);
}
}

  if(user?.email == "stutorpal@gmail.com"){
  return (
    <div >  
            <Header ></Header>

    <div className="max-w-screen-xl mx-auto p-8 sm:p-10 md:p-16 relative" style={{minHeight:"60vh", marginTop:"10vh",marginBottom:"10vh"}}>
      
         <JoditEditor
       ref={editor}
        value={content}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
    />
          <button onClick={saveBlogPost} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300shadow-sm  border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light mt-4 py-5">Submit</button>
      
    
    </div>
  

            <Footer></Footer>

    </div>
  
  )}
  else{
    return(
          <div >  
            <Header ></Header>
              <div className="max-w-screen-xl   mx-auto p-8 sm:p-10 md:p-16 relative" style={{minHeight:"60vh", marginTop:"30vh"}}>
                <h1>Sorry Access To This Page Is Restricted To Only Admin</h1>
</div>
          <Footer></Footer>
          </div>
    )
  }
}
export default Jodit
