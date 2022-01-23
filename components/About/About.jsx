const aboutContent = {
  sectionTitle: 'Trusted by our customers for over a decade',
  sectionDescription:
    'Unparalleled quality of service has led to happy customers from all over. Our proof is in the pudding.',
  stats: {
    firstTextLabel: 'Years of service',
    firstDataLabel: '14',
    secondTextLabel: 'Satistfied customers',
    secondDataLabel: '1000+',
    thirdTextLabel: 'Snowstorms conquered',
    thirdDataLabel: '100%',
  },
};

export default function Example() {
  return (
    <div className="bg-black">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            {aboutContent?.sectionTitle}
          </h2>
          <p className="mt-3 text-xl text-indigo-200 sm:mt-4">
            {aboutContent?.sectionDescription}
          </p>
        </div>
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-3 sm:gap-8">
          <div className="flex flex-col">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
              {aboutContent?.stats.firstTextLabel}
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">
              {aboutContent?.stats?.firstDataLabel}
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
              {aboutContent?.stats?.secondTextLabel}
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">
              {aboutContent?.stats?.secondDataLabel}
            </dd>
          </div>
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-lg leading-6 font-medium text-indigo-200">
              {aboutContent?.stats?.thirdTextLabel}
            </dt>
            <dd className="order-1 text-5xl font-extrabold text-white">
              {aboutContent?.stats?.thirdDataLabel}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
