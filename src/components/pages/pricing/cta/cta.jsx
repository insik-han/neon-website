import Image from 'next/image';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import links from 'constants/links';

const CTA = () => (
    <section className="safe-paddings pt-16">
      <Container className="grid grid-cols-12 items-center gap-4" size="md">
        <div className="col-span-4 col-start-2 mb-20 xl:col-span-5 xl:col-start-1 lg:col-span-full">
          <h2 className="nowrap text-[56px] font-medium leading-none tracking-tighter 2xl:text-[44px] 2xl:leading-snug xl:text-4xl lg:text-center lg:text-[36px] lg:leading-tight">
            Still have a <span className="text-primary-1">question?</span>
          </h2>
          <p className="mt-4 text-lg font-light leading-snug 2xl:mt-5 xl:text-base lg:text-center">
            Interested in increasing your free tier limits or learning about pricing? Complete the
            form below to get in touch with our Sales team
          </p>
          <Button
            className="mt-4 !py-5 !text-lg tracking-tight lg:mx-auto lg:block lg:w-40"
            to={links.contactSales}
            theme="primary"
            size="sm"
          >
            Talk to sales
          </Button>
        </div>
        <div className="col-span-7 col-start-6 lg:col-span-full">
          <Image
            className="mx-auto"
            src="/images/pages/pricing/cta-image.png"
            width={842}
            height={538}
            alt=""
          />
        </div>
      </Container>
    </section>
  );

export default CTA;
