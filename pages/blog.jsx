import Container from "../components/container";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import Link from "next/link";

export default function BlogLayout(){
  
  const recentPosts = [{img: "https://images.unsplash.com/photo-1532799755889-1247a1b7f10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80",header:"How To Boost Your Traffic Of Your Blog And Destroy The Competition", author:"Luke Nunez", date:"May 18 2023", authorProfile:"https://randomuser.me/api/portraits/men/5.jpg"},{img: "https://images.unsplash.com/photo-1532799755889-1247a1b7f10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80",header:"How To Boost Your Traffic Of Your Blog And Destroy The Competition", author:"Luke Nunez", date:"May 18 2023", authorProfile:"https://randomuser.me/api/portraits/men/5.jpg"},{img: "https://images.unsplash.com/photo-1532799755889-1247a1b7f10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80",header:"How To Boost Your Traffic Of Your Blog And Destroy The Competition", author:"Luke Nunez", date:"May 18 2023", authorProfile:"https://randomuser.me/api/portraits/men/5.jpg"},{img: "https://images.unsplash.com/photo-1532799755889-1247a1b7f10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80",header:"How To Boost Your Traffic Of Your Blog And Destroy The Competition", author:"Luke Nunez", date:"May 18 2023", authorProfile:"https://randomuser.me/api/portraits/men/5.jpg"}];

  const popularPosts = [{img: "https://images.unsplash.com/photo-1532799755889-1247a1b7f10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80",header:"How To Boost Your Traffic Of Your Blog And Destroy The Competition", author:"Luke Nunez", date:"May 18 2023", authorProfile:"https://randomuser.me/api/portraits/men/5.jpg"},{img: "https://images.unsplash.com/photo-1532799755889-1247a1b7f10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80",header:"How To Boost Your Traffic Of Your Blog And Destroy The Competition", author:"Luke Nunez", date:"May 18 2023", authorProfile:"https://randomuser.me/api/portraits/men/5.jpg"},{img: "https://images.unsplash.com/photo-1532799755889-1247a1b7f10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80",header:"How To Boost Your Traffic Of Your Blog And Destroy The Competition", author:"Luke Nunez", date:"May 18 2023", authorProfile:"https://randomuser.me/api/portraits/men/5.jpg"},{img: "https://images.unsplash.com/photo-1532799755889-1247a1b7f10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80",header:"How To Boost Your Traffic Of Your Blog And Destroy The Competition", author:"Luke Nunez", date:"May 18 2023", authorProfile:"https://randomuser.me/api/portraits/men/5.jpg"}];
  return(
    <div  >
    <Header></Header>
<div  className="lg:px-20 py-8 "  style={{backgroundImage:"url(https://stutorpal.github.io/waitlist/img/banner-4.png)",backgroundSize: "contain"}}>
    <div className="container mx-auto">
      <div className="flex flex-wrap   md:-mx-3">
        {recentPosts.map((post, index)=>{
            return(
           <div className={`px-3 md:w-1/2 mb-12 ${index %2 ==0 ? "lg:pr-24" : "lg:pl-24"}  mb-6 w-full`} >
                     <Link href="/article" >
                                 <div class="flex w-full h-full flex-wrap overflow-hidden rounded shadow-lg"style={{backgroundColor:"#f0f0f0 ", cursor:"pointer"}}>
            <div class="md:w-2/6">
              <img class="object-cover h-full w-full" src={post.img} />
            </div>
            <div class="md:w-4/6 p-5">
              <h2 class=" leading-normal font-semibold text-lg">{post.header}</h2>
              <div class="flex flex-wrap justify-between items-center mt-6">
                <div class="inline-flex items-center">
                  <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src={post.authorProfile} />
                  </div>
                  <div class="flex-1 pl-2">
                    <h2 class=" mb-1">{post.author}</h2>
                    <p class=" opacity-50 text-xs">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
</Link>
             

        </div>

            )
  
        })}
     

        {popularPosts.map((post,index)=>{

          return(
                    <div class=" lg:w-1/4 md:w-1/2 px-3 mb-6">
          <div class="flex w-full h-full flex-wrap  overflow-hidden rounded shadow-lg" style={{backgroundColor:"#f0f0f0"}}>
            <div class="w-full">
              <img class="object-cover h-full w-full" src={post.img} />
            </div>
            <div class="w-full p-5">
              <h2 class=" font-semibold leading-normal text-lg">{post.header}</h2>
              <div class="flex flex-wrap justify-between items-center mt-6">
                <div class="inline-flex items-center">
                  <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src={post.authorProfile} />
                  </div>
                  <div class="flex-1 pl-2">
                    <h2 class=" mb-1">{post.author}</h2>
                    <p class=" opacity-50 text-xs">{post.date}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

          )
        })}
      
      </div>
      <div class="text-center">
        <button class="border   px-4 py-2 rounded-full hover:bg-light-gray font-semibold" >Show More</button>
      </div>
    </div>
  </div>  
      <Footer></Footer>
    </div>)
}
