import Image from 'next/image'

const people = [
  
  {
    name: 'Hassan D.',
    role: 'Sr. React Dev',
    imageUrl: '/images/sheer.jpg',
    twitterUrl: 'https://github.com/hasan-mehboob',
    linkedinUrl: '#',
    insta:false,
    linkedin:false,
    link:'https://www.instagram.com/fullplateofgraphics/'
  },
  {
    name: 'Hamza Wattoo.',
    role: 'Jr. Frontend Dev | Vue',
    imageUrl: '/images/hamza.png',
    twitterUrl: 'https://github.com/hamzawattoo',
    linkedinUrl: '#',
    insta:false,
    linkedin:false,
    link:''
  },
  {
    name: 'Kashif Sulehria',
    role: 'Founder here and @ makemecoder',
    imageUrl: '/images/kashee.jpg',
    twitterUrl: 'https://www.linkedin.com/in/kashif-sulehria-9436b3257/',
    linkedinUrl: '#',
    insta:false,
    linkedin:true,
    link:'https://www.linkedin.com/in/ikashif-sulehria-9436b3257/'
  },
  {
    name: 'Zubair K.',
    role: 'Laravel Dev.',
    imageUrl: '/images/fatima.jpg',
    twitterUrl: 'https://www.linkedin.com/in/zubair-asif-a90937184/',
    linkedinUrl: '#',
    insta:false,
    linkedin:false,
    link:'https://www.linkedin.com/in/zubair-asif-a90937184/'
  },
  {
    name: 'Shaheer I.',
    role: 'Jr. Frontend Dev | React',
    imageUrl: '/images/shaheer.jpeg',
    twitterUrl: 'https://github.com/shaheersystems',
    linkedinUrl: '#',
    insta:false,
    linkedin:false,
    link:'https://github.com/shaheersystems'
  },
  // More people...
]

export default function Team() {
  return (
    <div className="bg-white py-32">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
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
          className="mx-auto mt-28 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-5"
        >
          {people.map((person, index) => (
            <li key={person.name}>
              <div className="relative">
                <img
                  className={"mx-auto h-28 w-28 -translate-y-1/4 rounded-full  bg-center object-cover ring-4 ring-emerald-400"}
                  src={person.imageUrl}
                  alt=""
                />
              
              </div>
              <h3 className=" text-base  font-semibold leading-7 tracking-tight text-gray-900">
                {person.name}
              </h3>
              <p className="text-sm leading-6 text-gray-600">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6">
                <li className={person.insta ? 'h-8 w-8 bg-pink-50 rounded-full flex items-center ring-1 ring-pink-500 justify-center' : person.linkedin ? 'h-8 w-8 bg-lime-50 rounded-full ring-1 ring-lime-500 flex items-center justify-center' : 'h-8 w-8 bg-gray-100 ring-1 ring-gray-500 rounded-full flex items-center justify-center'}>
                  
                  <a
                  target="_blank"
                    href={person.twitterUrl}
                    className="text-gray-400   hover:text-gray-500"
                  >
                    <span className="sr-only">Twitter</span>
                    {/* <svg  xmlns="http://www.w3.org/2000/svg"    viewBox="0 0 24 24"><path fill="#6fda44" d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076l.008-.042c.207-1.143.849-3.06 2.839-3.06a2.705 2.705 0 0 1 2.703 2.703a2.707 2.707 0 0 1-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366c-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112a2.551 2.551 0 0 1-2.547 2.548a2.55 2.55 0 0 1-2.545-2.548V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303c2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109c3 0 5.439-2.452 5.439-5.45c0-3-2.439-5.439-5.439-5.439z"/></svg> */}
                    
                    {
                      person.insta ? <svg xmlns="http://www.w3.org/2000/svg"  className="h-5  w-5 text-pink-500" viewBox="0 0 24 24"><path fill="currentColor" d="M7.8 2h8.4C19.4 2 22 4.6 22 7.8v8.4a5.8 5.8 0 0 1-5.8 5.8H7.8C4.6 22 2 19.4 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8C4 18.39 5.61 20 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6C20 5.61 18.39 4 16.4 4H7.6m9.65 1.5a1.25 1.25 0 0 1 1.25 1.25A1.25 1.25 0 0 1 17.25 8A1.25 1.25 0 0 1 16 6.75a1.25 1.25 0 0 1 1.25-1.25M12 7a5 5 0 0 1 5 5a5 5 0 0 1-5 5a5 5 0 0 1-5-5a5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3Z"/></svg> : person.linkedin ? <svg xmlns="http://www.w3.org/2000/svg" className="h-5  w-5 text-lime-500" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77Z"/></svg> :   <svg className="h-5  w-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5c.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34c-.46-1.16-1.11-1.47-1.11-1.47c-.91-.62.07-.6.07-.6c1 .07 1.53 1.03 1.53 1.03c.87 1.52 2.34 1.07 2.91.83c.09-.65.35-1.09.63-1.34c-2.22-.25-4.55-1.11-4.55-4.92c0-1.11.38-2 1.03-2.71c-.1-.25-.45-1.29.1-2.64c0 0 .84-.27 2.75 1.02c.79-.22 1.65-.33 2.5-.33c.85 0 1.71.11 2.5.33c1.91-1.29 2.75-1.02 2.75-1.02c.55 1.35.2 2.39.1 2.64c.65.71 1.03 1.6 1.03 2.71c0 3.82-2.34 4.66-4.57 4.91c.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z"/></svg>
                    }
                  
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
