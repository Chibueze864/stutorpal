import Header from "../../components/header.jsx";
import Footer from "../../components/footer.jsx";
import { useState, useEffect} from 'react'
import { useRouter } from 'next/router';
import { doc, getDoc, collection,  query, where, getDocs  } from "firebase/firestore";
import {auth, db} from "../../config";

export default function Article() {
    const router = useRouter()
  const [blogPost,setBlogPost] = useState(null)
  const getBlogPosts = async()=>{
    const querySnapshot = await getDocs(collection(db, "blog-post"));
    
    let data = []
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  // console.log(doc.id, " => ", doc.data());
  data.push(doc.data())
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

    data[data.indexOf(i)]["img"] = htmlImg == null? "": htmlImg
    data[data.indexOf(i)]["authorProfile"] = "https://media.licdn.com/dms/image/D4D03AQHBPYfM4ifK7w/profile-displayphoto-shrink_400_400/0/1691456234299?e=1700092800&v=beta&t=uqlRKMowP0lR0bxTvm5k-uUrh1SKqJixsM0y3wv6FMk"
    data[data.indexOf(i)]["header"] = i.content.match(/<[^>]+>([^<]+)<\/[^>]+>/g).map(match => match.replace(/<\/?[^>]+(>|$)/g, ''))[0];
    data[data.indexOf(i)]["date"] = i.date
    data[data.indexOf(i)]["author"] = "Stutorpal"
        data[data.indexOf(i)]["content"] = i.content.replace(/<(?:"[^"]*"['"]*|'[^']*'['"]*|[^'">])+>/g,"")

                }
  setBlogPost(data[router.query.slug])
  }       
  

  useEffect(()=>{
        getBlogPosts()

  },[blogPost])
  function setImageStyle(){
    if(blogPost){
    const styleObject = {
    backgroundImage: `url("${blogPost.img}")`,
    height: "450px", 
  };
    return styleObject
    }else{
      
      return
    }
  }
  const dynamicStyles= setImageStyle()
  return(
        <div>
      <Header></Header>
<div>
    <div className="lg:px-20 py-8" style={{ backgroundImage: "url(https://stutorpal.github.io/waitlist/img/banner-4.png)", backgroundSize: "cover" ,zIndex:-1, position:"relative"}} >
      { blogPost && 
  <div   class="max-w-screen-xl mx-auto p-8 sm:p-10 md:p-16 relative">
  
  <div class="mb-5 max-w-2xl mx-auto">
    <h1 href="#" class="text-gray-900 pb-4 font-bold text-3xl mb-2">{blogPost.header}</h1>

    <div class="pb-4 text-gray-700 text-xs flex my-6 flex justify-between">
      <div class="flex items-center">
      <a href="#"><img class="w-12 h-12 rounded-full mr-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROXyfGAFLE7uuIrF6Qmi7QKmL6tBgx9Hs7SzWUg50AFw&s" alt="Avatar of Jonathan Reinink pb-2"/></a>
      <div class="text-sm">
        <a href="#" class="text-gray-900 font-medium leading-none hover:text-indigo-600 transition duration-500 ease-in-out pb-2">{blogPost.author}</a>
        <p class="text-gray-600 text-xs pb-2">{blogPost.date}</p>
      </div>
    </div>
     </div>
  </div>
  
  
  <div class="max-w-2xl mx-auto">
    <div class="mt-3  rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
   { blogPost.img &&    <div class="bg-cover  h-64 text-center overflow-hidden" style={dynamicStyles} title="Woman holding a mug">
            </div>}
        <div class="">
           <p class="text-base leading-8 my-10 break-words ">          {blogPost.content}
</p>
              {/* <p class="text-base leading-8 my-10">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          
          <h3 class="text-2xl font-bold my-5">#1. What is Lorem Ipsum?</h3>
          
          <p class="text-base leading-8 my-5">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          
          <blockquote class="text-md italic leading-8 my-5 p-8 text-indigo-600 font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</blockquote>*/}
          
          {/* <p class="text-base leading-8 my-5"> 
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
           */}
        
          
              </div>
          
            </div>
  </div>
  
</div>
}</div>

  </div>



  




      <Footer>

      </Footer>



    </div>

  )
}