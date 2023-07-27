import PropTypes from 'prop-types';
import React from 'react';

import TwitterIcon from './images/twitter.inline.svg';

const SliderItem = ({ text, authorName, authorTitle }) => (
  <figure className="flex flex-col items-center">
    <TwitterIcon
      className="h-[72px] w-[72px] xl:h-16 xl:w-16 md:h-12 md:w-12"
      width={72}
      height={72}
      aria-hidden
    />
    <blockquote className="mt-6 lg:mt-4 md:mt-2.5">
      <p
        className="with-link-primary max-w-[796px] text-[28px] font-light leading-snug tracking-tighter xl:max-w-[706px] xl:text-2xl lg:max-w-[584px] lg:text-xl md:text-lg"
        dangerouslySetInnerHTML={{ __html: text }}
      />
    </blockquote>
    <figcaption className="mt-5 text-lg leading-tight tracking-[-0.02em] text-white xl:text-base lg:mt-4 md:mt-2.5">
      {authorName} <cite className="font-light not-italic text-gray-new-70">– {authorTitle}</cite>
    </figcaption>
  </figure>
);

SliderItem.propTypes = {
  text: PropTypes.string.isRequired,
  authorName: PropTypes.string.isRequired,
  authorTitle: PropTypes.string.isRequired,
};

export default SliderItem;