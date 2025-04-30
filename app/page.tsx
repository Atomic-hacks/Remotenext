import FeaturedJobs from '@/components/home/FeaturedJobs'
import Hero from '@/components/home/Hero'
import JobCard from '@/components/home/JobCard'
import JobCategories from '@/components/home/JobCategories'
import Newsletter from '@/components/home/Newsletter'
import PremiumServices from '@/components/home/PremiumServices'
import TestimonialSlider from '@/components/home/TestimonialSlider'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero/>
      <FeaturedJobs/>
      <JobCategories/>
      <PremiumServices/>
      <TestimonialSlider/>
      <Newsletter/>
    </div>
  )
}

export default page
