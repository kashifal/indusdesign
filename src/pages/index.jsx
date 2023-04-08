import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import Team from '@/components/Team';
import {HeroSection} from '@/components/HeroSection';
import Showcase from '@/components/showcase';
import Gsap from '@/components/Gsap'; 
import Modal from '@/components/Modal';



export default function Home() {
  return (
    <>
      <Head>
        <title>IndusAppps. - Hire Designers / Developers</title>
        <meta
          name="description"
          content="Your frontend team is here. Hire Vue js, React js, Figma to HTML and Tailwind, Next and Nuxt pixel-perfect Developers"
        />
      </Head>
      <Header />
      <main>
     
        <Hero />
        <Modal />
        <PrimaryFeatures />
       
        <SecondaryFeatures />
        
        <CallToAction />
        <div className="py-24 sm:pt-32">
          <h2
            id="reviews-title"
            className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
          >
            Responsive and Perfect Design
          </h2>
          <p className="mt-2 text-lg text-gray-600 sm:text-center">
            No Look further, Get Pixel Perfect Design here
          </p>
          <div className="">
            <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                  <img
                    src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
                    alt="App screenshot"
                    width={2432}
                    height={1442}
                    className="rounded-md shadow-2xl ring-1 ring-gray-900/10"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <a
          href="https://join.slack.com/t/indusspacegroup/shared_invite/zt-1rpyxjj6b-V1JBqGKEgKLykfwM34NKig"
          className="fixed bottom-8  right-8 z-50 flex items-center gap-2 rounded-full  px-3 py-3 font-semibold ring-1 ring-transparent duration-300 bg-blue-600"
        >
          <div className="h-4 w-4 absolute animate-bounce rounded-full flex items-center justify-center -top-1 right-2 ring-1 ring-blue-600 bg-white text-blue-600 text-xs
          ">1</div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-white"
            viewBox="0 0 256 256"
          >
            <path
              fill="currentColor"
              d="M214.4 128A28 28 0 1 0 180 84.43V56a28 28 0 0 0-52-14.4A28 28 0 1 0 84.43 76H56a28 28 0 0 0-14.4 52A28 28 0 1 0 76 171.57V200a28 28 0 0 0 52 14.41A28 28 0 1 0 171.57 180H200a28 28 0 0 0 14.4-52ZM76 152a20 20 0 1 1-20-20h20Zm48 48a20 20 0 0 1-40 0v-48a20 20 0 0 1 20-20h20Zm0-76H56a20 20 0 0 1 0-40h48a20 20 0 0 1 20 20Zm0-48h-20a20 20 0 1 1 20-20Zm56 28a20 20 0 1 1 20 20h-20Zm-48-48a20 20 0 0 1 40 0v48a20 20 0 0 1-20 20h-20Zm40 144a20 20 0 0 1-40 0v-20h20a20 20 0 0 1 20 20Zm28-28h-48a20 20 0 0 1-20-20v-20h68a20 20 0 0 1 0 40Z"
            />
          </svg>
          {/* <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4' viewBox="0 0 256 256"><path fill="#E01E5A" d="M53.841 161.32c0 14.832-11.987 26.82-26.819 26.82c-14.832 0-26.819-11.988-26.819-26.82c0-14.831 11.987-26.818 26.82-26.818H53.84v26.819Zm13.41 0c0-14.831 11.987-26.818 26.819-26.818c14.832 0 26.819 11.987 26.819 26.819v67.047c0 14.832-11.987 26.82-26.82 26.82c-14.83 0-26.818-11.988-26.818-26.82v-67.047Z"/><path fill="#36C5F0" d="M94.07 53.638c-14.832 0-26.82-11.987-26.82-26.819C67.25 11.987 79.239 0 94.07 0s26.819 11.987 26.819 26.819v26.82h-26.82Zm0 13.613c14.832 0 26.819 11.987 26.819 26.819c0 14.832-11.987 26.819-26.82 26.819H26.82C11.987 120.889 0 108.902 0 94.069c0-14.83 11.987-26.818 26.819-26.818h67.25Z"/><path fill="#2EB67D" d="M201.55 94.07c0-14.832 11.987-26.82 26.818-26.82c14.832 0 26.82 11.988 26.82 26.82s-11.988 26.819-26.82 26.819H201.55v-26.82Zm-13.41 0c0 14.832-11.988 26.819-26.82 26.819c-14.831 0-26.818-11.987-26.818-26.82V26.82C134.502 11.987 146.489 0 161.32 0c14.831 0 26.819 11.987 26.819 26.819v67.25Z"/><path fill="#ECB22E" d="M161.32 201.55c14.832 0 26.82 11.987 26.82 26.818c0 14.832-11.988 26.82-26.82 26.82c-14.831 0-26.818-11.988-26.818-26.82V201.55h26.819Zm0-13.41c-14.831 0-26.818-11.988-26.818-26.82c0-14.831 11.987-26.818 26.819-26.818h67.25c14.832 0 26.82 11.987 26.82 26.819c0 14.831-11.988 26.819-26.82 26.819h-67.25Z"/></svg> */}
           
        </a>


        <a
          href="mailto:ikashif@indusappps.com"
          className="fixed bottom-8  right-24 z-50 flex items-center gap-2 rounded-full  px-3 py-3 font-semibold ring-1 ring-transparent duration-300 bg-pink-600"
        >
          
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 24 24"><path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5l-8-5h16zm0 12H4V8l8 5l8-5v10z"/></svg>
          {/* <svg xmlns="http://www.w3.org/2000/svg" className='h-4 w-4' viewBox="0 0 256 256"><path fill="#E01E5A" d="M53.841 161.32c0 14.832-11.987 26.82-26.819 26.82c-14.832 0-26.819-11.988-26.819-26.82c0-14.831 11.987-26.818 26.82-26.818H53.84v26.819Zm13.41 0c0-14.831 11.987-26.818 26.819-26.818c14.832 0 26.819 11.987 26.819 26.819v67.047c0 14.832-11.987 26.82-26.82 26.82c-14.83 0-26.818-11.988-26.818-26.82v-67.047Z"/><path fill="#36C5F0" d="M94.07 53.638c-14.832 0-26.82-11.987-26.82-26.819C67.25 11.987 79.239 0 94.07 0s26.819 11.987 26.819 26.819v26.82h-26.82Zm0 13.613c14.832 0 26.819 11.987 26.819 26.819c0 14.832-11.987 26.819-26.82 26.819H26.82C11.987 120.889 0 108.902 0 94.069c0-14.83 11.987-26.818 26.819-26.818h67.25Z"/><path fill="#2EB67D" d="M201.55 94.07c0-14.832 11.987-26.82 26.818-26.82c14.832 0 26.82 11.988 26.82 26.82s-11.988 26.819-26.82 26.819H201.55v-26.82Zm-13.41 0c0 14.832-11.988 26.819-26.82 26.819c-14.831 0-26.818-11.987-26.818-26.82V26.82C134.502 11.987 146.489 0 161.32 0c14.831 0 26.819 11.987 26.819 26.819v67.25Z"/><path fill="#ECB22E" d="M161.32 201.55c14.832 0 26.82 11.987 26.82 26.818c0 14.832-11.988 26.82-26.82 26.82c-14.831 0-26.818-11.988-26.818-26.82V201.55h26.819Zm0-13.41c-14.831 0-26.818-11.988-26.818-26.82c0-14.831 11.987-26.818 26.819-26.818h67.25c14.832 0 26.82 11.987 26.82 26.819c0 14.831-11.988 26.819-26.82 26.819h-67.25Z"/></svg> */}
           
        </a>

        <Reviews />
      
        <Team />
        <HeroSection />
        <Pricing /> 
        <Faqs />
        <Showcase />
      </main>
      <Footer />
    </>
  )
}
