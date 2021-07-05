import {
  InboxIcon,
  SparklesIcon,
  ClipboardListIcon,
} from '@heroicons/react/outline';
import SVGQuote from '../SVGQuote/SVGQuote.jsx';

const featureContent = {
  lawnLandscapeTitle: `Lawn and Landscape Services`,
  lawnLandscapeDescription: `We offer turn key, flexible residencial and commercial lawn and landscape services. Keep your property perfectly maintained. Big or small, our team is ready to help.`,
  lawnLandscapeButtonText: `Let's chat. Call us at (816) 824-7289`,
  lawnLandscapeButtonSrc: `tel:8168247289`,
  landscapeSrc: '/images/IMG_8836.jpg',
  landscapeAlt: 'Simple landscaping done right by Stevens Services.',
  constructionSrc: '/images/20201029_115456_resized_avvnx7.jpg',
  constructionAlt:
    'New exterior deck construction by the Stevens Services team.',
  constructionTitle: 'Construction and Remodeling Services',
  constructionDescription: `We've seen it all and have the expertise to handle anything you can throw our way. We work with individuals, small businesses, large enterprises, and churches/non-profits throughout the Kansas City metropolitan area.`,
  snowIceTitle: 'Snow and Ice Services',
  snowIceDescription:
    'Snow removal, pre-treatment for ice storms, during-storm ice treatment, and post-storm cleanup. We are tough enough for anything mother nature can throw our way.',
  snowIceSrc: '/images/IMG_2411A_yctcla.jpg',
  snowIceAlt:
    'Our team has the tools, resources and experience to get handle any storm for any property.',
  testimonialSrc: null,
  testimonialAlt: null,
  testimonialText:
    'We are extremely happy with their work and have recommended them to multiple friends and family members!',
  testimonialName: 'Debbie Jones',
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
                  {featureContent?.lawnLandscapeTitle}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  {featureContent?.lawnLandscapeDescription}
                </p>
                <div className="mt-6">
                  <a
                    href={featureContent?.lawnLandscapeButtonSrc}
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:text-black hover:bg-gray-300"
                  >
                    {featureContent?.lawnLandscapeButtonText}
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-8 border-t border-gray-200 pt-6">
              <blockquote>
                <SVGQuote />
                <div>
                  <p className="pt-3 text-base italic text-gray-500">
                    {featureContent?.testimonialText}
                  </p>
                </div>
                <footer className="mt-3">
                  <div className="flex items-center space-x-3">
                    <div className="flex-shrink-0">
                      {featureContent?.testimonialSrc &&
                      featureContent?.testimonialAlt ? (
                        <img
                          className="h-6 w-6 rounded-full"
                          src={featureContent?.testimonialSrc}
                          alt={featureContent?.testimonialAlt}
                        />
                      ) : null}

                      <div className="text-base font-medium text-gray-700">
                        {featureContent?.testimonialName}
                      </div>
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
                    href={featureContent?.lawnLandscapeButtonSrc}
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:text-black hover:bg-gray-300"
                  >
                    {featureContent?.lawnLandscapeButtonText}
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
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            <div>
              <div>
                <span
                  id="snow-ice"
                  className="h-12 w-12 rounded-md flex items-center justify-center bg-black"
                >
                  <ClipboardListIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </span>
              </div>
              <div className="mt-6">
                <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                  {featureContent?.snowIceTitle}
                </h2>
                <p className="mt-4 text-lg text-gray-500">
                  {featureContent?.snowIceDescription}
                </p>
                <div className="mt-6">
                  <a
                    href={featureContent?.lawnLandscapeButtonSrc}
                    className="inline-flex px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-black hover:text-black hover:bg-gray-300"
                  >
                    {featureContent?.lawnLandscapeButtonText}
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
              <img
                className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                src={featureContent?.snowIceSrc}
                alt={featureContent?.snowIceAlt}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
