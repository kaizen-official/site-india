import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

export const metadata = {
    title: 'CRM Development Company | Custom CRM Solutions by Digital Solution 360',
    description:
        'Partner with Digital Solution 360, a leading CRM development company, to build custom CRM software tailored to your business workflows and growth goals.',
    keywords:
        'CRM development company, Custom CRM software, CRM solutions in India, Cloud-based CRM, CRM integration, CRM application development, Enterprise CRM systems, CRM for small business, CRM automation, Sales CRM software, Customer relationship management, CRM developers, Web-based CRM, CRM implementation, CRM maintenance, CRM support services',
    alternates: {
        canonical: 'https://www.digitalsolution360.in/crm-development',
    },
};

const offerings = [
    {
        title: 'Custom CRM Development',
        desc: 'Build CRM systems around your exact sales, support, and operations workflows.',
    },
    {
        title: 'Enterprise CRM Solutions',
        desc: 'Implement and customize enterprise platforms with role-based controls and scalable architecture.',
    },
    {
        title: 'CRM Integration Services',
        desc: 'Connect CRM with ERP, HRMS, accounting tools, and third-party APIs for a unified data flow.',
    },
    {
        title: 'CRM Support and Optimization',
        desc: 'Continuous improvements, maintenance, and process automation to maximize ROI.',
    },
];

export default function CrmDevelopmentPage() {
    return (
        <>
            <Header />
            <main className='bg-white pt-24'>
                <section className='px-4 py-14 md:px-8 lg:px-16 bg-linear-to-r from-slate-900 via-indigo-900 to-blue-800 text-white'>
                    <div className='mx-auto max-w-7xl'>
                        <h1 className='text-4xl md:text-5xl font-bold'>CRM Development Company</h1>
                        <p className='mt-5 max-w-3xl text-lg text-blue-100'>
                            We design and develop custom CRM solutions that centralize customer data, automate sales operations, and improve business decision-making.
                        </p>
                        <div className='mt-8 flex flex-wrap gap-4'>
                            <Link href='/contact-us' className='rounded-xl bg-white px-6 py-3 font-semibold text-slate-900 hover:bg-slate-100'>
                                Talk to CRM Expert
                            </Link>
                            <a href='tel:+919990556217' className='rounded-xl border border-white/30 px-6 py-3 font-semibold hover:bg-white/10'>
                                Call +91 99905 56217
                            </a>
                        </div>
                    </div>
                </section>

                <section className='px-4 py-14 md:px-8 lg:px-16'>
                    <div className='mx-auto max-w-7xl'>
                        <h2 className='text-3xl font-bold text-slate-900'>Our CRM Offerings</h2>
                        <p className='mt-4 max-w-4xl text-slate-700 leading-8'>
                            From strategy and implementation to automation and analytics, we deliver CRM platforms that align technology with business outcomes.
                        </p>
                        <div className='mt-8 grid gap-6 md:grid-cols-2'>
                            {offerings.map((item) => (
                                <div key={item.title} className='rounded-2xl border border-slate-200 bg-slate-50 p-6'>
                                    <h3 className='text-xl font-bold text-slate-900'>{item.title}</h3>
                                    <p className='mt-3 text-slate-700'>{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                <section className='px-4 pb-16 md:px-8 lg:px-16'>
                    <div className='mx-auto max-w-7xl rounded-2xl border border-slate-200 p-8 bg-slate-900 text-white'>
                        <h2 className='text-3xl font-bold'>Why Choose Digital Solution 360 for CRM</h2>
                        <ul className='mt-5 space-y-3 text-slate-200'>
                            <li>Process-first development approach with measurable KPIs</li>
                            <li>Secure architecture, role management, and data protection</li>
                            <li>Scalable modules for sales, support, and reporting</li>
                            <li>Long-term technical support and performance optimization</li>
                        </ul>
                    </div>
                </section>
            </main>
            <Footer />
        </>
    );
}
