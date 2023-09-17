import { useRef, useMemo , useState, useEffect} from 'react'
// import JoditEditor from 'jodit-react'
import dynamic from 'next/dynamic';
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import { collection, addDoc } from "firebase/firestore"; 
import db from "../config"
const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false });

const Jodit = () => {
  const editor = useRef(null)
  const [content, setContent] = useState(null)

  
async function saveBlogPost(){
    // Add a new document in collection "blog-post"
     try {
       const date = new Date().toUTCString().slice(5, 16);
  const docRef = await addDoc(collection(db, "blog-post"), {
            author: "Stutorpal",

            content: content,
  image:"https://media.licdn.com/dms/image/D4D03AQHBPYfM4ifK7w/profile-displayphoto-shrink_400_400/0/1691456234299?e=1700092800&v=beta&t=uqlRKMowP0lR0bxTvm5k-uUrh1SKqJixsM0y3wv6FMk",
    date: date
});
               setContent(null);

  console.log("Document written with ID: ", docRef.id);
    alert("Blog Post Added")
} catch (e) {
  console.error("Error adding document: ", e);
}

 



   
  }

  return (
    <div>  
            <Header></Header>

    <div className="max-w-screen-xl mx-auto p-8 sm:p-10 md:p-16 relative">
      
         <JoditEditor
       ref={editor}
        value={content}
        tabIndex={1} // tabIndex of textarea
        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
        onChange={(newContent) => setContent(newContent)}
    />
          <button onClick={saveBlogPost} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300shadow-sm  border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light mt-4 py-5">Submit</button>
    
    </div>
  

            <Footer></Footer>

    </div>
  
  )
}
export default Jodit