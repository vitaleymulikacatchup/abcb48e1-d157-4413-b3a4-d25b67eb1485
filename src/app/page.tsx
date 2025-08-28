"use client"
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import BentoMediaGallery from '@/components/bento/BentoMediaGallery/BentoMediaGallery';
import TextboxContentRich from '@/components/textbox/TextboxContentRich';
import ButtonTextUnderline from '@/components/buttons/ButtonTextUnderline';

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
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="italic">"I found my dream car in no time!"</p>
            <p className="font-bold">- John Doe</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow">
            <p className="italic">"Super seamless experience and great pricing!"</p>
            <p className="font-bold">- Jane Smith</p>
          </div>
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
        <h2 className="text-2xl font-bold">Contact Us</h2>
        <p>If you have any questions, don't hesitate to reach out!</p>
      </section>
    </SiteThemeProvider>
  );
};

export default Home;