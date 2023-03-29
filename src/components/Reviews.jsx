import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: "Sleek and Responsive Website Design",
    body: "I was blown away by the sleek and responsive design of the website built by the team at Next Nuxt. The combination of React and Tailwind made for a fast and intuitive user experience. Highly recommend this team!",
    author: "SarahDesigns",
    rating: 5,
  },
  {
    title: "Unmatched User Experience",
    body: "The Vue-based website built by this team is hands down the best I've ever used. The interface is intuitive and the UX is unmatched. Figma was clearly used to great effect here. Great work, team!",
    author: "UXMaster",
    rating: 5,
  },
  {
    title: "Next Level Web Development",
    body: "The Next.js website built by this team is simply amazing. The use of React and Tailwind was inspired, resulting in lightning-fast load times and a beautiful design. Couldn't be happier with the end result!",
    author: "WebWizard",
    rating: 5,
  },
  {
    title: "Innovative Design with Figma",
    body: "The team at Figma really outdid themselves with the design of our website. The attention to detail and innovative use of color and typography made our site stand out from the competition. Highly recommend this team for your design needs!",
    author: "DesignEnthusiast",
    rating: 5,
  },
  {
    title: "Efficient Development with Nuxt.js",
    body: "The website built using Nuxt.js by this team was a dream to develop. The framework allowed for rapid development and easy scaling. The use of Vue and Tailwind was a bonus, resulting in a beautiful and functional site. Great job, team!",
    author: "EfficiencyExpert",
    rating: 5,
  },
  {
    title: "Elegant and Minimalistic Design",
    body: "The website built by this team has an elegant and minimalistic design that really appealed to me. The use of white space and typography was top-notch. Overall, a very aesthetically pleasing website.",
    author: "MinimalistDesigner",
    rating: 5,
    },
    {
    title: "Seamless E-commerce Integration",
    body: "The team at Shopify did an excellent job integrating e-commerce functionality into our website. The checkout process was seamless and intuitive, resulting in increased sales for our business. Highly recommend this team!",
    author: "EcommerceEntrepreneur",
    rating: 5,
    },
    {
    title: "Superb Mobile Responsiveness",
    body: "I was impressed with how well the website built by this team adapted to different screen sizes. The mobile responsiveness was superb, resulting in a great user experience on all devices. Highly recommend this team for mobile-first designs!",
    author: "MobileMaven",
    rating: 5,
    },
    {
    title: "Cutting-Edge Technology Stack",
    body: "The technology stack used by this team was cutting-edge and resulted in a fast and efficient website. The use of GraphQL and React made for a great developer experience, and the end result was a top-notch site. Highly recommend this team for tech-savvy clients!",
    author: "TechEnthusiast",
    rating: 5,
    },
    {
    title: "Intuitive Content Management System",
    body: "The CMS used by this team made it easy for us to manage and update our website content. The intuitive interface and robust features made it a pleasure to use. Highly recommend this team for clients who want to be hands-on with their website!",
    author: "ContentCreator",
    rating: 5,
    },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-emerald-500' : 'fill-gray-300'
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center"
        >
          Discover the Power of Innovation!
        </h2>
        <p className="mt-2 text-lg text-gray-600 sm:text-center">
          Thousands of people have made their business in the 30 days.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
