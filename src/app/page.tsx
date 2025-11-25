"use client"

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroLogo from '@/components/sections/hero/HeroLogo';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterSocial from '@/components/sections/footer/FooterSocial';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Award, Star, MapPin, Home, Utensils, Sparkles, Zap, Heart, Calendar, Instagram, Facebook, Linkedin } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="small"
      sizing="medium"
      background="aurora"
      cardStyle="solid-bordered"
      primaryButtonStyle="diagonal-gradient"
      secondaryButtonStyle="minimal"
      showBlurBottom={false}
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Alpine Luxury Hotel"
          navItems={[
            { name: "Rooms", id: "rooms" },
            { name: "Amenities", id: "amenities" },
            { name: "Dining", id: "dining" },
            { name: "About", id: "about" },
            { name: "Contact", id: "contact" }
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogo
          logoText="Alpine Luxury"
          description="Experience timeless elegance in the heart of Switzerland. A premier destination for discerning travelers seeking alpine sophistication and unparalleled hospitality."
          buttons={[
            { text: "Reserve Your Stay", href: "contact" },
            { text: "Explore Rooms", href: "rooms" }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063847639-otklzo13.jpg"
          imageAlt="Swiss Alps luxury mountain resort"
          showDimOverlay={true}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="Welcome to Alpine Luxury"
          description="Nestled in the pristine Swiss Alps, our hotel represents the pinnacle of luxury hospitality. With over 50 years of heritage, we combine traditional Swiss charm with contemporary elegance."
          tag="Our Heritage"
          tagIcon={Award}
          textboxLayout="default"
          imagePosition="right"
          bulletPoints={[
            {
              title: "Award-Winning Service",
              description: "Dedicated concierge team available 24/7 for personalized experiences",
              icon: Star
            },
            {
              title: "Prime Alpine Location",
              description: "Strategically positioned with panoramic mountain views and easy access",
              icon: MapPin
            },
            {
              title: "Luxury Accommodations",
              description: "Meticulously designed suites featuring premium amenities and alpine aesthetics",
              icon: Home
            },
            {
              title: "Culinary Excellence",
              description: "Michelin-inspired dining featuring Swiss and international cuisine",
              icon: Utensils
            }
          ]}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063848418-sp5zriof.jpg"
          imageAlt="Alpine Luxury Hotel exterior"
          buttons={[
            { text: "Discover More", href: "amenities" }
          ]}
        />
      </div>

      <div id="rooms" data-section="rooms">
        <ProductCardTwo
          title="Luxury Suites & Rooms"
          description="Carefully curated accommodations designed for the most discerning guests"
          tag="Exclusive Stays"
          tagIcon={Sparkles}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          products={[
            {
              id: "1",
              brand: "Alpine Luxury",
              name: "Deluxe Mountain Suite",
              price: "CHF 850/night",
              rating: 5,
              reviewCount: "312 reviews",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063848987-084xkjl4.jpg",
              imageAlt: "Deluxe Mountain Suite"
            },
            {
              id: "2",
              brand: "Alpine Luxury",
              name: "Panoramic View Room",
              price: "CHF 650/night",
              rating: 5,
              reviewCount: "287 reviews",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063849714-0fwmfzvq.jpg",
              imageAlt: "Panoramic View Room"
            },
            {
              id: "3",
              brand: "Alpine Luxury",
              name: "Presidential Spa Suite",
              price: "CHF 1200/night",
              rating: 5,
              reviewCount: "156 reviews",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063850190-m9sazee4.jpg",
              imageAlt: "Presidential Spa Suite"
            }
          ]}
        />
      </div>

      <div id="amenities" data-section="amenities">
        <FeatureCardOne
          title="World-Class Amenities"
          description="Indulge in our comprehensive facilities designed for relaxation, wellness, and culinary delight"
          tag="Premium Facilities"
          tagIcon={Zap}
          textboxLayout="default"
          gridVariant="three-columns-all-equal-width"
          animationType="slide-up"
          features={[
            {
              title: "Alpine Spa & Wellness",
              description: "Full-service spa with thermal pools, massage therapy, and wellness treatments inspired by Swiss traditions",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063850856-jguhi59y.jpg"
            },
            {
              title: "Gourmet Restaurant",
              description: "Award-winning dining featuring Michelin-inspired cuisine with locally-sourced Alpine ingredients",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063851428-wb6lhxxu.jpg"
            },
            {
              title: "Elegant Lounge Bar",
              description: "Sophisticated bar with premium cocktails, fine wines, and panoramic mountain views",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063852083-gxjrghha.jpg"
            }
          ]}
        />
      </div>

      <div id="dining" data-section="dining">
        <FeatureCardOne
          title="Culinary Experiences"
          description="Savor exceptional cuisine crafted by our award-winning culinary team"
          tag="Dining Excellence"
          textboxLayout="default"
          gridVariant="asymmetric-60-wide-40-narrow"
          animationType="opacity"
          features={[
            {
              title: "Fine Dining Collection",
              description: "Experience haute cuisine with seasonal tasting menus, wine pairings, and personalized culinary experiences curated for each guest",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063852790-oco2eiv9.jpg"
            },
            {
              title: "Swiss Tradition Meets Modern",
              description: "Contemporary interpretations of classic Swiss and Alpine dishes",
              imageSrc: "/placeholders/placeholder1.webp"
            },
            {
              title: "Private Dining Available",
              description: "Intimate settings for special occasions and business gatherings",
              imageSrc: "/placeholders/placeholder1.webp"
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Guest Experiences"
          description="Hear from our valued guests about their unforgettable stays at Alpine Luxury"
          tag="Guest Reviews"
          tagIcon={Heart}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Catherine Laurent",
              role: "CEO, Luxury Travel Magazine",
              testimonial: "An absolutely extraordinary experience. The attention to detail, the stunning location, and the impeccable service made our stay truly unforgettable. We will return year after year.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063853361-xpo962qy.jpg",
              imageAlt: "Catherine Laurent"
            },
            {
              id: "2",
              name: "Marcus Bergström",
              role: "Director, International Finance",
              testimonial: "The perfect blend of luxury and comfort. Every aspect of our stay exceeded expectations. From the spa to the dining, simply world-class.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063853861-kuiwnd07.jpg",
              imageAlt: "Marcus Bergström"
            },
            {
              id: "3",
              name: "Sophie Rousseau",
              role: "Entrepreneur, Paris",
              testimonial: "An oasis of elegance. The mountain views are breathtaking, the rooms are impeccably designed, and the staff anticipates every need. Truly premium hospitality.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063854348-bxot5o56.jpg",
              imageAlt: "Sophie Rousseau"
            },
            {
              id: "4",
              name: "David Mueller",
              role: "Art Collector, Berlin",
              testimonial: "Swiss precision meets Italian passion. The hotel embodies the best of Alpine hospitality. A destination, not just a place to stay.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063854905-44fechjt.jpg",
              imageAlt: "David Mueller"
            },
            {
              id: "5",
              name: "Elena Santoro",
              role: "Fashion Designer, Milan",
              testimonial: "Exquisite in every detail. From the architecture to the culinary offerings, this hotel is a masterpiece. Worth every moment.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063855376-wommkp18.jpg",
              imageAlt: "Elena Santoro"
            },
            {
              id: "6",
              name: "James Richardson",
              role: "Executive, London",
              testimonial: "The epitome of luxury. Professional, elegant, and utterly refined. This is hospitality at its finest.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1764063855906-wk3t7cri.jpg",
              imageAlt: "James Richardson"
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Reserve Now"
          tagIcon={Calendar}
          title="Plan Your Alpine Escape"
          description="Contact our dedicated reservations team to book your luxurious stay. Let us craft an unforgettable experience tailored to your preferences."
          inputPlaceholder="Enter your email"
          buttonText="Request Information"
          termsText="We will contact you within 24 hours. Your privacy is our priority. We never share your information."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterSocial
          logoText="Alpine Luxury Hotel"
          copyrightText="© Alpine Luxury Hotel Switzerland. All rights reserved. 2025"
          columns={[
            {
              title: "About",
              items: [
                { label: "Our Story", href: "about" },
                { label: "Heritage", href: "about" },
                { label: "Awards", href: "#" }
              ]
            },
            {
              title: "Accommodations",
              items: [
                { label: "Rooms & Suites", href: "rooms" },
                { label: "Special Offers", href: "#" },
                { label: "Group Bookings", href: "contact" }
              ]
            },
            {
              title: "Dining & Wellness",
              items: [
                { label: "Restaurants", href: "dining" },
                { label: "Spa & Wellness", href: "amenities" },
                { label: "Events", href: "#" }
              ]
            },
            {
              title: "Guest Services",
              items: [
                { label: "Concierge", href: "contact" },
                { label: "Reservations", href: "contact" },
                { label: "FAQ", href: "#" }
              ]
            }
          ]}
          socialLinks={[
            { icon: Instagram, href: "https://instagram.com", ariaLabel: "Instagram" },
            { icon: Facebook, href: "https://facebook.com", ariaLabel: "Facebook" },
            { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn" }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}