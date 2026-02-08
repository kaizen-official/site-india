"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import {
    IconMapPin,
    IconSearch,
    IconChartLine,
    IconLink,
    IconFileText,
    IconDeviceAnalytics,
    IconPhone,
    IconCheck,
    IconArrowRight,
    IconSeo,
    IconUsers,
    IconTrendingUp,
    IconShieldCheck,
    IconTarget,
    IconRocket,
    IconCode,
    IconWorld
} from '@tabler/icons-react'

export default function SEOMumbaiPage() {
    const cityName = "Mumbai";
    const stateName = "Maharashtra";

    const benefits = [
        {
            icon: IconTrendingUp,
            title: 'Increased Organic Traffic',
            description: `Drive more qualified visitors to your website from ${cityName} and surrounding areas through improved search rankings.`
        },
        {
            icon: IconTarget,
            title: 'Targeted Local Visibility',
            description: `Reach customers in ${cityName} actively searching for your products or services with precision targeting.`
        },
        {
            icon: IconChartLine,
            title: 'Higher Conversion Rates',
            description: 'SEO traffic converts better because users are actively searching for what you offer.'
        },
        {
            icon: IconShieldCheck,
            title: 'Build Brand Authority',
            description: 'Establish your business as a trusted authority in your industry with consistent top rankings.'
        },
        {
            icon: IconRocket,
            title: 'Long-Term ROI',
            description: 'Unlike paid ads, SEO delivers sustainable results that continue to generate traffic over time.'
        },
        {
            icon: IconUsers,
            title: 'Competitive Advantage',
            description: `Stay ahead of competitors in ${cityName}'s crowded market with strategic SEO optimization.`
        }
    ];

    const services = [
        {
            title: 'Technical SEO',
            description: 'Optimize your website\'s technical foundation for better crawling and indexing.',
            features: ['Site speed optimization', 'Mobile responsiveness', 'Schema markup', 'Core Web Vitals']
        },
        {
            title: 'On-Page SEO',
            description: 'Optimize individual pages to rank higher and earn more relevant traffic.',
            features: ['Keyword optimization', 'Meta tags', 'Content optimization', 'Internal linking']
        },
        {
            title: 'Off-Page SEO',
            description: 'Build authority and trust through strategic link building and brand mentions.',
            features: ['Link building', 'Guest posting', 'Brand mentions', 'Social signals']
        },
        {
            title: 'Local SEO',
            description: `Dominate local search results in ${cityName} and attract nearby customers.`,
            features: ['Google My Business', 'Local citations', 'Review management', 'Local keywords']
        },
        {
            title: 'Content Strategy',
            description: 'Create valuable content that attracts, engages, and converts your target audience.',
            features: ['Content planning', 'Blog writing', 'Content optimization', 'Content promotion']
        },
        {
            title: 'SEO Analytics',
            description: 'Track, measure, and optimize your SEO performance with detailed insights.',
            features: ['Rank tracking', 'Traffic analysis', 'Competitor monitoring', 'ROI reporting']
        }
    ];

    const stats = [
        { value: '93%', label: 'of online experiences begin with a search engine' },
        { value: '75%', label: 'of users never scroll past the first page' },
        { value: '70%', label: 'of marketers see SEO as more effective than PPC' },
        { value: '14.6%', label: 'close rate for SEO leads vs 1.7% for outbound' }
    ];

    const process = [
        {
            step: '01',
            title: 'Website Audit',
            description: 'Comprehensive analysis of your website\'s current SEO health and opportunities.'
        },
        {
            step: '02',
            title: 'Strategy Development',
            description: 'Custom SEO strategy based on your business goals and competitive landscape.'
        },
        {
            step: '03',
            title: 'Implementation',
            description: 'Execute on-page, off-page, and technical optimizations systematically.'
        },
        {
            step: '04',
            title: 'Monitor & Optimize',
            description: 'Continuous monitoring, reporting, and strategy refinement for best results.'
        }
    ];

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[60vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-16 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-green-900/95 via-green-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1567521464027-f127ff144326?w=1920&q=80'
                        alt={`SEO Services in ${cityName}`}
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
                            href='/market-we-serve/seo'
                            className='inline-flex items-center gap-2 text-green-200 hover:text-white mb-4 mr-4 transition-colors'
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
                            SEO Services in {cityName}
                        </h1>

                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                            Boost your online visibility and drive organic traffic with our expert SEO services in {cityName}. We help businesses rank higher, attract more customers, and grow revenue sustainably.
                        </p>

                        <div className='flex flex-wrap gap-4'>
                            <Link
                                href='/contact-us'
                                className='inline-flex items-center gap-2 bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105'
                            >
                                Get Free SEO Audit
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
            <section className='py-12 px-4 md:px-8 lg:px-16 bg-green-600'>
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
                                <div className='text-green-100 text-sm'>{stat.label}</div>
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
                        <span className='inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>
                            <IconSeo className='w-4 h-4' />
                            Why SEO Matters
                        </span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                            Benefits of SEO for {cityName} Businesses
                        </h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                            In {cityName}'s competitive digital landscape, SEO is essential for businesses looking to establish a strong online presence and attract qualified leads.
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
                                <div className='w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-4'>
                                    <benefit.icon className='w-7 h-7 text-green-600' />
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
                        <span className='inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>
                            <IconSearch className='w-4 h-4' />
                            Our Services
                        </span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                            Comprehensive SEO Services in {cityName}
                        </h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                            End-to-end SEO solutions designed to improve your search rankings and drive sustainable organic growth.
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
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>{service.title}</h3>
                                <p className='text-gray-600 mb-4'>{service.description}</p>
                                <ul className='space-y-2'>
                                    {service.features.map((feature, fIndex) => (
                                        <li key={fIndex} className='flex items-center gap-2 text-gray-700'>
                                            <IconCheck className='w-5 h-5 text-green-600 shrink-0' />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
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
                        <span className='inline-flex items-center gap-2 bg-green-100 text-green-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>
                            <IconRocket className='w-4 h-4' />
                            Our Process
                        </span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                            How We Deliver SEO Results
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
                                <div className='text-6xl font-bold text-green-200 mb-4'>{step.step}</div>
                                <h3 className='text-xl font-bold text-gray-900 mb-3'>{step.title}</h3>
                                <p className='text-gray-600'>{step.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-20 px-4 md:px-8 lg:px-16 bg-green-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                            Ready to Rank #1 in {cityName}?
                        </h2>
                        <p className='text-xl text-green-100 mb-8'>
                            Get a free SEO audit and discover untapped opportunities to grow your organic traffic.
                        </p>
                        <div className='flex flex-wrap justify-center gap-4'>
                            <Link
                                href='/contact-us'
                                className='inline-flex items-center gap-2 bg-white text-green-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                            >
                                Get Free SEO Audit
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
