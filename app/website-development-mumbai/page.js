"use client";

import React from 'react'
import { motion } from 'motion/react'
import Link from 'next/link'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import {
    IconMapPin,
    IconDeviceDesktop,
    IconDeviceMobile,
    IconShoppingCart,
    IconBrandWordpress,
    IconCode,
    IconPhone,
    IconCheck,
    IconArrowRight,
    IconUsers,
    IconTrendingUp,
    IconShieldCheck,
    IconTarget,
    IconRocket,
    IconPalette,
    IconServer,
    IconWorld
} from '@tabler/icons-react'

export default function WebDevMumbaiPage() {
    const cityName = "Mumbai";
    const stateName = "Maharashtra";

    const benefits = [
        {
            icon: IconDeviceDesktop,
            title: 'Professional Online Presence',
            description: `Establish a credible digital presence that reflects your brand and appeals to ${cityName}'s discerning customers.`
        },
        {
            icon: IconDeviceMobile,
            title: 'Mobile-First Design',
            description: 'Responsive websites that look and work perfectly on all devices, capturing mobile users effectively.'
        },
        {
            icon: IconRocket,
            title: 'Fast Loading Speed',
            description: 'Optimized performance ensures your website loads quickly, improving user experience and SEO rankings.'
        },
        {
            icon: IconShieldCheck,
            title: 'Secure & Reliable',
            description: 'Built with security best practices to protect your business and customer data.'
        },
        {
            icon: IconTrendingUp,
            title: 'SEO-Optimized',
            description: 'Websites built with SEO best practices to help you rank higher in search results.'
        },
        {
            icon: IconTarget,
            title: 'Conversion Focused',
            description: 'Strategic design and user experience optimized to convert visitors into customers.'
        }
    ];

    const services = [
        {
            title: 'Business Websites',
            description: 'Professional websites for businesses of all sizes to establish online presence.',
            features: ['Custom design', 'Responsive layout', 'Contact forms', 'SEO ready']
        },
        {
            title: 'E-Commerce Development',
            description: 'Full-featured online stores to sell products and services online.',
            features: ['Product catalog', 'Secure payments', 'Inventory management', 'Order tracking']
        },
        {
            title: 'WordPress Development',
            description: 'Custom WordPress websites with easy content management.',
            features: ['Custom themes', 'Plugin integration', 'Easy updates', 'Blog setup']
        },
        {
            title: 'Web Applications',
            description: 'Custom web applications tailored to your business needs.',
            features: ['Custom functionality', 'User dashboards', 'API integration', 'Database design']
        },
        {
            title: 'Landing Pages',
            description: 'High-converting landing pages for marketing campaigns.',
            features: ['A/B testing ready', 'Lead capture', 'Fast loading', 'Analytics integration']
        },
        {
            title: 'Website Maintenance',
            description: 'Ongoing support and maintenance to keep your website running smoothly.',
            features: ['Regular updates', 'Security patches', 'Backup management', '24/7 monitoring']
        }
    ];

    const stats = [
        { value: '94%', label: 'of first impressions relate to web design' },
        { value: '88%', label: 'of users won\'t return after bad experience' },
        { value: '75%', label: 'judge credibility based on website design' },
        { value: '3s', label: 'is max acceptable page load time' }
    ];

    const technologies = [
        { name: 'React', icon: IconCode },
        { name: 'Next.js', icon: IconRocket },
        { name: 'WordPress', icon: IconBrandWordpress },
        { name: 'Shopify', icon: IconShoppingCart },
        { name: 'Node.js', icon: IconServer },
        { name: 'Tailwind CSS', icon: IconPalette }
    ];

    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className='relative min-h-[60vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-16 overflow-hidden'>
                <div className='absolute inset-0 z-0'>
                    <div className='absolute inset-0 bg-linear-to-r from-purple-900/95 via-purple-800/90 to-transparent z-10' />
                    <img
                        src='https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80'
                        alt={`Website Development in ${cityName}`}
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
                            href='/market-we-serve/web'
                            className='inline-flex items-center gap-2 text-purple-200 hover:text-white mb-4 mr-4 transition-colors'
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
                            Website Development in {cityName}
                        </h1>

                        <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>
                            Professional website development services in {cityName}. We build stunning, high-performance websites that help businesses establish a powerful online presence and drive growth.
                        </p>

                        <div className='flex flex-wrap gap-4'>
                            <Link
                                href='/contact-us'
                                className='inline-flex items-center gap-2 bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-all duration-300 hover:scale-105'
                            >
                                Get Free Quote
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
            <section className='py-12 px-4 md:px-8 lg:px-16 bg-purple-600'>
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
                                <div className='text-purple-100 text-sm'>{stat.label}</div>
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
                        <span className='inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>
                            <IconCode className='w-4 h-4' />
                            Why Professional Web Development
                        </span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                            Benefits of Professional Website in {cityName}
                        </h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                            In {cityName}'s competitive business environment, a professional website is essential for establishing credibility and attracting customers.
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
                                <div className='w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4'>
                                    <benefit.icon className='w-7 h-7 text-purple-600' />
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
                        <span className='inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>
                            <IconDeviceDesktop className='w-4 h-4' />
                            Our Services
                        </span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                            Web Development Services in {cityName}
                        </h2>
                        <p className='text-lg text-gray-600 max-w-3xl mx-auto'>
                            From simple business websites to complex web applications, we deliver solutions tailored to your needs.
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
                                            <IconCheck className='w-5 h-5 text-purple-600 shrink-0' />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Technologies Section */}
            <section className='py-20 px-4 md:px-8 lg:px-16'>
                <div className='max-w-7xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className='text-center mb-16'
                    >
                        <span className='inline-flex items-center gap-2 bg-purple-100 text-purple-600 px-4 py-2 rounded-lg text-sm font-semibold mb-4'>
                            <IconWorld className='w-4 h-4' />
                            Technologies We Use
                        </span>
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6'>
                            Built with Modern Technologies
                        </h2>
                    </motion.div>

                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6'>
                        {technologies.map((tech, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className='bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 text-center'
                            >
                                <div className='w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3'>
                                    <tech.icon className='w-6 h-6 text-purple-600' />
                                </div>
                                <h3 className='font-bold text-gray-900'>{tech.name}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className='py-20 px-4 md:px-8 lg:px-16 bg-purple-600'>
                <div className='max-w-4xl mx-auto text-center'>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6'>
                            Ready to Build Your Dream Website?
                        </h2>
                        <p className='text-xl text-purple-100 mb-8'>
                            Get a free consultation and quote for your website project in {cityName}.
                        </p>
                        <div className='flex flex-wrap justify-center gap-4'>
                            <Link
                                href='/contact-us'
                                className='inline-flex items-center gap-2 bg-white text-purple-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-purple-50 transition-all duration-300 hover:scale-105 hover:shadow-xl'
                            >
                                Get Free Quote
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
