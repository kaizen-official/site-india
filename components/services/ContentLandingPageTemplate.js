import Link from 'next/link';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

const THEME_MAP = {
  blue: {
    gradient: 'from-slate-900/95 via-slate-800/90 to-blue-900/70',
    ctaGrad: 'from-slate-900 to-blue-900',
    iconBg: 'bg-blue-100',
    iconText: 'text-blue-700',
    lightBg: 'bg-blue-50',
    border: 'border-blue-200',
    badge: 'bg-blue-100 text-blue-800',
  },
  emerald: {
    gradient: 'from-slate-900/95 via-slate-800/90 to-emerald-900/70',
    ctaGrad: 'from-slate-900 to-emerald-900',
    iconBg: 'bg-emerald-100',
    iconText: 'text-emerald-700',
    lightBg: 'bg-emerald-50',
    border: 'border-emerald-200',
    badge: 'bg-emerald-100 text-emerald-800',
  },
  orange: {
    gradient: 'from-slate-900/95 via-slate-800/90 to-orange-900/70',
    ctaGrad: 'from-slate-900 to-orange-900',
    iconBg: 'bg-orange-100',
    iconText: 'text-orange-700',
    lightBg: 'bg-orange-50',
    border: 'border-orange-200',
    badge: 'bg-orange-100 text-orange-800',
  },
  indigo: {
    gradient: 'from-slate-900/95 via-slate-800/90 to-indigo-900/70',
    ctaGrad: 'from-slate-900 to-indigo-900',
    iconBg: 'bg-indigo-100',
    iconText: 'text-indigo-700',
    lightBg: 'bg-indigo-50',
    border: 'border-indigo-200',
    badge: 'bg-indigo-100 text-indigo-800',
  },
};

export default function ContentLandingPageTemplate({
  theme = 'blue',
  title,
  description,
  heroImage,
  badge,
  includedTitle,
  includedItems,
  benefitsTitle,
  benefitsItems,
  sidebarTitle,
  sidebarItems,
  faqs,
  ctaText,
}) {
  const t = THEME_MAP[theme] || THEME_MAP.blue;

  return (
    <>
      <Header />

      <section className='relative min-h-[52vh] flex items-center px-4 md:px-8 lg:px-16 pt-24 pb-12 overflow-hidden'>
        <div className='absolute inset-0 z-0'>
          <div className={`absolute inset-0 bg-linear-to-r ${t.gradient} z-10`} />
          <img src={heroImage} alt={title} className='w-full h-full object-cover' />
        </div>

        <div className='max-w-7xl mx-auto relative z-20 w-full'>
          <span className={`inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold mb-6 ${t.badge}`}>
            {badge}
          </span>
          <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 max-w-5xl'>{title}</h1>
          <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-3xl mb-8'>{description}</p>
          <div className='flex flex-wrap gap-4'>
            <Link href='/contact-us' className='bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors'>
              {ctaText}
            </Link>
            <a href='tel:+919990556217' className='border border-white/30 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white/10 transition-colors'>
              Call +91 99905 56217
            </a>
          </div>
        </div>
      </section>

      <section className='py-16 px-4 md:px-8 lg:px-16'>
        <div className='max-w-7xl mx-auto flex flex-col lg:flex-row gap-8'>
          <div className='w-full lg:w-[70%]'>
            <div className='mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>{includedTitle}</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                {includedItems.map((item) => (
                  <div key={item} className={`flex items-start gap-3 p-4 ${t.lightBg} rounded-xl border ${t.border}`}>
                    <span className={`w-7 h-7 rounded-lg ${t.iconBg} ${t.iconText} flex items-center justify-center shrink-0 mt-0.5`}>✓</span>
                    <span className='text-gray-800 font-medium'>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className='mb-12'>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>{benefitsTitle}</h2>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {benefitsItems.map((benefit) => (
                  <div key={benefit} className='bg-white rounded-xl p-5 shadow-lg border border-gray-100'>
                    <div className='flex items-center gap-3 mb-2'>
                      <span className={`w-8 h-8 rounded-lg ${t.iconBg} ${t.iconText} flex items-center justify-center`}>★</span>
                      <h3 className='text-lg font-bold text-gray-900'>{benefit}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-8'>Frequently Asked Questions</h2>
              <div className='space-y-4'>
                {faqs.map((faq) => (
                  <details key={faq.q} className='bg-gray-50 rounded-2xl p-5'>
                    <summary className='cursor-pointer text-lg font-semibold text-gray-900'>{faq.q}</summary>
                    <p className='pt-3 text-gray-600 leading-relaxed'>{faq.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>

          <div className='w-full lg:w-[30%]'>
            <div className='lg:sticky lg:top-24 space-y-6'>
              <div className='bg-white border border-gray-200 rounded-xl shadow-lg p-6'>
                <h3 className='text-xl font-bold text-gray-900 mb-2'>Quick Consultation</h3>
                <p className='text-sm text-gray-500 mb-4'>Get strategy guidance from our experts.</p>
                <div className='space-y-3'>
                  <a href='tel:+919990556217' className='block rounded-lg border border-gray-200 px-4 py-3 text-gray-800 font-medium hover:bg-gray-50'>
                    +91 99905 56217
                  </a>
                  <a href='mailto:info@digitalsolution360.in' className='block rounded-lg border border-gray-200 px-4 py-3 text-gray-800 font-medium hover:bg-gray-50'>
                    info@digitalsolution360.in
                  </a>
                  <Link href='/contact-us' className='block rounded-lg bg-slate-900 text-white px-4 py-3 text-center font-semibold hover:bg-slate-800'>
                    Send Enquiry
                  </Link>
                </div>
              </div>

              <div className='bg-white border border-gray-200 rounded-xl shadow-lg p-6'>
                <h3 className='text-lg font-bold text-gray-900 mb-4'>{sidebarTitle}</h3>
                <div className='space-y-2'>
                  {sidebarItems.map((item) => (
                    <div key={item} className='px-3 py-2 rounded-lg bg-gray-50 text-sm text-gray-700'>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={`py-16 px-4 md:px-8 lg:px-16 bg-linear-to-r ${t.ctaGrad}`}>
        <div className='max-w-4xl mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-5'>Ready to grow your business?</h2>
          <p className='text-xl text-gray-300 mb-8'>Let our team build a customized execution plan for your goals.</p>
          <Link href='/contact-us' className='inline-block bg-amber-500 hover:bg-amber-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors'>
            Get Started Today
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}
