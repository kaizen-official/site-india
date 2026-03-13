import ContentLandingPageTemplate from '@/components/services/ContentLandingPageTemplate';

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

const includedItems = [
    'Custom CRM development for your workflows',
    'Enterprise CRM implementation and customization',
    'CRM integration with ERP, HRMS, and third-party tools',
    'CRM support, maintenance, and optimization',
];

const benefitsItems = [
    'Centralized customer data and team visibility',
    'Process automation for sales and support teams',
    'Scalable architecture for long-term growth',
    'Actionable reporting and operational intelligence',
];

const sidebarItems = [
    'Custom CRM modules by department',
    'Role-based access and security controls',
    'API integrations and workflow automation',
    'Continuous product and process improvements',
];

const faqs = [
    {
        q: 'Can you build a fully custom CRM?',
        a: 'Yes. We design and develop CRM systems around your specific business processes, user roles, and reporting requirements.',
    },
    {
        q: 'Do you also work with existing CRM platforms?',
        a: 'Yes. We handle implementation, customization, migration, and integration for enterprise and cloud CRM platforms.',
    },
    {
        q: 'Do you provide post-launch support?',
        a: 'Absolutely. We offer maintenance, performance optimization, feature enhancement, and technical support after deployment.',
    },
];

export default function CrmDevelopmentPage() {
    return (
        <ContentLandingPageTemplate
            theme='orange'
            title='CRM Development Company'
            description='We design and develop custom CRM solutions that centralize customer data, automate sales operations, and improve business decision-making.'
            badge='Custom CRM Solutions'
            heroImage='/og-default.webp'
            includedTitle='Our CRM Offerings'
            includedItems={includedItems}
            benefitsTitle='Why Choose Digital Solution 360 for CRM'
            benefitsItems={benefitsItems}
            sidebarTitle='Implementation Focus'
            sidebarItems={sidebarItems}
            faqs={faqs}
            ctaText='Talk to CRM Expert'
        />
    );
}
