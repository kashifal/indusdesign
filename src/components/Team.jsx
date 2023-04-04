import Image from 'next/image'

const people = [
  {
    name: 'Kashif S.',
    role: 'Founder IndusAppps Inc.',
    imageUrl: '/images/kashee.jpg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: ' Shaheer I.',
    role: 'React/Next Engineer',
    imageUrl: '/images/sheer.jpeg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Hamza W.',
    role: 'Tailwind CSS Expert',
    imageUrl: '/images/hamza.png',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Qamar M.',
    role: 'UIUX',
    imageUrl: '/images/qamar.jpeg',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Anisha F.',
    role: 'PSD/FIGMA/XD to HTML',
    imageUrl:
      'https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
  // More people...
]

export default function Team() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Meet our Dolphins
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="relative">
                <img
                  className="mx-auto h-36 w-36 rounded-full bg-center object-cover ring-2 ring-blue-400"
                  src={person.imageUrl}
                  alt=""
                />
                <svg
                className='absolute bottom-4 right-8 h-8 w-8'
                  width="122"
                  height="100"
                  viewBox="0 0 122 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="50" cy="50" r="50" fill="#2563EB" />
                  <path
                    d="M120 71.6738C111.572 50.3927 103.354 43.2288 95.5584 37.1184C91.7657 34.1685 94.5049 30.3759 101.247 28.4795C96.6119 27.8474 90.9229 27.0046 83.759 32.0615C75.5415 28.2688 44.3574 23.4227 40.9861 45.5465L38.4577 48.9178C37.1935 52.9212 38.6684 52.4998 41.4075 51.0248C44.1467 49.5499 58.2638 45.7572 62.2672 47.8643C65.4277 55.2389 69.6418 56.5031 79.7556 57.9781C76.8057 56.2924 72.5917 55.0282 71.5382 48.7071C78.07 48.4964 93.2406 53.5533 99.5617 59.6637C97.4547 54.6068 76.8057 38.5933 50.6785 44.9144C49.8357 40.0682 59.7387 34.1685 71.3275 35.0114C82.4947 35.8542 93.2406 38.804 101.037 45.7572C109.216 52.8695 115.696 61.7257 120 71.6738Z"
                    fill="white"
                    stroke="white"
                    stroke-width="2.10704"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
              <h3 className="mt-6 text-base font-semibold leading-7 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li>
                  <a
                    href={person.twitterUrl}
                    className="text-gray-400   hover:text-gray-500"
                  >
                    <span className="sr-only">Twitter</span>
                    {/* <svg  xmlns="http://www.w3.org/2000/svg"    viewBox="0 0 24 24"><path fill="#6fda44" d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703a2.707 2.707 0 0 1-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.551 2.551 0 0 1-2.547 2.548a2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3-2.439-5.439-5.439-5.439z"/></svg> */}
                    <svg className="h-5  w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
                  </a>
                </li>
                <li>
                  <a
                    href={person.twitterUrl}
                    className="text-gray-400   hover:text-gray-500"
                  >
                    <span className="sr-only">Twitter</span>
                   
                    <svg className="h-5  w-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="-2 -2 24 24"><g fill="#1dbf73"><path d="M13.427 13.148v-5h-5v-.312c0-.517.42-.938.938-.938h.937V5.023h-.937a2.816 2.816 0 0 0-2.813 2.813v.312h-1.25v1.875h1.25v3.125h-1.25v1.875h4.375v-1.875h-1.25v-3.125h3.143v3.125h-1.268v1.875h4.375v-1.875h-1.25z"/><circle cx="12.402" cy="5.971" r="1.001"/><path d="M4 2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H4zm0-2h12a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"/></g></svg>
                  </a>
                </li>
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
