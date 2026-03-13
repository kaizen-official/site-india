import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata = {
    title: 'Social Media Marketing in Delhi - Digital Solution 360',
    description:
        'Boost engagement and reach with Digital Solution 360 social media marketing services tailored to your business goals.',
    keywords:
        'social media marketing in delhi, social media agency, instagram marketing, facebook marketing, social media services',
    alternates: {
        canonical: 'https://www.digitalsolution360.in/social-media',
    },
};

const services = [
    'Social media strategy and brand positioning',
    'Content planning, design, and publishing',
    'Paid social campaigns and retargeting',
    'Community management and engagement',
    'Performance analytics and optimization',
];

const faqs = [
    {
        q: 'Which platforms do you manage?',
        a: 'We manage Instagram, Facebook, LinkedIn, YouTube, and X based on your target audience and business objectives.',
    },
    {
        q: 'Can social media generate leads?',
        a: 'Yes. With strategy, creative content, and ad optimization, social campaigns can generate qualified leads and improve brand recall.',
    },
    {
        q: 'Do you provide monthly reporting?',
        a: 'Yes. We share regular reports with growth metrics, campaign outcomes, and optimization recommendations.',
    },
];

export default function SocialMediaPage() {
    return (
        <>
            <Header />
            <main className='bg-white pt-24'>
                <section className='px-4 py-14 md:px-8 lg:px-16 bg-linear-to-r from-[#0a2540] to-[#00111c] text-white'>
                    <div className='mx-auto max-w-7xl text-center'>
                        <h1 className='text-4xl md:text-5xl font-bold'>Social Media Marketing in Delhi</h1>
                        <p className='mt-5 mx-auto max-w-3xl text-lg text-blue-100'>
                            Build your brand presence across social platforms with strategy-led campaigns, creative storytelling, and measurable growth.
                        </p>
                        <div className='mt-8 flex flex-wrap justify-center gap-4'>
                            <Link href='/contact-us' className='rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100'>
                                Request Proposal
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
                            <h2 className='text-3xl font-bold text-slate-900'>What You Get</h2>
                            <p className='mt-4 text-slate-700 leading-8'>
                                Our team creates platform-specific content and campaign systems that increase awareness, engagement, and conversions for your brand.
                            </p>
                            <ul className='mt-6 space-y-3'>
                                {services.map((item) => (
                                    <li key={item} className='rounded-xl border border-slate-200 px-4 py-3 text-slate-700'>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='rounded-2xl border border-slate-200 p-6 bg-slate-50'>
                            <h3 className='text-2xl font-bold text-slate-900'>Our Working Model</h3>
                            <ol className='mt-5 space-y-3 text-slate-700 list-decimal pl-5'>
                                <li>Audit and benchmark your current social presence</li>
                                <li>Build a content and campaign plan by platform</li>
                                <li>Execute, test, and optimize consistently</li>
                                <li>Report outcomes and scale high-performing creatives</li>
                            </ol>
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
