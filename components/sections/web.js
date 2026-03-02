"use client";

import React from 'react'
import { motion } from 'motion/react'
import {
  IconSearch,
  IconMapPin,
  IconBrandGoogle,
  IconBrandInstagram,
  IconTargetArrow,
  IconClipboardList,
  IconPalette,
  IconCode,
  IconTestPipe,
  IconRocket
} from '@tabler/icons-react'

function WebDevSection() {
  const digitalServices = [
    {
      icon: IconSearch,
      title: 'Search Engine Optimization (SEO)',
      description: 'Our SEO services help websites rank higher on search engines and attract targeted organic traffic. We use on-page SEO, technical SEO, and content optimization strategies to improve rankings and visibility.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      link: '/seo'
    },
    {
      icon: IconMapPin,
      title: 'Google Business Profile (GMB) Optimization',
      description: 'Our GMB optimization services help businesses improve local search visibility and attract more customers. We optimize business information, service details, images, and regular updates to improve local rankings.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      link: '/digital-marketing/google-business-profile-optimization'
    },
    {
      icon: IconBrandGoogle,
      title: 'Google Ads Management',
      description: 'Our Google Ads management services help businesses generate instant leads through targeted advertising campaigns. We manage keyword research, campaign setup, optimization, and performance tracking.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      link: '/digital-marketing/google-ads-management'
    },
    {
      icon: IconBrandInstagram,
      title: 'Social Media Marketing',
      description: 'Our social media marketing services help businesses build brand awareness and engage customers through popular social media platforms.',
      color: 'text-pink-600',
      bgColor: 'bg-pink-50',
      link: '/social-media-marketing'
    },
    {
      icon: IconTargetArrow,
      title: 'Lead Generation Services',
      description: 'We combine SEO, Google Ads, Google Business Profile optimization, and social media marketing strategies to attract potential customers and increase business inquiries.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      link: '/digital-marketing/lead-generation-services'
    }
  ];

  const processSteps = [
    {
      step: '01',
      icon: IconClipboardList,
      title: 'Planning',
      description: 'We analyze business requirements and create a strategy for business website development that ensures strong performance and search engine visibility.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200'
    },
    {
      step: '02',
      icon: IconPalette,
      title: 'Design',
      description: 'We create modern website design layouts and responsive website design focused on user experience and engagement.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200'
    },
    {
      step: '03',
      icon: IconCode,
      title: 'Development',
      description: 'Our developers build fast and secure websites using SEO friendly website development techniques for better search engine rankings.',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200'
    },
    {
      step: '04',
      icon: IconTestPipe,
      title: 'Testing',
      description: 'We perform complete website testing and optimization to ensure smooth performance across all devices and browsers.',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200'
    },
    {
      step: '05',
      icon: IconRocket,
      title: 'Launch',
      description: 'Your professional business website is launched after final optimization to ensure maximum performance and search engine readiness.',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      borderColor: 'border-red-200'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className='py-10 px-4 md:px-8 lg:px-16'>
      <div className='max-w-7xl mx-auto'>

        {/* Digital Marketing Services */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'
          >
            Digital Marketing
          </motion.span>

          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
            Complete Digital Marketing Company
          </h2>

          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            Digitalsolution360 is a professional digital marketing company providing complete online marketing solutions. After building your website, we help your business grow with strategic digital marketing services designed to increase visibility and leads.
          </p>
        </motion.div>

        {/* Digital Marketing Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24'
        >
          {digitalServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.a
                key={index}
                href={service.link}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className='group'
              >
                <div className='bg-white border border-gray-200 rounded-2xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 relative overflow-hidden'>
                  <div className={`${service.bgColor} w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`${service.color} w-7 h-7`} stroke={1.5} />
                  </div>
                  <h3 className='text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300'>
                    {service.title}
                  </h3>
                  <p className='text-gray-600 leading-relaxed text-sm'>
                    {service.description}
                  </p>
                </div>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Development Process */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className='inline-block bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'
          >
            Our Process
          </motion.span>

          <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6'>
            Our Website Development Process
          </h2>

          <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
            Our structured website development process ensures that every professional business website is developed efficiently with a focus on performance, user experience, and search engine optimization.
          </p>
        </motion.div>

        {/* Process Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6'
        >
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className='relative'
              >
                <div className={`bg-white border-2 ${step.borderColor} rounded-2xl p-6 h-full text-center shadow-lg hover:shadow-2xl transition-all duration-300`}>
                  {/* Step Number */}
                  <div className={`${step.bgColor} ${step.color} text-sm font-bold px-3 py-1 rounded-full inline-block mb-4`}>
                    Step {step.step}
                  </div>

                  {/* Icon */}
                  <div className={`${step.bgColor} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <Icon className={`${step.color} w-8 h-8`} stroke={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className='text-xl font-bold text-gray-900 mb-3'>
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className='text-gray-600 text-sm leading-relaxed'>
                    {step.description}
                  </p>
                </div>

                {/* Connector Arrow (hidden on last item and mobile) */}
                {index < processSteps.length - 1 && (
                  <div className='hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10'>
                    <div className='w-6 h-6 text-gray-300'>
                      <svg viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2'>
                        <path d='M9 5l7 7-7 7' />
                      </svg>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className='text-center mt-16'
        >
          <p className='text-lg text-gray-600 mb-6'>
            Ready to build a professional website that generates leads and grows your brand?
          </p>
          <a
            href='/contact-us'
            className='inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:scale-105 hover:shadow-xl'
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default WebDevSection