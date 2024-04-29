import { MailIcon, PhoneCall, HomeIcon } from 'lucide-react';

// components
import Form from '@/components/Form';

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <h1 className="h1 max-w-lg mb-8">Let's Work Together.</h1>
            <p className="subtitle max-w-[480px]">
              I'm open to all opportunities.
            </p>
          </div>

          {/* illustration */}
          <div className="hidden xl:flex w-full bg-contact_illustration_light dark:bg-contact_illustration_dark bg-contain bg-top bg-no-repeat">
            illustration
          </div>
        </div>

        {/* info text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div>abhirupkumar2003@gmail.com</div>
            </div>

            {/* address */}
            <div className="flex items-center gap-x-8">
              <HomeIcon size={18} className="text-primary" />
              <div>Ganganagar, Kol-700132, WB, India</div>
            </div>

            {/* phone */}
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div>+91 700 388 9430</div>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
};

export default Contact;
