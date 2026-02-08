"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import {
    IconMapPin,
    IconStar,
    IconSearch,
    IconPhoto,
    IconMessageCircle,
    IconChartBar,
    IconClock,
    IconPhone,
    IconCheck,
    IconArrowRight,
    IconBuildingStore,
    IconUsers,
    IconTrendingUp,
    IconShieldCheck,
    IconTarget,
    IconBrandGoogle
} from '@tabler/icons-react'

export default function GMBMumbaiPage() {
    const cityName = "Mumbai";
    const stateName = "Maharashtra";

    const benefits = [
        {
            icon: IconSearch,
            title: 'Appear in Local Searches',
            description: `When customers in ${cityName} search for businesses like yours, your optimized GMB profile ensures you appear prominently in search results.`
        },
        {
            icon: IconMapPin,
            title: 'Google Maps Visibility',
            description: `Get discovered on Google Maps by customers navigating through ${cityName}. Perfect for foot traffic and local discovery.`
        },
        {
            icon: IconStar,
            title: 'Build Trust with Reviews',
            description: 'Showcase customer reviews and ratings to build credibility and trust with potential customers in your area.'
        },
        {
            icon: IconPhoto,
            title: 'Visual Showcase',
            description: 'Display photos of your business, products, and services to attract more customers and stand out from competitors.'
        },
        {
            icon: IconMessageCircle,
            title: 'Direct Customer Engagement',
            description: 'Enable messaging, Q&A, and posts to engage directly with potential customers and answer their queries.'
        },
        {
            icon: IconChartBar,
            title: 'Performance Insights',
            description: 'Track how customers find your business, what actions they take, and optimize your strategy accordingly.'
        }
    ];

    const services = [
        {
            title: 'GMB Profile Setup',
            description: 'Complete setup and verification of your Google My Business profile with accurate business information.',
            features: ['Business verification', 'Category optimization', 'Service area setup', 'Hours configuration']
        },
        {
            title: 'Profile Optimization',
            description: 'Strategic optimization of your GMB profile to maximize visibility and engagement.',
            features: ['Keyword optimization', 'Description writing', 'Attribute selection', 'Photo optimization']
        },
        {
            title: 'Review Management',
            description: 'Proactive review management to build and maintain your online reputation.',
            features: ['Review monitoring', 'Response management', 'Review generation', 'Sentiment analysis']
        },
        {
            title: 'GMB Posts & Updates',
            description: 'Regular posts and updates to keep your profile active and engaging.',
            features: ['Weekly posts', 'Offer promotions', 'Event announcements', 'Product updates']
        },
        {
            title: 'Local SEO Integration',
            description: 'Integrate GMB with broader local SEO strategies for maximum impact.',
            features: ['Citation building', 'NAP consistency', 'Local link building', 'Schema markup']
        },
        {
            title: 'Analytics & Reporting',
            description: 'Detailed insights and reports on your GMB performance and growth.',
            features: ['Monthly reports', 'Competitor analysis', 'Growth tracking', 'Strategy recommendations']
        }
    ];

    const stats = [
        { value: '46%', label: 'of all Google searches seek local information' },
        { value: '88%', label: 'of local searches result in a call or visit within 24 hours' },
        { value: '76%', label: 'of people who search nearby visit a business within a day' },
        { value: '28%', label: 'of local searches result in a purchase' }
    ];

    const whyChooseUs = [
        {
            icon: IconShieldCheck,
            title: 'Certified Experts',
            description: 'Our team includes Google-certified professionals with years of local SEO experience.'
        },
        {
            icon: IconTarget,
            title: 'Mumbai Market Knowledge',
            description: `Deep understanding of ${cityName}'s diverse markets and customer behavior patterns.`
        },
        {
            icon: IconTrendingUp,
            title: 'Proven Results',
            description: 'Track record of helping businesses achieve top local rankings and increased footfall.'
        },
        {
            icon: IconUsers,
            title: 'Dedicated Support',
            description: 'Personal account manager and responsive support for all your GMB needs.'
        }
    ];

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[60vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-16 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-blue-900/95 via-blue-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1570168007204-dfb528c6958f?w=1920&q=80'
                        alt={`Google My Business Services in ${cityName}`}
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
                            href='/market-we-serve/gmb'
                            className='inline-flex items-center gap-2 text-blue-200 hover:text-white mb-4 mr-4 transition-colors'
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
                            Google My Business Services in {cityName}
                        </h1>

                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                            Dominate local search results in {cityName}. Our expert GMB optimization services help your business get discovered by customers in your area, drive more foot traffic, and grow your revenue.
                        </p>

                        <div className='flex flex-wrap gap-4'>
                            <Link
                                href='/contact-us'
                                className='inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105'
                            >
                                Get Free GMB Audit
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
            <section className='py-12 px-4 md:px-8 lg:px-16 bg-blue-600'>
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
                                <div className='text-blue-100 text-sm'>{stat.label}</div>
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
                        <span className='inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>
                            <IconBrandGoogle className='w-4 h-4' />
                            Why GMB Matters
                        </span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                            Benefits of GMB Optimization in {cityName}
                        </h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                            In a competitive market like {cityName}, having an optimized Google My Business profile is essential for local visibility and customer acquisition.
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
                                <div className='w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-4'>
                                    <benefit.icon className='w-7 h-7 text-blue-600' />
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
                        <span className='inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>
                            <IconBuildingStore className='w-4 h-4' />
                            Our Services
                        </span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                            GMB Services We Offer in {cityName}
                        </h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                            Comprehensive Google My Business services tailored for {cityName} businesses to maximize local visibility and customer engagement.
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
                                            <IconCheck className='w-5 h-5 text-blue-600 shrink-0' />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className='py-20 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid lg:grid-cols-2 gap-12 items-center'>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <span className='inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>
                                <IconShieldCheck className='w-4 h-4' />
                                Why Choose Us
                            </span>
                            <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-6'>
                                Your Trusted GMB Partner in {cityName}
                            </h2>
                            <p className='text-lg text-gray-600 mb-8'>
                                With years of experience helping {cityName} businesses dominate local search, we understand what it takes to succeed in this competitive market.
                            </p>

                            <div className='space-y-6'>
                                {whyChooseUs.map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className='flex gap-4'
                                    >
                                        <div className='w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center shrink-0'>
                                            <item.icon className='w-6 h-6 text-blue-600' />
                                        </div>
                                        <div>
                                            <h3 className='text-lg font-bold text-gray-900 mb-1'>{item.title}</h3>
                                            <p className='text-gray-600'>{item.description}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className='relative'
                        >
                            <img
                                src='https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80'
                                alt={`GMB Services Team in ${cityName}`}
                                className='rounded-2xl shadow-2xl w-full'
                            />
                            <div className='absolute -bottom-6 -left-6 bg-blue-600 text-white p-6 rounded-xl shadow-xl'>
                                <div className='text-3xl font-bold'>500+</div>
                                <div className='text-blue-100'>Businesses Served in {cityName}</div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-20 px-4 md:px-8 lg:px-16 bg-blue-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                            Ready to Dominate Local Search in {cityName}?
                        </h2>
                        <p className='text-xl text-blue-100 mb-8'>
                            Get a free GMB audit and discover how we can help your business attract more local customers.
                        </p>
                        <div className='flex flex-wrap justify-center gap-4'>
                            <Link
                                href='/contact-us'
                                className='inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                            >
                                Get Free GMB Audit
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
