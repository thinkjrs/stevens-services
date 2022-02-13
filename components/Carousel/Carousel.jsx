import { Rerousel } from 'rerousel';
import { useRef } from 'react';
import CallNowButton from '../CallNowButton/CallNowButton';

const workItems = [
  {
    src: 'https://res.cloudinary.com/thinkjrs-dev/image/upload/c_scale,w_1920/v1644717022/stevens-services/20200629_161041_resized_phijb9.jpg',
    alt: 'A new deck fortified and cleanly treated by the experts at Stevens Services.',
  },
  {
    src: 'https://res.cloudinary.com/thinkjrs-dev/image/upload/v1644717022/stevens-services/20200629_160502_resized_nucuoo.jpg',
    alt: 'Happy clients Karen & Cindy celebrate their new deck and landscaping!',
  },
  {
    src: 'https://res.cloudinary.com/thinkjrs-dev/image/upload/c_scale,w_1980/v1644717022/stevens-services/20200629_161036_resized_hcfqas.jpg',
    alt: "Karen & Cindy's landscaping by Stevens Services.",
  },
  {
    src: 'https://res.cloudinary.com/thinkjrs-dev/image/upload/c_scale,w_1980/v1644717294/stevens-services/20200520_095233_aalzqs.jpg',
    alt: 'A new deck and railing by the experts at Stevens Services.',
  },
  {
    src: 'https://res.cloudinary.com/thinkjrs-dev/image/upload/c_scale,w_1980/v1644717298/stevens-services/20200520_095220_fwecfs.jpg',
    alt: 'A new deck stairway by the best at Stevens Services.',
  },
];

export default function Carousel({}) {
  const workItem = useRef(null);

  return (
    <div className="text-center">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8 lg:py-20">
        {' '}
        <h1 className="text-3xl font-extrabold sm:text-4xl">
          We pride ourselves on <span className="italic">quality</span> work
        </h1>
        <div
          id="quality-work"
          className="px-4 md:px-20 lg:px-64 py-8 rounded-lg"
        >
          <Rerousel itemRef={workItem}>
            {workItems.map((props, index) => {
              return (
                <img
                  className="rounded-xl"
                  key={`${index}-work-item`}
                  height="100%"
                  width="800"
                  src={props?.src}
                  alt={props?.alt}
                  ref={workItem}
                />
              );
            })}
          </Rerousel>
          <CallNowButton
            buttonText="Call us now at 816-824-7289"
            buttonHref="tel:8168247289"
          />
        </div>
      </div>
    </div>
  );
}
