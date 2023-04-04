import Head from 'next/head'
import Link from 'next/link'

import { AuthLayout } from '@/components/AuthLayout'
import { Button } from '@/components/Button'
import { TextField } from '@/components/Fields'

export default function Login() {
  return (
    <>
      <Head>
        <title>Quote - Indus</title>
      </Head>
      <AuthLayout
        title="Ask us for anything / Price / Time"
        subtitle={
          <>
             
          </>
        }
      >
        <form>
          <div className="space-y-6">
          <TextField
              label="Name"
              id="name"
              name="name"
              type="name"
              autoComplete="name"
              
            />
            <TextField
              label="Email address"
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
            />
            <TextField
              label="Message"
              id="message"
              name="message"
              type="message"
              autoComplete="message"
              required
            />
          </div>
          <Button type="submit" color="blue" className="mt-8 w-full">
            Get a Quote
          </Button>
        </form>
      </AuthLayout>
    </>
  )
}
