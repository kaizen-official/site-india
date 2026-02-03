"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import {
    IconMapPin,
    IconBuildingStore,
    IconSearch,
    IconCode,
    IconSpeakerphone,
    IconArrowRight,
    IconBuilding,
    IconMap
} from '@tabler/icons-react'

export default function MarketWeServePage() {
    const categories = [
        {
            icon: IconBuildingStore,
            title: 'Google My Business',
            slug: 'gmb',
            description: 'Professional GMB listing, optimization, and management services across India.',
            color: 'blue',
            stats: { states: 28, cities: '500+' }
        },
        {
            icon: IconSearch,
            title: 'SEO Services',
            slug: 'seo',
            description: 'Result-driven SEO services to boost your online visibility and organic rankings.',
            color: 'green',
            stats: { states: 28, cities: '500+' }
        },
        {
            icon: IconCode,
            title: 'Website Development',
            slug: 'web',
            description: 'Custom website design and development solutions for businesses of all sizes.',
            color: 'purple',
            stats: { states: 28, cities: '500+' }
        },
        {
            icon: IconSpeakerphone,
            title: 'Digital Marketing',
            slug: 'marketing',
            description: 'Comprehensive digital marketing strategies to grow your business online.',
            color: 'orange',
            stats: { states: 28, cities: '500+' }
        }
    ];

    const colorMap = {
        blue: { bg: 'bg-blue-50', icon: 'text-blue-600', border: 'border-blue-200', button: 'bg-blue-600 hover:bg-blue-700' },
        green: { bg: 'bg-green-50', icon: 'text-green-600', border: 'border-green-200', button: 'bg-green-600 hover:bg-green-700' },
        purple: { bg: 'bg-purple-50', icon: 'text-purple-600', border: 'border-purple-200', button: 'bg-purple-600 hover:bg-purple-700' },
        orange: { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'border-orange-200', button: 'bg-orange-600 hover:bg-orange-700' }
    };

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[60vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-gray-900/95 via-gray-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1920&q=80'
                        alt='Market We Serve'
                        className='w-full h-full object-cover'
                    />
                </div>

                <div className='max-w-7xl mx-auto relative z-20 w-full'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-white/30'
                        >
                            <IconMapPin className='w-4 h-4' />
                            Pan India Coverage
                        </motion.span>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>
                            Markets We Serve Across India
                        </h1>

                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                            DigitalSolution 360 provides comprehensive digital services across all major cities and states in India. Find our services in your location.
                        </p>

                        <div className='flex flex-wrap gap-6'>
                            <div className='flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/30'>
                                <IconBuilding className='w-6 h-6 text-white' />
                                <div>
                                    <div className='text-2xl font-bold text-white'>28+</div>
                                    <div className='text-sm text-gray-200'>States & UTs</div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/30'>
                                <IconMap className='w-6 h-6 text-white' />
                                <div>
                                    <div className='text-2xl font-bold text-white'>500+</div>
                                    <div className='text-sm text-gray-200'>Cities Covered</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Categories Section */}
            <section className='py-20 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className='text-center mb-16'
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4'>
                            Our Service Categories
                        </h2>
                        <p className='text-lg md:text-xl text-gray-600 max-w-3xl mx-auto'>
                            Select a service category to explore our coverage across Indian states and cities.
                        </p>
                    </motion.div>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                        {categories.map((category, index) => {
                            const Icon = category.icon;
                            const colors = colorMap[category.color];
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <Link href={`/market-we-serve/${category.slug}`}>
                                        <div className={`${colors.bg} border ${colors.border} rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group cursor-pointer h-full`}>
                                            <div className='flex items-start justify-between mb-6'>
                                                <div className='w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-sm'>
                                                    <Icon className={`w-8 h-8 ${colors.icon}`} stroke={1.5} />
                                                </div>
                                                <IconArrowRight className={`w-6 h-6 ${colors.icon} opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300`} />
                                            </div>

                                            <h3 className='text-2xl font-bold text-gray-900 mb-3'>{category.title}</h3>
                                            <p className='text-gray-600 mb-6'>{category.description}</p>

                                            <div className='flex items-center gap-6 pt-4 border-t border-gray-200'>
                                                <div className='flex items-center gap-2'>
                                                    <IconBuilding className={`w-5 h-5 ${colors.icon}`} />
                                                    <span className='text-gray-700 font-medium'>{category.stats.states} States</span>
                                                </div>
                                                <div className='flex items-center gap-2'>
                                                    <IconMapPin className={`w-5 h-5 ${colors.icon}`} />
                                                    <span className='text-gray-700 font-medium'>{category.stats.cities} Cities</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className='py-20 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center'>
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className='relative h-[400px] rounded-2xl overflow-hidden shadow-2xl'
                        >
                            <img
                                src='https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80'
                                alt='Pan India Services'
                                className='w-full h-full object-cover'
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                                Why Choose DigitalSolution 360?
                            </h2>
                            <p className='text-lg text-gray-600 mb-8'>
                                We understand the unique needs of businesses across different regions of India. Our localized approach ensures you get services tailored to your market.
                            </p>

                            <div className='space-y-4'>
                                {[
                                    'Local market expertise and understanding',
                                    'Dedicated support in regional languages',
                                    'Proven track record across multiple cities',
                                    'Affordable pricing for all market segments',
                                    'Quick turnaround and responsive service'
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className='flex items-center gap-3'
                                    >
                                        <div className='w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center shrink-0'>
                                            <IconArrowRight className='w-4 h-4 text-blue-600' />
                                        </div>
                                        <span className='text-gray-700'>{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-16 px-4 md:px-8 lg:px-16 bg-blue-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                            Can't Find Your City?
                        </h2>
                        <p className='text-xl text-blue-100 mb-8'>
                            We're constantly expanding our reach. Contact us and we'll bring our services to your location.
                        </p>
                        <Link
                            href='/contact-us'
                            className='inline-block bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                        >
                            Contact Us Today
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    )
}
