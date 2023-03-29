import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'

export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-20 sm:py-28"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-md sm:text-center">
          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            Get your  design today
          </h2>
          <p className="mt-4 text-lg text-gray-300">
     

            It takes 30 seconds to see our accounts, on fiverr and upwork or to get a Quote.
            Why not Then Let's Connect and build your first Billion Dollar idea, together
          </p>
          
        </div>
      </Container>
    </section>
  )
}
