"use client";

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import {
    IconSearch,
    IconMapPin,
    IconChevronDown,
    IconChevronUp,
    IconArrowRight,
    IconBuilding,
    IconSpeakerphone
} from '@tabler/icons-react'

export default function DigitalMarketingMarketPage() {
    const [expandedState, setExpandedState] = useState(null);
    const [searchQuery, setSearchQuery] = useState('');

    // Sample data - will be replaced with DB data
    const statesData = [
        {
            name: 'Maharashtra',
            slug: 'maharashtra',
            cities: [
                { name: 'Mumbai', slug: 'mumbai' },
                { name: 'Pune', slug: 'pune' },
                { name: 'Nagpur', slug: 'nagpur' },
                { name: 'Nashik', slug: 'nashik' },
                { name: 'Aurangabad', slug: 'aurangabad' },
                { name: 'Thane', slug: 'thane' },
                { name: 'Navi Mumbai', slug: 'navi-mumbai' }
            ]
        },
        {
            name: 'Delhi NCR',
            slug: 'delhi-ncr',
            cities: [
                { name: 'New Delhi', slug: 'new-delhi' },
                { name: 'Noida', slug: 'noida' },
                { name: 'Gurgaon', slug: 'gurgaon' },
                { name: 'Faridabad', slug: 'faridabad' },
                { name: 'Ghaziabad', slug: 'ghaziabad' },
                { name: 'Greater Noida', slug: 'greater-noida' }
            ]
        },
        {
            name: 'Karnataka',
            slug: 'karnataka',
            cities: [
                { name: 'Bangalore', slug: 'bangalore' },
                { name: 'Mysore', slug: 'mysore' },
                { name: 'Mangalore', slug: 'mangalore' },
                { name: 'Hubli', slug: 'hubli' },
                { name: 'Belgaum', slug: 'belgaum' }
            ]
        },
        {
            name: 'Tamil Nadu',
            slug: 'tamil-nadu',
            cities: [
                { name: 'Chennai', slug: 'chennai' },
                { name: 'Coimbatore', slug: 'coimbatore' },
                { name: 'Madurai', slug: 'madurai' },
                { name: 'Salem', slug: 'salem' },
                { name: 'Trichy', slug: 'trichy' }
            ]
        },
        {
            name: 'Gujarat',
            slug: 'gujarat',
            cities: [
                { name: 'Ahmedabad', slug: 'ahmedabad' },
                { name: 'Surat', slug: 'surat' },
                { name: 'Vadodara', slug: 'vadodara' },
                { name: 'Rajkot', slug: 'rajkot' },
                { name: 'Gandhinagar', slug: 'gandhinagar' }
            ]
        },
        {
            name: 'Rajasthan',
            slug: 'rajasthan',
            cities: [
                { name: 'Jaipur', slug: 'jaipur' },
                { name: 'Jodhpur', slug: 'jodhpur' },
                { name: 'Udaipur', slug: 'udaipur' },
                { name: 'Kota', slug: 'kota' },
                { name: 'Ajmer', slug: 'ajmer' }
            ]
        },
        {
            name: 'Uttar Pradesh',
            slug: 'uttar-pradesh',
            cities: [
                { name: 'Lucknow', slug: 'lucknow' },
                { name: 'Kanpur', slug: 'kanpur' },
                { name: 'Varanasi', slug: 'varanasi' },
                { name: 'Agra', slug: 'agra' },
                { name: 'Prayagraj', slug: 'prayagraj' }
            ]
        },
        {
            name: 'West Bengal',
            slug: 'west-bengal',
            cities: [
                { name: 'Kolkata', slug: 'kolkata' },
                { name: 'Howrah', slug: 'howrah' },
                { name: 'Durgapur', slug: 'durgapur' },
                { name: 'Siliguri', slug: 'siliguri' },
                { name: 'Asansol', slug: 'asansol' }
            ]
        },
        {
            name: 'Telangana',
            slug: 'telangana',
            cities: [
                { name: 'Hyderabad', slug: 'hyderabad' },
                { name: 'Warangal', slug: 'warangal' },
                { name: 'Nizamabad', slug: 'nizamabad' },
                { name: 'Karimnagar', slug: 'karimnagar' }
            ]
        },
        {
            name: 'Kerala',
            slug: 'kerala',
            cities: [
                { name: 'Kochi', slug: 'kochi' },
                { name: 'Thiruvananthapuram', slug: 'thiruvananthapuram' },
                { name: 'Kozhikode', slug: 'kozhikode' },
                { name: 'Thrissur', slug: 'thrissur' }
            ]
        },
        {
            name: 'Madhya Pradesh',
            slug: 'madhya-pradesh',
            cities: [
                { name: 'Indore', slug: 'indore' },
                { name: 'Bhopal', slug: 'bhopal' },
                { name: 'Jabalpur', slug: 'jabalpur' },
                { name: 'Gwalior', slug: 'gwalior' }
            ]
        },
        {
            name: 'Punjab',
            slug: 'punjab',
            cities: [
                { name: 'Chandigarh', slug: 'chandigarh' },
                { name: 'Ludhiana', slug: 'ludhiana' },
                { name: 'Amritsar', slug: 'amritsar' },
                { name: 'Jalandhar', slug: 'jalandhar' }
            ]
        }
    ];

    const filteredStates = statesData.filter(state =>
        state.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        state.cities.some(city => city.name.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    const totalCities = statesData.reduce((acc, state) => acc + state.cities.length, 0);

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[50vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-10 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-orange-900/95 via-orange-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=1920&q=80'
                        alt='Digital Marketing Services'
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
                            href='/market-we-serve'
                            className='inline-flex items-center gap-2 text-orange-200 hover:text-white mb-4 mr-4 transition-colors'
                        >
                            <IconArrowRight className='w-4 h-4 rotate-180' />
                            Back to All Services
                        </Link>

                        <motion.span
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className='inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-lg text-sm font-semibold mb-6 border border-white/30'
                        >
                            <IconSpeakerphone className='w-4 h-4' />
                            Digital Marketing
                        </motion.span>

                        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 max-w-4xl'>
                            Digital Marketing Across India
                        </h1>

                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                            Full-service digital marketing solutions to grow your brand and drive results in {statesData.length}+ states and {totalCities}+ cities across India.
                        </p>

                        <div className='flex flex-wrap gap-6'>
                            <div className='flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/30'>
                                <IconBuilding className='w-6 h-6 text-white' />
                                <div>
                                    <div className='text-2xl font-bold text-white'>{statesData.length}</div>
                                    <div className='text-sm text-gray-200'>States</div>
                                </div>
                            </div>
                            <div className='flex items-center gap-3 bg-white/20 backdrop-blur-sm px-4 py-3 rounded-lg border border-white/30'>
                                <IconMapPin className='w-6 h-6 text-white' />
                                <div>
                                    <div className='text-2xl font-bold text-white'>{totalCities}+</div>
                                    <div className='text-sm text-gray-200'>Cities</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Search & Directory */}
            <section className='py-16 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    {/* Search Bar */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className='mb-12'
                    >
                        <div className='relative max-w-xl mx-auto'>
                            <IconSearch className='absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400' />
                            <input
                                type='text'
                                placeholder='Search for a state or city...'
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className='w-full pl-12 pr-4 py-4 border border-gray-200 rounded-xl shadow-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent text-lg'
                            />
                        </div>
                    </motion.div>

                    {/* States Directory */}
                    <div className='space-y-4'>
                        {filteredStates.map((state, index) => (
                            <motion.div
                                key={state.slug}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.05 }}
                                className='bg-white border border-gray-200 rounded-xl shadow-lg hover:shadow-2xl overflow-hidden transition-all duration-300'
                            >
                                <button
                                    onClick={() => setExpandedState(expandedState === state.slug ? null : state.slug)}
                                    className='w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors'
                                >
                                    <div className='flex items-center gap-4'>
                                        <div className='w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center'>
                                            <IconBuilding className='w-5 h-5 text-orange-600' />
                                        </div>
                                        <div>
                                            <h3 className='text-xl font-bold text-gray-900'>{state.name}</h3>
                                            <p className='text-sm text-gray-500'>{state.cities.length} cities available</p>
                                        </div>
                                    </div>
                                    {expandedState === state.slug ? (
                                        <IconChevronUp className='w-6 h-6 text-orange-600' />
                                    ) : (
                                        <IconChevronDown className='w-6 h-6 text-gray-400' />
                                    )}
                                </button>

                                <AnimatePresence>
                                    {expandedState === state.slug && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className='overflow-hidden'
                                        >
                                            <div className='px-6 pb-6 pt-2'>
                                                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                                                    {state.cities.map((city) => (
                                                        <Link
                                                            key={city.slug}
                                                            href={`/digital-marketing-${city.slug}`}
                                                            className='flex items-center gap-2 px-4 py-3 bg-orange-50 border border-orange-200 rounded-lg hover:bg-orange-100 hover:shadow-md transition-all duration-300 group'
                                                        >
                                                            <IconMapPin className='w-4 h-4 text-orange-600' />
                                                            <span className='text-gray-700 font-medium group-hover:text-orange-700'>{city.name}</span>
                                                            <IconArrowRight className='w-4 h-4 text-orange-400 ml-auto opacity-0 group-hover:opacity-100 transition-opacity' />
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>

                    {filteredStates.length === 0 && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className='text-center py-12'
                        >
                            <IconSearch className='w-16 h-16 text-gray-300 mx-auto mb-4' />
                            <h3 className='text-xl font-semibold text-gray-600 mb-2'>No results found</h3>
                            <p className='text-gray-500'>Try searching for a different state or city</p>
                        </motion.div>
                    )}
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-16 px-4 md:px-8 lg:px-16 bg-orange-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                            Ready to Grow Your Business?
                        </h2>
                        <p className='text-xl text-orange-100 mb-8'>
                            Don't see your city listed? Contact us and we'll create a winning digital marketing strategy for you.
                        </p>
                        <Link
                            href='/contact-us'
                            className='inline-block bg-white text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                        >
                            Get Free Marketing Audit
                        </Link>
                    </motion.div>
                </div>
            </section>

            <Footer />
        </>
    )
}
