import { Fragment, useEffect } from 'react'
import { Dialog, Transition } from '@headlessui/react' 
import { Button } from '@/components/Button' 
import { TextField } from '@/components/Fields'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'
import { useRouter } from 'next/router';

export default function Modal() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const form = useRef()
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(false);
  

  const sendEmail = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs
      .sendForm(
        'service_8babnj1',
        'template_pvlplms',
        form.current,
        'bDb-rYbZ0Lx1Huby_'
      )
      .then(
        (result) => {
          console.log(result)
          setLoading(false)
          if(result.status === 200){
            
            setMessage(true )

            setTimeout(() => {
              setMessage(false )
              router.push('/');
              setOpen(false)

            },3000)
          }
        },
        (error) => {
          console.log(error.text)
        }
      )
  }



  useEffect(() => {
   setTimeout(() => {
    setOpen(true);
   }, 5000)
  },[])
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
              {
                message ? <h1 className='text-center text-blue-700 py-2 text-sm rounded-md font-normal my-2 bg-blue-100'>Thanks, Check your inbox</h1> :  <h1 className='text-center my-3 text-gray-700 py-2 text-2xl font-bold py-6'>Ask us anything ~ Budget / Time</h1>
              }
        <form ref={form} onSubmit={sendEmail}>
          <div className="space-y-6">
            <TextField
              label="Name"
              id="name"
              
              autoComplete="name"
              type="text"
              name="to_name"
              
            />
            <TextField
              label="Email address"
              id="email"
              
              type="email"
              name="from_email"
              autoComplete="email"
              required
            />
            <div>
              <label
                for="comment"
                class="mb-2 block text-sm font-semibold text-gray-900"
              >
                Your minimal message
              </label>
              <div class="mt-2">
                <textarea
                  rows="4"
                   required
                  placeholder="Message here"
                  name="message"
                  id="comment"
                  class="block w-full rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:py-1.5 sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
            <Button type="submit" color="blue" className="mt-8 w-full">
              {loading ? (
                <div role="status">
                  <svg
                    aria-hidden="true"
                    class="mr-2 h-6 w-6 animate-spin fill-blue-600 text-gray-200 dark:text-gray-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
              ) : (
                'Get a Quote'
              )}
            </Button>
          </div>
        </form>
    
               
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
