import ContentLandingPageTemplate from '@/components/services/ContentLandingPageTemplate';

export const metadata = {
    title: 'AWS Training in Bangalore | Online AWS Certification Training',
    description:
        'Join our comprehensive online AWS certification training program in Banglore. Digital Solution 360 offers job-oriented AWS certification training with practical guidance.',
    keywords: 'AWS Training in Banglore',
    alternates: {
        canonical: 'https://www.digitalsolution360.in/aws-marketing-banglore',
    },
};

const includedItems = [
    'Comprehensive AWS SAA-C03 aligned curriculum',
    'Hands-on labs and real-world architecture scenarios',
    'Exam-oriented preparation with practice questions',
    'Job-oriented mentoring and interview support',
];

const benefitsItems = [
    'Industry-recognized certification readiness',
    'Practical cloud architecture skills',
    'Better job opportunities in cloud roles',
    'Structured learning path for beginners and professionals',
];

const sidebarItems = [
    'Students and freshers entering cloud roles',
    'Developers and system admins moving to AWS',
    'IT professionals preparing for certification',
    'Business owners learning cloud fundamentals',
];

const faqs = [
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
        <ContentLandingPageTemplate
            theme='blue'
            title='AWS Training in Bangalore'
            description='Online AWS certification training designed for learners and professionals who want practical cloud expertise, stronger resumes, and job-ready skills.'
            badge='AWS Certification Program'
            heroImage='/og-default.webp'
            includedTitle='What You Will Learn'
            includedItems={includedItems}
            benefitsTitle='Key Benefits'
            benefitsItems={benefitsItems}
            sidebarTitle='Who Should Join'
            sidebarItems={sidebarItems}
            faqs={faqs}
            ctaText='Book Free Counseling'
        />
    );
}
