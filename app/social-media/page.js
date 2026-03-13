import ContentLandingPageTemplate from '@/components/services/ContentLandingPageTemplate';

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

const includedItems = [
    'Social media strategy and brand positioning',
    'Content planning, design, and publishing',
    'Paid social campaigns and retargeting',
    'Community management and engagement',
    'Performance analytics and optimization',
];

const benefitsItems = [
    'Consistent brand visibility across platforms',
    'Higher audience engagement and follower quality',
    'Better campaign ROI with targeted execution',
    'Actionable reporting with clear growth insights',
];

const sidebarItems = [
    'Audit and benchmark social presence',
    'Build content and campaign plan by platform',
    'Execute, test, and optimize consistently',
    'Scale high-performing creatives and formats',
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
        <ContentLandingPageTemplate
            theme='indigo'
            title='Social Media Marketing in Delhi'
            description='Build your brand presence across social platforms with strategy-led campaigns, creative storytelling, and measurable growth.'
            badge='Social Media Growth'
            heroImage='/social-media-og.webp'
            includedTitle='What You Get'
            includedItems={includedItems}
            benefitsTitle='Business Impact'
            benefitsItems={benefitsItems}
            sidebarTitle='Our Working Model'
            sidebarItems={sidebarItems}
            faqs={faqs}
            ctaText='Request Proposal'
        />
    );
}
