import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata = {
    title: 'AWS Training in Bangalore | Online AWS Certification Training',
    description:
        'Join our comprehensive online AWS certification training program in Banglore. Digital Solution 360 offers job-oriented AWS certification training with practical guidance.',
    keywords: 'AWS Training in Banglore',
    alternates: {
        canonical: 'https://www.digitalsolution360.in/aws-marketing-banglore',
    },
};

const highlights = [
    'Comprehensive AWS SAA-C03 aligned curriculum',
    'Hands-on labs and real-world architecture scenarios',
    'Exam-oriented preparation with practice questions',
    'Job-oriented mentoring and interview support',
];

const faqItems = [
    {
        q: 'Why should I get AWS certified?',
        a: 'AWS certification validates your cloud skills and improves your career opportunities in cloud engineering and architecture roles.',
    },
    {
        q: 'Which AWS certification should I start with?',
        a: 'If you are new, start with AWS Certified Cloud Practitioner. For technical roles, AWS Solutions Architect Associate is a strong first target.',
    },
    {
        q: 'Do you provide practical training?',
        a: 'Yes. The program includes guided labs, architecture exercises, and implementation-focused assignments.',
    },
];

export default function AwsMarketingBanglorePage() {
    return (
        <>
            <Header />
            <main className='bg-white pt-24'>
                <section className='px-4 py-14 md:px-8 lg:px-16 bg-linear-to-r from-slate-900 via-blue-900 to-indigo-900 text-white'>
                    <div className='mx-auto max-w-7xl'>
                        <h1 className='text-4xl md:text-5xl font-bold'>AWS Training in Bangalore</h1>
                        <p className='mt-5 max-w-3xl text-lg text-blue-100'>
                            Online AWS certification training designed for learners and professionals who want practical cloud expertise, stronger resumes, and job-ready skills.
                        </p>
                        <div className='mt-8 flex flex-wrap gap-4'>
                            <Link href='/contact-us' className='rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100'>
                                Book Free Counseling
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
                            <h2 className='text-3xl font-bold text-slate-900'>What You Will Learn</h2>
                            <p className='mt-4 text-slate-700 leading-8'>
                                This course covers core AWS services, architecture principles, cost optimization, identity and security basics, networking, storage, and deployment patterns.
                            </p>
                            <ul className='mt-6 space-y-3'>
                                {highlights.map((item) => (
                                    <li key={item} className='rounded-xl border border-slate-200 px-4 py-3 text-slate-700'>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className='rounded-2xl border border-slate-200 p-6 bg-slate-50'>
                            <h3 className='text-2xl font-bold text-slate-900'>Who Should Join</h3>
                            <ul className='mt-5 space-y-3 text-slate-700'>
                                <li>Students and freshers entering cloud roles</li>
                                <li>Developers and system admins moving to AWS</li>
                                <li>IT professionals preparing for AWS certification</li>
                                <li>Business owners understanding cloud infrastructure</li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className='px-4 pb-16 md:px-8 lg:px-16'>
                    <div className='mx-auto max-w-5xl'>
                        <h2 className='text-3xl font-bold text-slate-900'>Frequently Asked Questions</h2>
                        <div className='mt-6 space-y-4'>
                            {faqItems.map((item) => (
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
