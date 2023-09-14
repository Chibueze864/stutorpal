import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";

import Hero from "../layouts/hero.jsx";
import Container from "../layouts/container";




export default function Display(){

  return(
    <div>
          <Header></Header>
      <Article></Article>

    
<Footer>
   
</Footer>
      

       
    </div>
  )
}

function Home(){
  return(
    <div>
        <div className="lg:px-20 py-8"style={{backgroundImage:"url(https://stutorpal.github.io/waitlist/img/banner-4.png)",backgroundSize: "cover"}} >
              <Container  className="flex flex-wrap pt-5">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl  lg:text-left md:text-left sm:text-center px-4  mb-8">
            <h1 className="text-3xl font-bold leading-snug tracking-tight  lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              Stutorpal
            </h1>
            <p className="py-3 text-xl leading-normal lg:text-xl xl:text-2xl">
              When trying to get the best of grades, with us you'll ace the tests you take        </p>
                        <p className="py-3 text-xl leading-normal  lg:text-xl xl:text-2xl">
              The first peer-to-peer tutorship app. For students by students</p>
            <p className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl"><small>Coming soon to</small></p>


            <div className="py-5 flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
          <div class="flex mt-1 w-48 h-14 bg-blue text-white rounded-lg items-center justify-center" style={{backgroundColor: "#3673E6"}}>
            <div class="mr-3">
                <svg viewBox="30 336.7 120.9 129.2" width="30">
                    <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"/>
                    <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"/>
                    <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"/>
                    <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"/>
                </svg>
            </div>
            <div>
                <div class="text-xl font-semibold font-sans -mt-1">Google Play</div>
            </div>
        </div>
           <div class="flex mt-5 w-48 h-14 bg-black text-white rounded-xl items-center justify-center" style={{backgroundColor: "#3673E6"}}>
            <div class="mr-3">
                <svg viewBox="0 0 384 512" width="30" >
                    <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
                </svg>
            </div>
            <div>
                <div class="text-2xl font-semibold font-sans -mt-1">App Store</div>
            </div>
        </div>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
          <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[14px] rounded-[2.5rem] h-[600px] w-[300px]">
    <div className="h-[32px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[72px] rounded-l-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[124px] rounded-l-lg"></div>
    <div className="h-[46px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -left-[17px] top-[178px] rounded-l-lg"></div>
    <div className="h-[64px] w-[3px] bg-gray-800 dark:bg-gray-800 absolute -right-[17px] top-[142px] rounded-r-lg"></div>
    <div className="rounded-[2rem] overflow-hidden w-[272px] h-[572px] bg-white dark:bg-gray-800">
        <img src="https://raw.githubusercontent.com/stutorpal/waitlist/main/img/App-Snapshot.png" className="dark:hidden w-[272px] h-[572px]" alt=""/>
        <img src="https://raw.githubusercontent.com/stutorpal/waitlist/main/img/App-Snapshot.png" className="hidden dark:block w-[272px] h-[572px]" alt=""/>
    </div>
</div>
            </div>
        </div>
      </Container>
      <Container>
      </Container>

    </div>

      <div className="lg:px-20 py-8"   style={{backgroundImage:"url(https://stutorpal.github.io/waitlist/img/service-bg.svg)",backgroundSize: "contain"}} >
          <div >
                <Container  className="flex flex-wrap pt-5">
        <div className="flex px-4   lg:text-left md:text-left sm:text-center items-center w-full lg:w-1/2">
          <div className=" max-w-2xl mb-8">
             <p className="py-3 text-1xl leading-normal lg:text-1xl xl:text-1xl" style={{color:"#3673E6"}}>
              What's It All About?        </p>
            <h3 className="text-2xl font-bold leading-snug tracking-tight  lg:text-3xl lg:leading-tight xl:text-3xl xl:leading-tight">
               Stutorpal is a platform to connect, learn and earn! 
            </h3>
           </div>
            
        </div> 
            <div className="p-3 w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {/* Card 1 */}
      <div className="rounded bg-white h-fit-content shadow-lg">
        <img className="w-full" src="https://stutorpal.github.io/waitlist/img/undraw_connected_re_lmq2.svg" alt="Mountain" style={{height: "250px"}}  />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Peer-to-Peer Connections</div>
          <p className="text-gray-700  text-base">
            Our tutorship app creates a dynamic platform where students can connect with each other on campus, fostering a vibrant community of knowledge-sharing. Whether you need help with calculus, essay writing, or coding, our app enables you to find the perfect peer tutor who understands your specific needs and can provide valuable insights. 
          </p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="rounded bg-white h-fit-content shadow-lg">
        <img className="w-full" src="https://stutorpal.github.io/waitlist/img/undraw_educator_re_ju47.svg" alt="Mountain" style={{height: "250px"}}  />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Tailored Learning Experiences</div>
          <p className="text-gray-700  text-base">
            With our app, learning becomes personalized and engaging. Students can choose tutors based on their expertise, teaching style, and even shared interests. This empowers learners to engage in meaningful one-on-one sessions, where they can delve deeper into subjects, ask questions freely, and gain a comprehensive understanding of the topic at hand. 
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="rounded bg-white h-fit-content shadow-lg">
        <img className="w-full" src="https://stutorpal.github.io/waitlist/img/undraw_savings_re_eq4w.svg" alt="Mountain" style={{height: "250px"}}  />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Opportunity to Earn While Sharing Knowledge</div>
          <p className="text-gray-700  text-base">
            We believe in empowering students not only as learners but also as tutors. With our peer-to-peer tutorship app, students have the exciting opportunity to monetize their expertise and earn money while on campus. By becoming a tutor, you can not only share your knowledge and passion but also make a meaningful income that complements your academic journey.
          </p>
        </div>
      </div>
    </div>
          </Container>   

  </div>


      <div >
                <Container  className="flex flex-wrap pt-5">
        <div className="flex px-4   lg:text-left md:text-left sm:text-center items-center w-full lg:w-1/2">
          <div className="     max-w-2xl mb-8">
           
            <h3 className="text-2xl font-bold leading-snug tracking-tight  lg:text-3xl lg:leading-tight xl:text-3xl xl:leading-tight">
               Meet The Team
            </h3>
           </div>
            
        </div> 
            <div className="p-3 w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5">
      {/* Card 1 */}
      <div className="rounded bg-white h-fit-content shadow-lg">
        <img className="w-full p-8" src="https://stutorpal.github.io/waitlist/img/Chibueze.png" alt="Chibueze" style={{objectFit:"contain",borderRadius:"50%"}}  />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Chibueze Onyekpere</div>
          <p className="text-gray-700  text-base">
             Full Stack Web Developer, Team Lead 
          </p>
        </div>
      </div>
      {/* Card 2 */}
      <div className="rounded w- bg-white h-fit-content shadow-lg">
        <img className="w-full p-8" src="https://stutorpal.github.io/waitlist/img/Harrison.png" alt="Harrison" style={{objectFit:"contain",borderRadius:"50%"}}  />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">Harrison Akunne</div>
          <p className="text-gray-700  text-base">
             Full Stack Web Developer 
          </p>
        </div>
      </div>

      {/* Card 3 */}
      <div className="rounded bg-white h-fit-content shadow-lg">
        <img className="w-full p-8" src="https://stutorpal.github.io/waitlist/img/Fiki.png" alt="Fiki" style={{objectFit:"contain",borderRadius:"50%"}}  />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2"> Fiki Joshua </div>
          <p className="text-gray-700  text-base">
             UI/UX Designer, Full Stack Web Developer
          </p>
        </div>
      </div>

      
    </div>
        <div>
        
        </div>
          </Container>   
                <Container  className="flex flex-wrap pt-5">
        <div className="flex px-4   lg:text-left md:text-left sm:text-center items-center w-full lg:w-1/2">
          <div className="     max-w-2xl mb-8">
           
            <h3 className="text-2xl font-bold leading-snug tracking-tight  lg:text-3xl lg:leading-tight xl:text-3xl xl:leading-tight">
               Contact Us
            </h3>
           </div>
            
        </div> 
            <div className="p-3 w-full grid grid-cols-1">
      {/* Form */}
          <form action="#" class="space-y-8">
          <div>
              <label for="email" class="block mb-2 text-sm font-medium text-black-900 dark:text-black-300">Your email</label>
              <input type="email" id="email" class="shadow-sm  border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required/>
          </div>
          <div>
              <label for="subject" class="block mb-2 text-sm font-medium text-black-900 dark:text-black-300">Subject</label>
              <input type="text" id="subject" class="shadow-sm  border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required/>
          </div>
          <div class="sm:col-span-2">
              <label for="message" class="block mb-2 text-sm font-medium text-black-900 dark:text-black-400">Your message</label>
              <textarea id="message" rows="6" class="shadow-sm  border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Leave a comment..."></textarea>
            <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300shadow-sm  border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light mt-4 py-5">Submit</button>
          </div>
       
      </form>
     
    </div>
          </Container>   

  </div>
      </div>
    
    
    </div>
  )
}

function Blog(){
  return(
    <div  >
<div  className="lg:px-20 py-8 "  style={{backgroundImage:"url(https://stutorpal.github.io/waitlist/img/banner-4.png)",backgroundSize: "contain"}}>
    <div class="container mx-auto">
      <div class="flex flex-wrap md:-mx-3">
        <div class="md:w-1/2 px-3 mb-6 w-full">
          <div class="flex w-full h-full flex-col flex-wrap bg-cover bg-no-repeat bg-center p-5 rounded overflow-hidden" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1513438205128-16af16280739?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=935&q=80)' }}>
            <h2 class="text-white text-lg mb-2">Is The Herbal Way The Right Way</h2>
            <p class="text-white opacity-50">Adwords Keyword Research For Beginners</p>
            <div class="flex flex-wrap justify-between items-center mt-auto pt-6">
              <div class="inline-flex items-center">
                <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <img src="https://randomuser.me/api/portraits/women/2.jpg" />
                </div>
                <div class="flex-1 pl-2">
                  <h2 class="text-white mb-1">Ollie McBride</h2>
                  <p class="text-white opacity-50 text-xs">May 18</p>
                </div>
              </div>
              <span class="text-white opacity-50">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 px-3 mb-6 w-full">
          <div class="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div class="w-2/6">
              <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1532799755889-1247a1b7f10e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1936&q=80" />
            </div>
            <div class="w-4/6 p-5">
              <h2 class="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div class="flex flex-wrap justify-between items-center mt-6">
                <div class="inline-flex items-center">
                  <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/5.jpg" />
                  </div>
                  <div class="flex-1 pl-2">
                    <h2 class="text-white mb-1">Luke Nunez</h2>
                    <p class="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span class="text-white opacity-50">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 px-3 mb-6 w-full">
          <div class="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div class="w-2/6">
              <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
            </div>
            <div class="w-4/6 p-5">
              <h2 class="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div class="flex flex-wrap justify-between items-center mt-6">
                <div class="inline-flex items-center">
                  <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/8.jpg" />
                  </div>
                  <div class="flex-1 pl-2">
                    <h2 class="text-white mb-1">Jonathan Mithu</h2>
                    <p class="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span class="text-white opacity-50">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 px-3 mb-6 w-full">
          <div class="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div class="w-2/6">
              <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1556742044-3c52d6e88c62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
            </div>
            <div class="w-4/6 p-5">
              <h2 class="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div class="flex flex-wrap justify-between items-center mt-6">
                <div class="inline-flex items-center">
                  <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/11.jpg" />
                  </div>
                  <div class="flex-1 pl-2">
                    <h2 class="text-white mb-1">Chris Sonne</h2>
                    <p class="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span class="text-white opacity-50">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>
        <div class="md:w-1/2 px-3 mb-6 w-full">
          <div class="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div class="w-2/6">
              <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjU1MzA3fQ&auto=format&fit=crop&w=2250&q=80" />
            </div>
            <div class="w-4/6 p-5">
              <h2 class="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div class="flex flex-wrap justify-between items-center mt-6">
                <div class="inline-flex items-center">
                  <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/33.jpg" />
                  </div>
                  <div class="flex-1 pl-2">
                    <h2 class="text-white mb-1">Mike Olle</h2>
                    <p class="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span class="text-white opacity-50">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>
          <div class="md:w-1/2 px-3 mb-6 w-full">
          <div class="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div class="w-2/6">
              <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjU1MzA3fQ&auto=format&fit=crop&w=2250&q=80" />
            </div>
            <div class="w-4/6 p-5">
              <h2 class="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div class="flex flex-wrap justify-between items-center mt-6">
                <div class="inline-flex items-center">
                  <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/33.jpg" />
                  </div>
                  <div class="flex-1 pl-2">
                    <h2 class="text-white mb-1">Mike Olle</h2>
                    <p class="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span class="text-white opacity-50">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>

        
        <div class="lg:w-1/4 md:w-1/2 px-3 mb-6">
          <div class="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div class="w-full">
              <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1556909190-eccf4a8bf97a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
            </div>
            <div class="w-full p-5">
              <h2 class="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div class="flex flex-wrap justify-between items-center mt-6">
                <div class="inline-flex items-center">
                  <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/22.jpg" />
                  </div>
                  <div class="flex-1 pl-2">
                    <h2 class="text-white mb-1">Chris Sonne</h2>
                    <p class="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span class="text-white opacity-50">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 px-3 mb-6">
          <div class="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div class="w-full">
              <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1494438639946-1ebd1d20bf85?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2247&q=80" />
            </div>
            <div class="w-full p-5">
              <h2 class="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div class="flex flex-wrap justify-between items-center mt-6">
                <div class="inline-flex items-center">
                  <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/23.jpg" />
                  </div>
                  <div class="flex-1 pl-2">
                    <h2 class="text-white mb-1">Chris Sonne</h2>
                    <p class="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span class="text-white opacity-50">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 px-3 mb-6">
          <div class="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div class="w-full">
              <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1565388161858-5ae922cbfde0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
            </div>
            <div class="w-full p-5">
              <h2 class="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div class="flex flex-wrap justify-between items-center mt-6">
                <div class="inline-flex items-center">
                  <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/25.jpg" />
                  </div>
                  <div class="flex-1 pl-2">
                    <h2 class="text-white mb-1">Chris Sonne</h2>
                    <p class="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span class="text-white opacity-50">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:w-1/4 md:w-1/2 px-3 mb-6">
          <div class="flex w-full h-full flex-wrap bg-gray-800 overflow-hidden rounded">
            <div class="w-full">
              <img class="object-cover h-full w-full" src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2195&q=80" />
            </div>
            <div class="w-full p-5">
              <h2 class="text-white leading-normal text-lg">How To Boost Your Traffic Of Your Blog And Destroy The Competition</h2>
              <div class="flex flex-wrap justify-between items-center mt-6">
                <div class="inline-flex items-center">
                  <div class="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                    <img src="https://randomuser.me/api/portraits/men/29.jpg" />
                  </div>
                  <div class="flex-1 pl-2">
                    <h2 class="text-white mb-1">Chris Sonne</h2>
                    <p class="text-white opacity-50 text-xs">May 18</p>
                  </div>
                </div>
                <span class="text-white opacity-50">
              <svg class="fill-current w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 459 459">
                <path d="M357 0H102C73.95 0 51 22.95 51 51v408l178.5-76.5L408 459V51c0-28.05-22.95-51-51-51z"/>
              </svg>
            </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <button class="border border-gray-600 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-600 hover:text-white">Show More</button>
      </div>
    </div>
  </div>  
      
    </div>)
}


function Article() {
  return (
    <div className="p-4" >
      <div  className="mb-5 max-w-2xl mx-auto">
        <h1 href="#" className="text-gray-900 font-bold text-3xl mb-2">Revenge of the Never Trumpers</h1>
        <p className="text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
        <div className="text-gray-700 text-xs flex my-6 flex justify-between">
          <div className="flex items-center">
            <a href="#"><img className="w-12 h-12 rounded-full mr-2" src="https://tailwindcss.com/img/jonathan.jpg" alt="Avatar of Jonathan Reinink" /></a>
            <div className="text-sm">
              <a href="#" className="text-gray-900 font-medium leading-none hover:text-indigo-600 transition duration-500 ease-in-out">Jonathan Reinink</a>
              <p className="text-gray-600 text-xs">Aug 18</p>
            </div>
          </div>
        </div>
      </div>

          
      <div  className="max-w-2xl mx-auto">
        <div className="mt-3  rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
          <div>
            <div className="bg-cover h-64 text-center overflow-hidden" style={{ height:"", backgroundImage: "url('https://api.time.com/wp-content/uploads/2020/07/never-trumpers-2020-election-01.jpg?quality=85&w=1201&h=676&crop=1')" }} title="Woman holding a mug"></div>
            <p className="text-base leading-8 my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <h3 className="text-2xl font-bold my-5">#1. What is Lorem Ipsum?</h3>

            <p className="text-base leading-8 my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <blockquote className="text-md italic leading-8 my-5 p-5 text-indigo-600 font-semibold">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</blockquote>

            <p className="text-base leading-8 my-5">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>

            <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
              #Election
            </a>, <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
              #people
            </a>, <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
              #Election2020
            </a>, <a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
              #trump
            </a>,<a href="#" className="text-xs text-indigo-600 font-medium hover:text-gray-900 transition duration-500 ease-in-out">
              #Joe
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}


