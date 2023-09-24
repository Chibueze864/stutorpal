import Container from "../components/container";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Link from "next/link";
import { useState, useEffect } from 'react'
import { doc, getDoc, collection,  query, where, getDocs  } from "firebase/firestore";
import {auth, db} from "../config"

export default function BlogLayout(){
  const [blogPost,setBlogPost] = useState(null)
  const getBlogPosts = async()=>{
    const querySnapshot = await getDocs(collection(db, "blog-post"));
    
    let data = []
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  // console.log(doc.id, " => ", doc.data());
  data.push(doc.data())
  console.log(doc)
});
    let posts = [{}]
  for( let i of data){
      // console.log(i)
      // data.authorProfile = i[]
    data["id"] = i.id
      data[data.indexOf(i)]["author"]  = i.author
      data[data.indexOf(i)]["authorProfile"] = i.image
 
    let imageRegex =/(?:https?:\/\/\S+(?:png|jpe?g|gif|"|')\S*)|([\\/].+\.(jpg|jpeg|png|gif|bmp|webp|tiff|svg|ico))/gi;
    
// Use the regex pattern with match to extract the src attribute value
  // console.log(typeof i.content)
    let html = i.content.match(imageRegex || [] ) ? i.content.match(imageRegex || [] )[0] : null
    let htmlImg = html ? html.replace(/['‘’"“”]/g, '') : null
    html && console.log(i)

    data[data.indexOf(i)]["img"] = htmlImg == null? "": htmlImg
    data[data.indexOf(i)]["authorProfile"] = "https://media.licdn.com/dms/image/D4D03AQHBPYfM4ifK7w/profile-displayphoto-shrink_400_400/0/1691456234299?e=1700092800&v=beta&t=uqlRKMowP0lR0bxTvm5k-uUrh1SKqJixsM0y3wv6FMk"
    data[data.indexOf(i)]["header"] = i.content.match(/<[^>]+>([^<]+)<\/[^>]+>/g).map(match => match.replace(/<\/?[^>]+(>|$)/g, ''))[0];
    data[data.indexOf(i)]["date"] = i.date
    data[data.indexOf(i)]["author"] = "Stutorpal"
    
                }
  setBlogPost(data)
  }       
  

  useEffect(()=>{
        getBlogPosts()

  },[])
  
function findPostsPerLine(){
  if(blogPost){
  
  let postPerLine = blogPost.length > 4 ? 4 : blogPost.length
    let postGridStyle = blogPost? `grid grid-cols-1 lg:grid-cols-${postPerLine} sm:grid-cols-1 gap-10`:``
    return postGridStyle
}else{
    return `grid grid-cols-1 md:grid-cols-3 sm:grid-cols-1 gap-10`
}
}
  console.log(findPostsPerLine())

  
  return(
    <div  >
      <div style={{zIndex:999}}>
            <Header ></Header>

      </div>
      <div  className="lg:px-20 md:px-10 px-8 py-8 "  style={{ backgroundImage: "url(https://stutorpal.github.io/waitlist/img/banner-4.png)", backgroundSize: "cover" ,zIndex:-1, position:"relative"}} >
      <div>

 

          <div  >
              {blogPost && blogPost.length > 0?  
                 <div style={{marginTop:"5vh", marginBottom:"30vh"}} className={findPostsPerLine()}>
    {blogPost && blogPost.map((post, index)=>{
  return(
    
          <div key={index} className="rounded overflow-hidden shadow-md" style={{backgroundColor: "#F0F0F0", }}>

            <a href={`article/${index}`}></a>
            <div className="relative">
                <a href={`article/${index}`}>
                   
                  {post.img?  <img className="w-full h-56 object-contain"
                        src={post.img} 
                        alt="Sunset in the mountains"/> : <img className="h-56 object-contain w-full"
                        src="https://images.pexels.com/photos/262508/pexels-photo-262508.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/> }
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href={`article/${index}`}>
                    <div
                        className="absolute bottom-0 left-0 bg-blue-600 px-8 py-4 text-white text-sm hover:bg-white hover:text-blue-600 transition duration-500 ease-in-out">
                        {post.author}
                    </div>
                </a>

                <a href={`article/${index}`}>
                    <div
                        className="text-sm absolute top-0 right-0 bg-blue-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-blue-600 transition duration-500 ease-in-out">
                        <span className="font-bold">{post.date.split(" ")[0]}</span>
                        <small>{post.date.split(" ")[1]}</small>
                        <small>{post.date.split(" ")[2]}</small>
                    </div>
                </a>
            </div>
            <div className="px-6 py-8">

                <a href={`article/${index}`}
                    className="font-semibold text-lg inline-block hover:text-blue-600 transition duration-500 ease-in-out">{post.header}</a>
                <p className="text-gray-500 text-sm">
                </p>
            </div>
        </div>
)
    })}
    </div>:  
              <div style={{marginTop:"15vh", marginBottom:"30vh"}}>
            <h1 className="text-3xl">There are no blog posts. Please wait or come back later</h1> </div> 
   }
       
    </div>
                      
  </div>                        
      
  
</div>
 
          
  

  

  

  
   
      <Footer></Footer>
    </div>)
}
