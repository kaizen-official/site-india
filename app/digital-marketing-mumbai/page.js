"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import {
    IconMapPin,
    IconSpeakerphone,
    IconBrandFacebook,
    IconBrandInstagram,
    IconBrandGoogle,
    IconMail,
    IconPhone,
    IconCheck,
    IconArrowRight,
    IconUsers,
    IconTrendingUp,
    IconShieldCheck,
    IconTarget,
    IconRocket,
    IconChartBar,
    IconBrandYoutube,
    IconAd,
    IconSeo,
    IconWriting
} from '@tabler/icons-react'

export default function DigitalMarketingMumbaiPage() {
    const cityName = "Mumbai";
    const stateName = "Maharashtra";

    const benefits = [
        {
            icon: IconTarget,
            title: 'Targeted Reach',
            description: `Reach your ideal customers in ${cityName} with precision targeting across digital channels.`
        },
        {
            icon: IconChartBar,
            title: 'Measurable Results',
            description: 'Track every campaign with detailed analytics and transparent reporting on ROI.'
        },
        {
            icon: IconTrendingUp,
            title: 'Brand Growth',
            description: 'Build brand awareness and recognition across digital platforms in your target market.'
        },
        {
            icon: IconUsers,
            title: 'Audience Engagement',
            description: 'Connect with your audience through engaging content and meaningful interactions.'
        },
        {
            icon: IconRocket,
            title: 'Faster Results',
            description: 'See quick wins with paid advertising while building long-term organic presence.'
        },
        {
            icon: IconShieldCheck,
            title: 'Cost-Effective',
            description: 'Get better ROI compared to traditional marketing with optimized digital campaigns.'
        }
    ];

    const services = [
        {
            icon: IconBrandGoogle,
            title: 'Google Ads (PPC)',
            description: 'Drive immediate traffic and leads with targeted pay-per-click advertising.',
            features: ['Search ads', 'Display ads', 'Shopping ads', 'Remarketing']
        },
        {
            icon: IconBrandFacebook,
            title: 'Social Media Marketing',
            description: 'Build brand presence and engage audiences across social platforms.',
            features: ['Content creation', 'Community management', 'Paid social ads', 'Influencer marketing']
        },
        {
            icon: IconSeo,
            title: 'Search Engine Optimization',
            description: 'Improve organic visibility and drive sustainable traffic growth.',
            features: ['On-page SEO', 'Off-page SEO', 'Technical SEO', 'Local SEO']
        },
        {
            icon: IconWriting,
            title: 'Content Marketing',
            description: 'Attract and engage audiences with valuable, relevant content.',
            features: ['Blog writing', 'Video content', 'Infographics', 'E-books']
        },
        {
            icon: IconMail,
            title: 'Email Marketing',
            description: 'Nurture leads and retain customers with targeted email campaigns.',
            features: ['Newsletter design', 'Automation flows', 'List segmentation', 'A/B testing']
        },
        {
            icon: IconBrandYoutube,
            title: 'Video Marketing',
            description: 'Engage audiences with compelling video content across platforms.',
            features: ['Video production', 'YouTube marketing', 'Video ads', 'Live streaming']
        }
    ];

    const stats = [
        { value: '4.5B', label: 'internet users globally' },
        { value: '63%', label: 'of shopping begins online' },
        { value: '49%', label: 'look for local business daily' },
        { value: '200%', label: 'average ROI from email marketing' }
    ];

    const channels = [
        { name: 'Google', icon: IconBrandGoogle, color: 'text-red-500' },
        { name: 'Facebook', icon: IconBrandFacebook, color: 'text-blue-600' },
        { name: 'Instagram', icon: IconBrandInstagram, color: 'text-pink-500' },
        { name: 'YouTube', icon: IconBrandYoutube, color: 'text-red-600' },
        { name: 'Email', icon: IconMail, color: 'text-orange-500' },
        { name: 'Display', icon: IconAd, color: 'text-purple-500' }
    ];

    const process = [
        {
            step: '01',
            title: 'Discovery',
            description: 'Understanding your business, goals, target audience, and competitive landscape.'
        },
        {
            step: '02',
            title: 'Strategy',
            description: 'Developing a comprehensive digital marketing strategy tailored to your objectives.'
        },
        {
            step: '03',
            title: 'Execution',
            description: 'Implementing campaigns across selected channels with precision and creativity.'
        },
        {
            step: '04',
            title: 'Optimization',
            description: 'Continuous monitoring, testing, and optimization for maximum ROI.'
        }
    ];

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[60vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-16 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-orange-900/95 via-orange-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1557838923-2985c318be48?w=1920&q=80'
                        alt={`Digital Marketing in ${cityName}`}
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='max-w-7xl mx-auto relative z-20 w-full'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Link
                            href='/market-we-serve/marketing'
                            className='inline-flex items-center gap-2 text-orange-200 hover:text-white mb-4 mr-4 transition-colors'
                        >
                            <IconArrowRight className='w-4 h-4 rotate-180' />
                            Back to All Locations
                        </Link>

                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-white/30'
                        >
                            <IconMapPin className='w-4 h-4' />
                            {cityName}, {stateName}
                        </motion.span>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>
                            Digital Marketing in {cityName}
                        </h1>

                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                            Full-service digital marketing agency in {cityName}. We help businesses grow their online presence, generate leads, and drive revenue through strategic digital marketing campaigns.
                        </p>

                        <div className='flex flex-wrap gap-4'>
                            <Link
                                href='/contact-us'
                                className='inline-flex items-center gap-2 bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105'
                            >
                                Get Free Strategy Call
                                <IconArrowRight className='w-5 h-5' />
                            </Link>
                            <a
                                href='tel:+919876543210'
                                className='inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300'
                            >
                                <IconPhone className='w-5 h-5' />
                                Call Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className='py-12 px-4 md:px-8 lg:px-16 bg-orange-600'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-2 md:grid-cols-4 gap-6'>
                        {stats.map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='text-center'
                            >
                                <div className='text-4xl md:text-5xl font-bold text-white mb-2'>{stat.value}</div>
                                <div className='text-orange-100 text-sm'>{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className='py-20 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className='text-center mb-16'
                    >
                        <span className='inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>
                            <IconSpeakerphone className='w-4 h-4' />
                            Why Digital Marketing
                        </span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                            Benefits of Digital Marketing in {cityName}
                        </h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                            In {cityName}'s dynamic business environment, digital marketing is essential for reaching and engaging your target audience effectively.
                        </p>
                    </motion.div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {benefits.map((benefit, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300'
                            >
                                <div className='w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4'>
                                    <benefit.icon className='w-7 h-7 text-orange-600' />
                                </div>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>{benefit.title}</h3>
                                <p className='text-gray-600'>{benefit.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className='py-20 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className='text-center mb-16'
                    >
                        <span className='inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>
                            <IconTarget className='w-4 h-4' />
                            Our Services
                        </span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                            Digital Marketing Services in {cityName}
                        </h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                            Comprehensive digital marketing solutions to help your business grow online.
                        </p>
                    </motion.div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300'
                            >
                                <div className='w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-4'>
                                    <service.icon className='w-7 h-7 text-orange-600' />
                                </div>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>{service.title}</h3>
                                <p className='text-gray-600 mb-4'>{service.description}</p>
                                <ul className='space-y-2'>
                                    {service.features.map((feature, fIndex) => (
                                        <li key={fIndex} className='flex items-center gap-2 text-gray-700'>
                                            <IconCheck className='w-5 h-5 text-orange-600 shrink-0' />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Channels Section */}
            <section className='py-20 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className='text-center mb-16'
                    >
                        <span className='inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>
                            <IconAd className='w-4 h-4' />
                            Marketing Channels
                        </span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                            Channels We Master
                        </h2>
                    </motion.div>

                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
                        {channels.map((channel, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center'
                            >
                                <div className='w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-3'>
                                    <channel.icon className={`w-6 h-6 ${channel.color}`} />
                                </div>
                                <h3 className='font-bold text-gray-900'>{channel.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process Section */}
            <section className='py-20 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className='text-center mb-16'
                    >
                        <span className='inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>
                            <IconRocket className='w-4 h-4' />
                            Our Process
                        </span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                            How We Deliver Results
                        </h2>
                    </motion.div>

                    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-8'>
                        {process.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='text-center'
                            >
                                <div className='text-6xl font-bold text-orange-200 mb-4'>{step.step}</div>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>{step.title}</h3>
                                <p className='text-gray-600'>{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-20 px-4 md:px-8 lg:px-16 bg-orange-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                            Ready to Grow Your Business in {cityName}?
                        </h2>
                        <p className='text-xl text-orange-100 mb-8'>
                            Get a free digital marketing strategy session and discover how we can help you achieve your goals.
                        </p>
                        <div className='flex flex-wrap justify-center gap-4'>
                            <Link
                                href='/contact-us'
                                className='inline-flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                            >
                                Get Free Strategy Call
                                <IconArrowRight className='w-5 h-5' />
                            </Link>
                            <a
                                href='tel:+919876543210'
                                className='inline-flex items-center gap-2 bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-all duration-300'
                            >
                                <IconPhone className='w-5 h-5' />
                                Call Us Now
                            </a>
                        </div>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    )
}
