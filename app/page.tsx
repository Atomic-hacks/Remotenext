//import FeaturedJobs from '@/components/home/FeaturedJobs'
import FAQPage from '@/components/home/Faq'
import { HeroParallaxDemo } from '@/components/home/FeaturedJobs'
import Hero from '@/components/home/Hero'
import JobCategories from '@/components/home/JobCategories'
import { AnimatedTestimonialsDemo } from '@/components/home/TestimonialSlider'
import WhyChooseRemoteNext from '@/components/home/WhyChoose'
import LogoCarouselPreview from '@/components/ui/LogoCarousel'
//import JobCard from '@/components/home/JobCard'
//import JobCategories from '@/components/home/JobCategories'
//import Newsletter from '@/components/home/Newsletter'
//import PremiumServices from '@/components/home/PremiumServices'
//import TestimonialSlider from '@/components/home/TestimonialSlider'
import React from 'react'

const page = () => {
  return (
    <div className='relative '>
      <Hero/>
     <LogoCarouselPreview/>
     <HeroParallaxDemo/>
     <WhyChooseRemoteNext/>
     <AnimatedTestimonialsDemo />
     <JobCategories />
     <FAQPage />
    </div>
  )
}

export default page
