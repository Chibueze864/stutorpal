import { getAuth, onAuthStateChanged } from "firebase/auth";
import Header from "../components/header.jsx";
import Footer from "../components/footer.jsx";
import { useAuthState } from "react-firebase-hooks/auth";
import Container from "../components/container";
import { useState,useRef , useEffect } from 'react'
import {auth} from "../config"
import customerSupportImage from "../images/5124556.jpg"
import Image from 'next/image'

export default function Home() {
const [providerUser, setProviderUser] = useAuthState(auth);
const [user, setUser] = useState(null)
const form = useRef();
const [subject, setSubject] = useState("")
const [message, setMessage] = useState("")
 return(
    <div>
      <Header ></Header>
  
      <div>
        <div className="lg:px-20 py-8" style={{ backgroundImage: "url(https://stutorpal.github.io/waitlist/img/banner-4.png)", backgroundSize: "cover" }} >
          <Container className="flex flex-wrap pt-5">
            <div className="flex items-center w-full lg:w-1/2">
              <div className="max-w-2xl  lg:text-left md:text-left sm:text-center px-4  mb-8">
                <h1 className="text-3xl py-3  font-bold leading-snug tracking-tight  lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
                  Stutorpal 
                </h1>
                <p className="py-3 text-xl leading-normal lg:text-xl xl:text-2xl">
                  When trying to get the best of grades, with us you'll ace the tests you take. The first peer-to-peer tutorship app. For students by students     </p>

                <p className="py-3 text-xl leading-normal lg:text-xl xl:text-2xl"><small>Coming soon to</small></p>


                <div className="py-3 flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
                  <div class="flex mt-1 w-48 h-14 bg-blue text-white rounded-lg items-center justify-center" style={{ backgroundColor: "#3673E6" }}>
                    <div class="mr-3">
                      <svg viewBox="30 336.7 120.9 129.2" width="30">
                        <path fill="#FFD400" d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z" />
                        <path fill="#FF3333" d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z" />
                        <path fill="#48FF48" d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z" />
                        <path fill="#3BCCFF" d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z" />
                      </svg>
                    </div>
                    <div>
                      <div class="text-xl font-semibold font-sans -mt-1">Google Play</div>
                    </div>
                  </div>
                  <div class="flex mt-5 w-48 h-14 bg-black text-white rounded-xl items-center justify-center" style={{ backgroundColor: "#3673E6" }}>
                    <div class="mr-3">
                      <svg viewBox="0 0 384 512" width="30" >
                        <path fill="currentColor" d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
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
                    <img src="https://raw.githubusercontent.com/stutorpal/waitlist/main/img/App-Snapshot.png" className="dark:hidden w-[272px] h-[572px]" alt="App Snapshot" />
                    <img src="https://raw.githubusercontent.com/stutorpal/waitlist/main/img/App-Snapshot.png" className="hidden dark:block w-[272px] h-[572px]" alt="App Snapshot" />
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <Container>
          </Container>

        </div>

        <div className="lg:px-20 py-8" style={{ backgroundImage: "url(https://stutorpal.github.io/waitlist/img/service-bg.svg)", backgroundSize: "contain" }} >
          <div >
            <Container className="flex flex-wrap pt-5">
              <div className="flex px-4   lg:text-left md:text-left sm:text-center items-center w-full lg:w-1/2">
                <div className=" max-w-2xl mb-8">
                  <p className="py-3 text-1xl leading-normal lg:text-1xl xl:text-1xl" style={{ color: "#3673E6" }}>
                    What's It All About?        </p>
                  <h3 className="text-2xl py-3 font-bold leading-snug tracking-tight  lg:text-3xl lg:leading-tight xl:text-3xl xl:leading-tight">
                    Stutorpal is a platform to connect, learn and earn!
                  </h3>
                </div>

              </div>
              <div className="p-3 w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {/* Card 1 */}
                <div className="rounded p-8 bg-white py h-fit-content shadow-lg">
                  <img className="w-full py-6 " src="https://stutorpal.github.io/waitlist/img/undraw_connected_re_lmq2.svg" alt="Mountain" style={{ height: "250px" }} />
                  <div className="px-6 py-6">
                    <div className="font-bold text-xl mb-2">Peer-to-Peer Connections</div>
                    <p className="text-gray-700  text-base">
                      Our tutorship app creates a dynamic platform where students can connect with each other on campus, fostering a vibrant community of knowledge-sharing. Whether you need help with calculus, essay writing, or coding, our app enables you to find the perfect peer tutor who understands your specific needs and can provide valuable insights.
                    </p>
                  </div>
                </div>
                {/* Card 2 */}
                <div className="rounded p-8 bg-white h-fit-content shadow-lg">
                  <img className="w-full py-6" src="https://stutorpal.github.io/waitlist/img/undraw_educator_re_ju47.svg" alt="Mountain" style={{ height: "250px" }} />
                  <div className="px-6 py-6">
                    <div className="font-bold text-xl mb-2">Tailored Learning Experiences</div>
                    <p className="text-gray-700  text-base">
                      With our app, learning becomes personalized and engaging. Students can choose tutors based on their expertise, teaching style, and even shared interests. This empowers learners to engage in meaningful one-on-one sessions, where they can delve deeper into subjects, ask questions freely, and gain a comprehensive understanding of the topic at hand.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="rounded p-8 bg-white h-fit-content shadow-lg">
                  <img className="w-full py-6" src="https://stutorpal.github.io/waitlist/img/undraw_savings_re_eq4w.svg" alt="Mountain" style={{ height: "250px" }} />
                  <div className="px-6 py-6">
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
            <Container className="flex flex-wrap pt-5">
              <div className="flex px-4   lg:text-left md:text-left sm:text-center items-center w-full lg:w-1/2">
                <div className="     max-w-2xl mb-8">

                  <h3 className="text-2xl font-bold leading-snug tracking-tight  lg:text-3xl lg:leading-tight xl:text-3xl xl:leading-tight py-3">
                    Meet The Team
                  </h3>
                </div>

              </div>
              <div className="p-3 w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                {/* Card 1 */}
                <div className="rounded p-8 bg-white py h-fit-content shadow-lg">
                  <img className="w-full py-6 " src="https://stutorpal.github.io/waitlist/img/Chibueze.png" alt="Chibueze" style={{ objectFit: "contain", borderRadius: "50%" }} />
                  <div className="px-6 py-6">
                    <div className="font-bold text-xl mb-2">Chibueze Onyekpere</div>
                    <p className="text-gray-700  text-base">
                      Full Stack Web Developer, Team Lead
                    </p>
                  </div>
                </div>


                {/* Card 2 */}
                   <div className="rounded p-8 bg-white py h-fit-content shadow-lg">
                  <img className="w-full py-6 " src="https://stutorpal.github.io/waitlist/img/Harrison.png" alt="Harrison" style={{ objectFit: "contain", borderRadius: "50%" }} />
                  <div className="px-6 py-6">
                    <div className="font-bold text-xl mb-2">Harrison Akunne</div>
                    <p className="text-gray-700  text-base">
                      Full Stack Web Developer
                    </p>
                  </div>
                </div>
                
          

                {/* Card 3 */}
                             <div className="rounded p-8 bg-white py h-fit-content shadow-lg">
                  <img className="w-full py-6 " src="https://stutorpal.github.io/waitlist/img/Fiki.png" alt="Fiki" style={{ objectFit: "contain", borderRadius: "50%" }} />
                  <div className="px-6 py-6">
                    <div className="font-bold text-xl mb-2">Fiki Joshua</div>
                    <p className="text-gray-700  text-base">
                      UI/UX Designer, Full Stack Web Developer
                    </p>
                  </div>
                </div>
                


              </div>
              <div>

              </div>
            </Container>
            <Container className="flex flex-wrap pt-5">
              <div className="flex px-4   lg:text-left md:text-left sm:text-center items-center w-full lg:w-1/2">
                <div className="     max-w-2xl mb-8">

                  <h3 className="text-2xl font-bold leading-snug tracking-tight  lg:text-3xl lg:leading-tight xl:text-3xl xl:leading-tight py-3">
                    Contact Us
                  </h3>
                </div>

              </div>
              <div className="p-3  w-full grid grid-cols-1 grid-cols-1 lg:grid-cols-2">
                                      <div >
                          <Image src={customerSupportImage} style={{height:"inherit"}} />
                      </div>

                {/* Form */}
                                  <div  className="rounded p-8 bg-white   shadow-lg grid grid-cols-1 " style={{height:"fit-content"}}>
                <div class="space-y-8">
                  <div>
                    <label for="email" class="block mb-2 text-sm font-medium text-black-900 dark:text-black-300">Your email</label>
                    <input type="email" id="email" class="shadow-sm  border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
                  </div>
                  <div>
                    <label for="subject" class="block mb-2 text-sm font-medium text-black-900 dark:text-black-300">Subject</label>
                    <input type="text" id="subject" class="shadow-sm  border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
                  </div>
                  <div class="sm:col-span-2 ">
                    <label for="message" class="block mb-2 text-sm font-medium text-black-900 dark:text-black-400">Your message</label>
                    <textarea id="message" rows="6" class="shadow-sm  border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="Leave a comment..."></textarea>
                  <a href={`mailto:stutorpal@gmail.com?subject=${subject}&body=${message}`}> <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300shadow-sm  border border-gray-300 text-black-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5  dark:border-gray-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light mt-4 py-5">Submit</button></a> 
                  </div>

                </div>
                                    
                </div>

              </div>
            </Container>

          </div>
        </div>


      </div>


      <Footer>

      </Footer>



    </div>
  )
}




