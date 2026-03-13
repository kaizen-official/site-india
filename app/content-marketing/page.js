import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata = {
    title: 'Best Content Writing Agency in Delhi | Content Marketing Services',
    description:
        'Digital Solution 360 offers professional content marketing and content writing services in Delhi with SEO-focused, plagiarism-free, audience-first content.',
    keywords:
        'content writing agency in delhi, content marketing services, content writer in delhi, seo content writing, website content writing services',
    alternates: {
        canonical: 'https://www.digitalsolution360.in/content-marketing',
    },
};

const benefits = [
    'Verified content writers with domain expertise',
    'SEO-friendly website, blog, and landing page content',
    '100% unique, plagiarism-checked content',
    'Fast turnaround with quality review workflow',
];

const faqs = [
    {
        q: 'What types of content do you write?',
        a: 'We write website pages, blogs, product descriptions, ad copy, email content, and social content tailored to business goals.',
    },
    {
        q: 'Is your content SEO optimized?',
        a: 'Yes. We align content with keyword intent, readability, and on-page SEO best practices.',
    },
    {
        q: 'How is quality ensured?',
        a: 'Every draft goes through proofreading, plagiarism checks, and optimization before delivery.',
    },
];

export default function ContentMarketingPage() {
    return (
        <>
            <Header />
            <main className='bg-white pt-24'>
                <section className='px-4 py-14 md:px-8 lg:px-16 bg-linear-to-br from-slate-900 via-indigo-900 to-sky-800 text-white'>
                    <div className='mx-auto max-w-7xl'>
                        <h1 className='text-4xl md:text-5xl font-bold'>Best Content Writing Agency in Delhi</h1>
                        <p className='mt-5 max-w-3xl text-lg text-sky-100'>
                            Build authority, trust, and organic growth with high-quality content designed for your audience and search visibility.
                        </p>
                        <div className='mt-8 flex flex-wrap gap-4'>
                            <Link href='/contact-us' className='rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100'>
                                Request a Call Back
                            </Link>
                            <a href='tel:+919990556217' className='rounded-xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10'>
                                Call +91 99905 56217
                            </a>
                        </div>
                    </div>
                </section>

                <section className='px-4 py-14 md:px-8 lg:px-16'>
                    <div className='mx-auto max-w-7xl grid gap-10 lg:grid-cols-2'>
                        <div>
                            <h2 className='text-3xl font-bold text-slate-900'>Content That Drives Business Growth</h2>
                            <p className='mt-4 text-slate-700 leading-8'>
                                In competitive markets, publishing the right message consistently matters. Our team creates purpose-driven content that improves rankings, user engagement, and conversion intent.
                            </p>
                            <ul className='mt-6 space-y-3'>
                                {benefits.map((item) => (
                                    <li key={item} className='rounded-xl border border-slate-200 px-4 py-3 text-slate-700'>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='rounded-2xl border border-slate-200 p-6 bg-slate-50'>
                            <h3 className='text-2xl font-bold text-slate-900'>Our Content Marketing Scope</h3>
                            <ul className='mt-5 space-y-3 text-slate-700'>
                                <li>Website content writing and content revamp</li>
                                <li>SEO blog strategy and publishing calendar</li>
                                <li>Service page, location page, and pillar page content</li>
                                <li>Email and social media copy aligned to campaigns</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className='px-4 pb-16 md:px-8 lg:px-16'>
                    <div className='mx-auto max-w-5xl'>
                        <h2 className='text-3xl font-bold text-slate-900'>Frequently Asked Questions</h2>
                        <div className='mt-6 space-y-4'>
                            {faqs.map((item) => (
                                <details key={item.q} className='rounded-xl border border-slate-200 p-4'>
                                    <summary className='cursor-pointer font-semibold text-slate-900'>{item.q}</summary>
                                    <p className='mt-3 text-slate-700'>{item.a}</p>
                                </details>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
