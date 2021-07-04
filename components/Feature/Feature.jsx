import { InboxIcon, SparklesIcon } from '@heroicons/react/outline';

const featureContent = {
  sectionTitle: `Call us. Then relax and sit back.`,
  sectionDescription: `We offer turn key, flexible solutions that have worked for customers for over a decade. Let us handle your latest lawn care, landscaping, snow removal, de-icing, new construction, old construction, or renovation needs. With no project too big or small, we have the team to back it.`,
  sectionButtonText: `Let's chat. Call us at (816) 824-7289`,
  sectionButtonSrc: `tel:8168247289`,
  landscapeSrc: '/images/IMG_8836.jpg',
  landscapeAlt: 'Landscaping done right by Stevens Services.',
  constructionSrc: '/images/20201029_115456_resized_avvnx7.jpg',
  constructionAlt:
    'New exterior deck construction by the Stevens Services team.',
  constructionTitle: 'No job is too big or small',
  constructionDescription: `We've seen it all and have the expertise to handle anything you can throw our way. We work with individuals, small businesses, large enterprises, and churches throughout the Grerater Kansas City area.`,
  testimonialSrc: '',
  testimonialAlt: '',
  testimonialName: 'Marcia Hill, Digital Marketing Manager',
};
export default function Feature() {
  return (
    <div className="relative bg-white pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span
                  id="lawn-landscape"
                  className="h-12 w-12 rounded-md flex items-center justify-center bg-black"
                >
                  <InboxIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {featureContent?.sectionTitle}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  {featureContent?.sectionDescription}
                </p>
                <div className="mt-6">
                  <a
                    href={featureContent?.sectionButtonSrc}
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:text-black hover:bg-gray-300"
                  >
                    {featureContent?.sectionButtonText}
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <div>
                  <p className="text-base text-gray-500">
                    &ldquo;Cras velit quis eros eget rhoncus lacus ultrices sed
                    diam. Sit orci risus aenean curabitur donec aliquet. Mi
                    venenatis in euismod ut.&rdquo;
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      <img
                        className="h-6 w-6 rounded-full"
                        src={featureContent?.testimonialSrc}
                        alt={featureContent?.testimonialAlt}
                      />
                    </div>
                    <div className="text-base font-medium text-gray-700"></div>
                  </div>
                </footer>
              </blockquote>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                src={featureContent?.landscapeSrc}
                alt={featureContent?.landscapeAlt}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span
                  id="construction-remodeling"
                  className="h-12 w-12 rounded-md flex items-center justify-center bg-black"
                >
                  <SparklesIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {featureContent?.constructionTitle}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  {featureContent?.constructionDescription}
                </p>
                <div className="mt-6">
                  <a
                    href={featureContent?.sectionButtonSrc}
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:text-black hover:bg-gray-300"
                  >
                    {featureContent?.sectionButtonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={featureContent?.constructionSrc}
                alt={featureContent?.constructionAlt}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
