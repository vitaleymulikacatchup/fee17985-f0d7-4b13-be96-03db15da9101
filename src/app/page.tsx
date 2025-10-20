use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Cog, Users } from "lucide-react";

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/34326374/pexels-photo-34326374.png?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a hand holding a coffee cup beside a laptop on a desk, indoors."},
  {"id":"about-image","url":"https://images.pexels.com/photos/6774432/pexels-photo-6774432.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Three colleagues brainstorming with laptops in a well-lit office."},
  {"id":"feature-image-1","url":"https://images.pexels.com/photos/12904960/pexels-photo-12904960.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Two women exploring virtual reality indoors with a VR headset."},
  {"id":"feature-image-2","url":"https://images.pexels.com/photos/34317747/pexels-photo-34317747.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Desk"},
  {"id":"socialProof-logo-1","url":"https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Interior view of Microsoft office with logo on wooden wall in Brussels, Belgium."},
  {"id":"socialProof-logo-2","url":"https://images.pexels.com/photos/544295/pexels-photo-544295.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a black and white Apple logo on a desktop screen with a modern minimalist design."},
  {"id":"socialProof-logo-3","url":"https://images.pexels.com/photos/218717/pexels-photo-218717.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of a tablet displaying Google's search screen, emphasizing technology and internet browsing."},
  {"id":"socialProof-logo-4","url":"https://images.pexels.com/photos/4560039/pexels-photo-4560039.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up of the Amazon shopping app icon on a smartphone screen. Ideal for online shopping and technology themes."},
  {"id":"socialProof-logo-5","url":"https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Close-up view of the Facebook app logo on a digital screen with blurred background."},
  {"id":"socialProof-logo-6","url":"https://images.pexels.com/photos/5207507/pexels-photo-5207507.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Detailed image of a remote control featuring streaming service buttons."},
  {"id":"socialProof-logo-7","url":"https://images.pexels.com/photos/11180937/pexels-photo-11180937.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Modern 3D rendered icon symbolizing the letter P with a glowing effect on a green background."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Home", id: "home" },
            { name: "About", id: "about" },
            { name: "Services", id: "services" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Tech Innovators"
        />
      </div>
      <div id="hero" data-section="hero">
        <HeroSplit
          title="Innovating Your IT Solutions"
          description="Elevate your business with cutting-edge technology and services tailored for success."
          imageSrc={assetMap.find(a => a.id === "hero-image")?.url ?? "/public/images/placeholder.webp"}
          imageAlt={assetMap.find(a => a.id === "hero-image")?.alt ?? "team working on tech projects"}
          buttons={[
            { text: "Get Started", href: "about" },
            { text: "Learn More", href: "services" }
          ]}
        />
      </div>
      <div id="about" data-section="about">
        <SplitAbout
          title="About Tech Innovators"
          description="We are committed to delivering top-notch technology solutions that drive innovation."
          bulletPoints={[
            { title: "Expert Team", description: "Our talented team of specialists is dedicated to your success.", icon: Users },
            { title: "Custom Solutions", description: "We offer bespoke solutions tailored to meet your unique needs.", icon: Cog }
          ]}
          imageSrc={assetMap.find(a => a.id === "about-image")?.url ?? "/public/images/placeholder.webp"}
          imagePosition="left"
        />
      </div>
      <div id="feature" data-section="feature">
        <FeatureCardOne
          title="Our Core Features"
          description="Explore the powerful features that set us apart in the industry."
          features={[
            { title: "Advanced Analytics", description: "Gain insights with our state-of-the-art analytics tools.", imageSrc: assetMap.find(a => a.id === "feature-image-1")?.url ?? "/public/images/placeholder.webp" },
            { title: "Robust Security", description: "Protect your data with our leading security solutions.", imageSrc: assetMap.find(a => a.id === "feature-image-2")?.url ?? "/public/images/placeholder.webp" }
          ]}
        />
      </div>
      <div id="socialProof" data-section="socialProof">
        <SocialProofOne
          logos={[
            { url: assetMap.find(a => a.id === "socialProof-logo-1")?.url ?? "/public/images/placeholder.webp", alt: assetMap.find(a => a.id === "socialProof-logo-1")?.alt ?? "Microsoft logo" },
            { url: assetMap.find(a => a.id === "socialProof-logo-2")?.url ?? "/public/images/placeholder.webp", alt: assetMap.find(a => a.id === "socialProof-logo-2")?.alt ?? "Apple logo" },
            { url: assetMap.find(a => a.id === "socialProof-logo-3")?.url ?? "/public/images/placeholder.webp", alt: assetMap.find(a => a.id === "socialProof-logo-3")?.alt ?? "Google logo" },
            { url: assetMap.find(a => a.id === "socialProof-logo-4")?.url ?? "/public/images/placeholder.webp", alt: assetMap.find(a => a.id === "socialProof-logo-4")?.alt ?? "Amazon logo" },
            { url: assetMap.find(a => a.id === "socialProof-logo-5")?.url ?? "/public/images/placeholder.webp", alt: assetMap.find(a => a.id === "socialProof-logo-5")?.alt ?? "Facebook logo" },
            { url: assetMap.find(a => a.id === "socialProof-logo-6")?.url ?? "/public/images/placeholder.webp", alt: assetMap.find(a => a.id === "socialProof-logo-6")?.alt ?? "Netflix logo" },
            { url: assetMap.find(a => a.id === "socialProof-logo-7")?.url ?? "/public/images/placeholder.webp", alt: assetMap.find(a => a.id === "socialProof-logo-7")?.alt ?? "Adobe logo" }            
          ]}
          title="Trusted by Leading Companies"
          description="Join a network of successful businesses that trust us."
        />
      </div>
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Contact Us"
          title="Get in Touch"
          description="We're here to help and answer any questions you might have."
          inputPlaceholder="Your email address"
          buttonText="Submit"
          termsText="We respect your privacy. Unsubscribe at any time."
        />
      </div>
      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          columns={[
            { items: [{ label: "Features", href: "features" }] },
            { items: [{ label: "About", href: "about" }] }
          ]}
          logoText="Tech Innovators"
        />
      </div>
    </ThemeProvider>
  );
}
