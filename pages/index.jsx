import { Fragment, useRef } from 'react';
import { Popover, Transition } from '@headlessui/react';
import Script from 'next/script';

import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import Feature from '../components/Feature/Feature';
import About from '../components/About/About';
import Footer from '../components/Footer/Footer';
import Logo from '../components/Logo/Logo.jsx';
import Carousel from '../components/Carousel/Carousel';

const heroContent = {
  heroTitle: 'Stevens Services',
  heroSubtitle: 'Simple. Professional. Turn-key.',
  heroDescription: `Whether it's lawn and landscape, snow and ice management, or construction and remodeling, we bring an experienced team to solve our customers' challenges. Let us help solve yours.`,
  heroImage: {
    src: '/images/IMG_2370A_inqnzo.jpg',
    alt: 'Stevens Services B0SS blade in front of its Kansas City, MO offices.',
  },
  heroButtonText: `Press to call (816) 824-7289`,
  heroButtonSrc: `tel:8168247289`,
};
const solutions = [
  {
    name: 'Lawn & Landscape',
    description:
      'Let us handle your property beautification and maintenance needs with our white-glove lawn and landscape services.',
    href: '#lawn-landscape',
    icon: InboxIcon,
  },
  {
    name: 'Snow & Ice',
    description:
      'Winter will be back in a jiffy. Be prepared with our turn-key snow and ice management, removal, and preventative treatment services.',
    href: '#snow-ice',
    icon: AnnotationIcon,
  },
  {
    name: 'Construction & Remodeling',
    description: `Let us solve your next remodeling, new, or renovative construction challenge. With hundreds of projects and happy customers you are in great hands with Stevens Services.`,
    href: '#construction-remodeling',
    icon: ChatAlt2Icon,
  },
];
const navigation = [];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Example() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-5KMTCTNPHE"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5KMTCTNPHE');
        `}
      </Script>

      <header>
        <Popover className="relative bg-white">
          {({ open }) => (
            <>
              <div className="flex justify-between items-center max-w-7xl mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                <div className="flex items-left text-left justify-start lg:w-0 lg:flex-1">
                  <a className="justify-start text-left" href="tel:8168247289">
                    <span className="sr-only">Stevens Services Logo</span>
                    <Logo />
                  </a>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                    <span className="sr-only">Open menu</span>
                    <MenuIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
                <Popover.Group as="nav" className="hidden md:flex space-x-10">
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={classNames(
                            open ? 'text-gray-900' : 'text-gray-500',
                            'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500',
                          )}
                        >
                          <span>Solutions</span>
                          <ChevronDownIcon
                            className={classNames(
                              open ? 'text-gray-600' : 'text-gray-400',
                              'ml-2 h-5 w-5 group-hover:text-gray-500',
                            )}
                            aria-hidden="true"
                          />
                        </Popover.Button>

                        <Transition
                          show={open}
                          as={Fragment}
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel
                            static
                            className="absolute z-10 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-2xl lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                          >
                            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                              <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                                {solutions.map((item) => (
                                  <a
                                    key={item.name}
                                    href={item.href}
                                    className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                  >
                                    <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-black text-white sm:h-12 sm:w-12">
                                      <item.icon
                                        className="h-6 w-6"
                                        aria-hidden="true"
                                      />
                                    </div>
                                    <div className="ml-4">
                                      <p className="text-base font-medium text-gray-900">
                                        {item.name}
                                      </p>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {item.description}
                                      </p>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>

                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-gray-500 hover:text-gray-900"
                    >
                      {item.name}
                    </a>
                  ))}
                </Popover.Group>
                <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
                  <a
                    href={heroContent?.heroButtonSrc}
                    className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:bg-gray-300 hover:text-black"
                  >
                    {heroContent?.heroButtonText}
                  </a>
                </div>
              </div>

              <Transition
                show={open}
                as={Fragment}
                enter="duration-200 ease-out"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="duration-100 ease-in"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Popover.Panel
                  focus
                  static
                  className="absolute z-30 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
                >
                  <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                    <div className="pt-5 pb-6 px-5">
                      <div className="flex items-center justify-between">
                        <span className="sr-only">Stevens Services Logo</span>

                        <a className="-ml-32" href="tel:8168247289">
                          <Logo />
                        </a>
                        <div className="-mr-2">
                          <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500">
                            <span className="sr-only">Close menu</span>
                            <XIcon className="h-6 w-6" aria-hidden="true" />
                          </Popover.Button>
                        </div>
                      </div>
                      <div className="mt-6">
                        <nav className="grid grid-cols-1 gap-7">
                          {solutions.map((item) => (
                            <a
                              key={item.name}
                              href={item.href}
                              className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                            >
                              <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-black text-white">
                                <item.icon
                                  className="h-6 w-6"
                                  aria-hidden="true"
                                />
                              </div>
                              <div className="ml-4 text-base font-medium text-gray-900">
                                {item.name}
                              </div>
                            </a>
                          ))}
                        </nav>
                      </div>
                    </div>
                    <div className="py-6 px-5">
                      <div className="grid grid-cols-2 gap-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className="text-base font-medium text-gray-900 hover:text-gray-700"
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                      <div className="mt-6">
                        <a
                          href={heroContent?.heroButtonSrc}
                          className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-black hover:text-black hover:bg-gray-300"
                        >
                          {heroContent?.heroButtonText}
                        </a>
                      </div>
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </header>

      <main>
        <div>
          {/* Hero card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src={heroContent?.heroImage?.src}
                    alt={heroContent?.heroImage?.alt}
                  />
                  <div className="absolute inset-0 bg-gray-600 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">
                      {heroContent?.heroTitle}
                    </span>
                    <span className="block text-indigo-100">
                      {heroContent?.heroSubtitle}
                    </span>
                  </h1>
                  <p className="mt-6 max-w-lg mx-auto text-center text-xl text-gray-200 sm:max-w-3xl">
                    {heroContent?.heroDescription}
                  </p>
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    {/* TODO - Add email/form solution */}
                    <a
                      href={heroContent?.heroButtonSrc}
                      className="flex uppercase items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-black bg-white shadow-sm hover:bg-black hover:text-white sm:px-8"
                    >
                      {heroContent?.heroButtonText}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
        <Feature />
        <About />
        <Carousel />
      </main>
      <Footer />
    </div>
  );
}
