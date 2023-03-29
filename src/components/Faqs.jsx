import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
    question: 'What web design services do you offer?',
    answer:
    'We offer a wide range of web design services, including custom website design, website redesign, responsive design, e-commerce design, and more. Contact us for a full list of our services.',
    },
    {
    question: 'How do you ensure the website design meets my needs?',
    answer:
    'We have a thorough design process that includes multiple rounds of revisions and feedback from our clients. We work closely with you to ensure that your website design meets your specific needs and goals.',
    },
    {
    question: 'What kind of websites do you design?',
    answer:
    'We design websites for all kinds of businesses and organizations, from small startups to large corporations. We can create websites for e-commerce, blogs, portfolios, and more.',
    },
    ],
    [
      {
      question: 'How long does it take to design a website?',
      answer:
      'The timeline for website design can vary depending on the complexity of the project and the clients specific needs. We provide estimates based on the scope of the project, and work diligently to meet our deadlines.',
      },
      {
      question: 'What kind of design software do you use?',
      answer:
      'We use a variety of design software, including Adobe Creative Suite, Figma, Sketch, and more. We choose the software that best fits the needs of the specific project and client.',
      },
      {
      question: 'Do you provide website maintenance and support?',
      answer:
      'Yes, we offer ongoing website maintenance and support to ensure that your website is up-to-date and running smoothly. Contact us for more information about our maintenance packages.',
      },
      ],
      [
        {
        question: 'What is your design philosophy?',
        answer:
        'Our design philosophy is centered around creating user-friendly and visually appealing websites that meet the specific needs of our clients. We strive to create designs that are both functional and aesthetically pleasing.',
        },
        {
        question: 'What kind of design trends are you following?',
        answer:
        'We stay up-to-date on the latest design trends, including responsive design, mobile-first design, and minimalist design. However, we also believe that good design is timeless and should be tailored to the specific needs of the client.',
        },
        {
        question: 'How do you ensure that the website design is SEO-friendly?',
        answer:
        'We have a team of SEO experts who work closely with our design team to ensure that the website design is optimized for search engines. We use best practices for on-page SEO, including optimized page titles, meta descriptions, and structured data.',
        },
        ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-medium tracking-tight text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:info@example.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
