"use client";

import React from 'react';
import { motion } from 'motion/react';

/**
 * Renders service cards grid from the content data.
 * Used on market-we-serve sub-pages.
 */
export default function MarketServiceCards({ cards, title, subtitle, accentColor = 'teal' }) {
    if (!cards || cards.length === 0) return null;

    return (
        <section className='py-20 px-4 md:px-8 lg:px-16 bg-slate-900'>
            <div className='max-w-7xl mx-auto'>
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className='text-center mb-16'
                >
                    <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4'>
                        {title || 'Our Services'}
                    </h2>
                    {subtitle && (
                        <p className='text-lg text-gray-300 max-w-3xl mx-auto'>
                            {subtitle}
                        </p>
                    )}
                    <div className={`mx-auto mt-4 h-1 w-24 rounded-full bg-linear-to-r from-${accentColor}-500 to-cyan-500`} />
                </motion.div>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                    {cards.map((card, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className={`group rounded-xl bg-white/5 backdrop-blur-sm p-6 text-white ring-1 ring-white/10 hover:ring-${accentColor}-400/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl`}
                        >
                            <div className={`h-0.5 w-12 bg-linear-to-r from-${accentColor}-400 to-cyan-400 rounded-full mb-4`} />
                            <h3 className='text-lg font-semibold mb-3'>{card.title}</h3>
                            <p className='text-slate-300 text-sm leading-relaxed'>{card.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
