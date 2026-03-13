import ContentLandingPageTemplate from '@/components/services/ContentLandingPageTemplate';

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

const includedItems = [
    'Verified content writers with domain expertise',
    'SEO-friendly website, blog, and landing page content',
    '100% unique, plagiarism-checked content',
    'Fast turnaround with quality review workflow',
];

const benefitsItems = [
    'Stronger organic visibility and keyword relevance',
    'Higher on-page engagement and reading retention',
    'Consistent brand voice across channels',
    'Conversion-focused messaging for lead generation',
];

const sidebarItems = [
    'Website content writing and content revamp',
    'SEO blog strategy and publishing calendar',
    'Service page and location page content',
    'Email and social campaign copywriting',
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
        <ContentLandingPageTemplate
            theme='indigo'
            title='Best Content Writing Agency in Delhi'
            description='Build authority, trust, and organic growth with high-quality content designed for your audience and search visibility.'
            badge='Content Marketing Services'
            heroImage='/content-writing-og.webp'
            includedTitle='Content That Drives Business Growth'
            includedItems={includedItems}
            benefitsTitle='Why Businesses Choose Our Content Team'
            benefitsItems={benefitsItems}
            sidebarTitle='Our Content Marketing Scope'
            sidebarItems={sidebarItems}
            faqs={faqs}
            ctaText='Request a Call Back'
        />
    );
}
