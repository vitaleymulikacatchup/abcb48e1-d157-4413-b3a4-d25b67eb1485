use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import BentoMediaGallery from '@/components/bento/BentoMediaGallery/BentoMediaGallery';
import TextboxContentRich from '@/components/textbox/TextboxContentRich';
import ButtonTextUnderline from '@/components/buttons/ButtonTextUnderline';
import TestimonialCard from '@/components/testimonial/TestimonialCard';
import Form from '@/components/forms/Form';

const Home = () => {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'slide' }}>
      <section id="hero" className="bg-gradient-to-r from-[#FFEEF2] to-[#E9F9FF]">
        <BillboardHero title="Welcome to CarJoy!" subtitle="Your vibrant marketplace for cars."/>
      </section>

      <section id="inventory" className="bg-white">
        <BentoMediaGallery items={[
          { title: 'Car 1', image: '/images/placeholder1.avif' },
          { title: 'Car 2', image: '/images/placeholder2.avif' },
          { title: 'Car 3', image: '/images/placeholder3.avif' },
          { title: 'Car 4', image: '/images/placeholder4.avif' },
        ]} className="max-w-7xl mx-auto"/>
      </section>

      <section id="features" className="bg-soft-noise">
        <TextboxContentRich title={<h2 className="text-xl font-bold">Key Features</h2>} description={<p>Discover our buyer-centric features designed to ease your car shopping experience.</p>}>
          <div className="flex gap-4">
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">Vibrant Marketplace</h3>
              <p>Explore a colorful collection of vehicles.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">Easy Filtering</h3>
              <p>Find your dream car quickly with our filters.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">Competitive Pricing</h3>
              <p>Get the best deals on premium cars.</p>
            </div>
            <div className="bg-white p-4 rounded-lg shadow">
              <h3 className="font-bold">Fast Inquiries</h3>
              <p>Connect with sellers instantly.</p>
            </div>
          </div>
        </TextboxContentRich>
      </section>

      <section id="testimonials" className="bg-pattern">
        <h2 className="text-center text-4xl font-bold">Testimonials</h2>
        <div className="flex flex-col gap-4">
          <TestimonialCard quote="I found my dream car in no time!" author="John Doe" />
          <TestimonialCard quote="Super seamless experience and great pricing!" author="Jane Smith" />
        </div>
      </section>

      <section id="cta" className="bg-[#FFF0E0]">
        <TextboxContentRich title={<h2 className="text-xl font-bold">Join the Fun</h2>} description={<p>Sign up now for exclusive deals on your next car purchase!</p>}>
          <div className="flex gap-4">
            <ButtonTextUnderline text="Sign Up" onClick={() => alert('Registered!')} />
            <ButtonTextUnderline text="Learn More" onClick={() => console.log('Learn more')} />
          </div>
        </TextboxContentRich>
      </section>

      <section id="contact" className="bg-white">
        <Form />
      </section>
    </SiteThemeProvider>
  );
};

export default Home;
