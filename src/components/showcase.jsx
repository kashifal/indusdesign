import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import React, { useState } from 'react'
import { ArrowUpRightIcon } from '@heroicons/react/20/solid'
import { motion } from 'framer-motion'; // Import motion component from Framer Motion

const footerVariant = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function Showcase() {
  const [tab, setTab] = useState('all')
  const projects = [
    {
      id: 1,
      name: 'Wealthfront',
      category: 'reactjs',
      image:
        'https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.f3e20d55.png&w=1920&q=90',
      link: '/',
    },
    {
      id: 2,
      name: 'Lemon Squeezy',
      category: 'reactjs',
      image:
        'https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.d7c8c552.png&w=1920&q=90',
      link: '/',
    },
    {
      id: 3,
      name: 'Shopify',
      category: 'vuejs',
      image:
        'https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.b568020c.png&w=1920&q=90',
      link: '/',
    },
    {
      id: 4,
      name: 'Netflix – Global Top 10',
      category: 'vuejs',
      image:
        'https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.53652787.png&w=1920&q=90',
      link: '/',
    },
    {
      id: 5,
      name: 'PlanetScale',
      category: 'reactjs',
      image:
        'https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.bddc44d8.png&w=1920&q=90',
      link: '/',
    },
    {
      id: 6,
      name: 'Algolia Docs',
      category: 'reactjs',
      image:
        'https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.d04dafc3.png&w=1920&q=90',
      link: '/',
    },
    {
      id: 7,
      name: 'Wander',
      category: 'vuejs',
      image:
        'https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.3998286d.png&w=1920&q=90',
      link: '/',
    },
    {
      id: 8,
      name: 'Column',
      category: 'vuejs',
      image:
        'https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.ae4b0a19.png&w=1920&q=90',
      link: '/',
    },
    {
      id: 9,
      name: 'Microsoft .NET',
      category: 'reactjs',
      image:
        'https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.49a04d85.png&w=1920&q=90',
      link: '/',
    },
    {
      id: 10,
      name: 'Primer',
      category: 'vuejs',
      image:
        'https://tailwindcss.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2F1.9356d365.png&w=1920&q=90',
      link: '/',
    },
  ]
  const getProjectsByCategory = (category) => {
    if (category === 'all') return projects
    return projects.filter((project) => project.category === category)
  }
  const reactProjects = getProjectsByCategory('reactjs')
  const vueProjects = getProjectsByCategory('vuejs')
  return (
    <div id="showcase">
      <div className="m-auto flex max-h-fit w-full max-w-6xl flex-col items-center justify-center gap-10 py-10">
        <div className="flex flex-col justify-center gap-2 text-center">
          <span className="rounded-full px-3 py-1 font-semibold text-blue-600">
            Showcase
          </span>
          <h1 className="text-xl font-bold sm:text-3xl sm:font-black md:text-4xl">
            Inspiring Projects and <br /> Ideas: Explore Our Showcase Now!
          </h1>
        </div>
        <div>
          <div className="flex items-center gap-2 rounded-full border px-1 py-1">
            <button
              onClick={() => setTab('all')}
              className={`rounded-full py-1 px-4 text-sm font-semibold ${
                tab === 'all'
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              All
            </button>
            <button
              onClick={() => setTab('reactjs')}
              className={`rounded-full py-1 px-4 text-sm font-semibold ${
                tab === 'reactjs'
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              ReactJS
            </button>
            <button
              onClick={() => setTab('vuejs')}
              className={`rounded-full py-1 px-4 text-sm font-semibold ${
                tab === 'vuejs'
                  ? 'bg-blue-600 text-white'
                  : 'hover:bg-gray-100'
              }`}
            >
              VueJS
            </button>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {tab === 'all' &&
            projects.map((project,index) => {
              return (
                <motion.div
                variants={footerVariant}
                initial="hidden"
                animate="visible"
                transition={{
                  ease: "linear",
                  duration: 1,
                  x: { duration: 1 }
                }}
              >
                <div
                  key={project.id}
                  className="flex max-h-fit w-[360px] flex-col gap-3 rounded-3xl bg-gray-100 p-4"
                >
                  <img className="rounded-3xl" src={project.image} alt="" />
                  <div>
                    <a
                      target={'_blank'}
                      href={project.link}
                      className="text-sm font-semibold hover:text-blue-600"
                    >
                      <span>{project.name}</span>
                      <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4" />
                    </a>
                  </div>
                </div>
                </motion.div>
              )
            })}
          {tab === 'reactjs' &&
            reactProjects.map((project) => {
              return (
                <motion.div
                variants={footerVariant}
                initial="hidden"
                animate="visible"   
                transition={{
                  ease: "linear",
                  duration: 1,
                  x: { duration: 1 }
                }}
              >
                <div
                  key={project.id}
                  className="flex max-h-fit w-[360px] flex-col gap-3 rounded-3xl bg-gray-100 p-4"
                >
                  <img className="rounded-3xl" src={project.image} alt="" />
                  <div>
                    <a
                      target={'_blank'}
                      href={project.link}
                      className="text-sm font-semibold hover:text-blue-600"
                    >
                      <span>{project.name}</span>
                      <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4" />
                    </a>
                  </div>
                </div>
                </motion.div>
              )
            })}
          {tab === 'vuejs' &&
            vueProjects.map((project) => {
              return (
                <motion.div
                variants={footerVariant}
                initial="hidden"
                animate="visible"
                transition={{
                  ease: "linear",
                  duration: 1,
                  x: { duration: 1 }
                }}
              >
                <div
                  key={project.id}
                  className="flex max-h-fit w-[360px] flex-col gap-3 rounded-3xl bg-gray-100 p-4"
                >
                  <img className="rounded-3xl" src={project.image} alt="" />
                  <div>
                    <a
                      target={'_blank'}
                      href={project.link}
                      className="text-sm font-semibold hover:text-blue-600"
                    >
                      <span>{project.name}</span>
                      <ArrowUpRightIcon className="ml-1 inline-block h-4 w-4" />
                    </a>
                  </div>
                </div>
                </motion.div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Showcase
