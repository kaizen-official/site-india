/**
 * Service content data extracted from blade templates.
 * Used by city pages ([slug]) and market-we-serve pages.
 * {cityName} placeholders are replaced at render time.
 */

const SERVICE_CARDS = {
  'Digital Marketing': [
    { title: 'Lead Generation', desc: 'Unlock a flood of qualified leads with our Lead Generation Services. We employ advanced techniques and proven strategies to identify, engage, and convert high-potential prospects.' },
    { title: 'Google Ads Services', desc: 'Certified experts craft campaigns — from keyword research to optimization — for maximum visibility and CTR.' },
    { title: 'SEO Services', desc: 'Boost organic rankings and targeted traffic with cutting-edge SEO strategies.' },
    { title: 'SMO Services', desc: 'Build community, engage audiences, and amplify brand presence on social platforms.' },
    { title: 'PPC Services', desc: 'High-intent, multi-network ad campaigns focused on conversions.' },
    { title: 'ORM Services', desc: 'Monitor, manage, and improve online reputation to build trust & credibility.' },
    { title: 'Mobile App Development', desc: 'Custom, feature-rich iOS/Android apps built for performance and UX.' },
    { title: 'Web Development Services', desc: 'Stunning, responsive websites optimized for conversions.' },
    { title: 'Flipkart Marketing', desc: 'Optimize listings, improve visibility, and drive conversions on Flipkart.' },
    { title: 'Amazon Marketing Services', desc: 'Listing optimization & ads to maximize discoverability and sales on Amazon.' },
    { title: 'Facebook Marketing', desc: 'Compelling creatives & targeting strategies that amplify brand reach.' },
    { title: 'Mobile App Promotion', desc: 'ASO + paid ads to drive installs and meaningful engagement.' },
  ],

  'Web Development': [
    { title: 'Website Design', desc: 'Through the combination of creativity, usability, and functionality, our team constantly creates craft visually stunning websites that captivate your audience.' },
    { title: 'Web Development', desc: 'Through our expertise in web development, we transform ideas into fully functional and dynamic websites.' },
    { title: 'CMS Development', desc: 'With our CMS development expertise, we build powerful content management systems tailored to your needs.' },
    { title: 'E-commerce Website', desc: 'Our e-commerce website solutions deliver seamless online shopping experiences with secure payment gateways.' },
    { title: 'Dynamic Website Design', desc: 'Dynamic web design is at the core of modern digital experiences with real-time content updates.' },
    { title: 'Static Website Design', desc: 'Through static website design, we craft fast-loading, secure websites perfect for portfolios and landing pages.' },
    { title: 'Social Media Websites', desc: 'Custom social media website development for businesses to flourish and maintain strong online reputation.' },
    { title: 'Blogging Website', desc: 'Unleash your creativity with a user-friendly blogging website. Share your thoughts, expertise, and passions with a global audience through engaging content.' },
    { title: 'Tour & Travel Website', desc: 'Explore the world with a captivating travel website. Discover breathtaking destinations, plan dream vacations, and create unforgettable memories.' },
    { title: 'Schooling & College Website', desc: 'Unlock your educational journey with an innovative schooling and college website. Find information on programs, admissions, faculty, and resources seamlessly.' },
    { title: 'B2B Service Website', desc: 'Experience seamless business interactions with a dynamic B2B service website. Connect with partners, explore services, and propel growth effectively.' },
    { title: 'Law Firm Website Design', desc: 'Showcase your legal expertise with a professional law firm website design. Communicate your firm\'s values, services, and success stories convincingly.' },
  ],

  'Google Business': [
    { title: 'GMB Company', desc: 'We are a leading Google My Business management company helping businesses maximize their local search visibility and customer engagement.' },
    { title: 'GMB Services', desc: 'Complete GMB optimization services including profile setup, verification, reviews management, and local SEO integration.' },
    { title: 'Best GMB Agency', desc: 'Recognized as one of the best GMB agencies, we deliver measurable results in local search rankings and customer actions.' },
    { title: 'GMB Near Me', desc: 'Optimize your Google Business Profile for "near me" searches and drive foot traffic from nearby customers.' },
    { title: 'GMB Expert', desc: 'Our certified GMB experts handle everything from profile creation to ongoing optimization and performance tracking.' },
    { title: 'GMB Optimization', desc: 'Data-driven GMB optimization strategies to improve your visibility in Google Maps and local search results.' },
    { title: 'GMB Listing Management', desc: 'Complete management of your Google Business listings including posts, photos, Q&A, and review responses.' },
    { title: 'GMB Profile Setup', desc: 'Professional GMB profile setup with accurate business information, categories, and service area configuration.' },
    { title: 'GMB Reviews Management', desc: 'Strategic review management including monitoring, professional responses, and review generation campaigns.' },
    { title: 'GMB Ranking Services', desc: 'Proven strategies to improve your GMB ranking in the local pack and map results for your target keywords.' },
  ],

  'Social Media': [
    { title: 'Social Media Marketing Company', desc: 'Full-service social media marketing company delivering brand awareness, engagement, and lead generation across all platforms.' },
    { title: 'Social Media Management', desc: 'Complete social media management including content creation, scheduling, community management, and performance analytics.' },
    { title: 'Instagram Marketing', desc: 'Strategic Instagram marketing with compelling visuals, stories, reels, and targeted ad campaigns for maximum engagement.' },
    { title: 'Facebook Marketing', desc: 'Data-driven Facebook marketing strategies including page management, ad campaigns, and audience targeting.' },
    { title: 'LinkedIn Marketing', desc: 'Professional LinkedIn marketing for B2B lead generation, thought leadership, and corporate brand building.' },
    { title: 'YouTube Marketing', desc: 'YouTube channel management, video optimization, and advertising to build your brand and drive subscribers.' },
    { title: 'Influencer Marketing', desc: 'Strategic influencer partnerships to amplify your brand message and reach new audiences authentically.' },
    { title: 'Content Creation', desc: 'Professional social media content creation including graphics, videos, reels, stories, and copywriting.' },
    { title: 'Social Media Advertising', desc: 'Targeted social media advertising campaigns across platforms to drive conversions and maximize ROI.' },
    { title: 'Social Media Strategy', desc: 'Comprehensive social media strategy development aligned with your business goals and target audience.' },
    { title: 'Community Management', desc: 'Active community management to build brand loyalty, handle customer queries, and foster engagement.' },
    { title: 'Social Media Analytics', desc: 'Detailed social media analytics and reporting to track performance, measure ROI, and optimize strategies.' },
  ],

  'Wordpress Development': [
    { title: 'WordPress Development Company', desc: 'Leading WordPress development company delivering custom, scalable, and feature-rich websites for businesses of all sizes.' },
    { title: 'WordPress Website Developer', desc: 'Expert WordPress developers creating responsive, SEO-friendly websites with custom themes and functionality.' },
    { title: 'WordPress Development Services', desc: 'Comprehensive WordPress development services from theme customization to plugin development and site optimization.' },
    { title: 'WooCommerce Development', desc: 'Complete WooCommerce store development with payment gateway integration, inventory management, and custom features.' },
    { title: 'WordPress Theme Development', desc: 'Custom WordPress theme development that matches your brand identity with pixel-perfect design and clean code.' },
    { title: 'WordPress Plugin Development', desc: 'Custom plugin development to extend WordPress functionality and meet your specific business requirements.' },
    { title: 'WordPress Migration', desc: 'Seamless WordPress migration services to move your website from any platform to WordPress without data loss.' },
    { title: 'WordPress Maintenance', desc: 'Ongoing WordPress maintenance including updates, security patches, backups, and performance optimization.' },
    { title: 'WordPress SEO Services', desc: 'WordPress-specific SEO optimization including speed, schema markup, content optimization, and technical SEO.' },
    { title: 'WordPress Security', desc: 'Enterprise-grade WordPress security solutions including malware scanning, firewall setup, and vulnerability patching.' },
    { title: 'WordPress Customization', desc: 'Complete WordPress customization services to tailor your website exactly to your business needs and brand.' },
    { title: 'WordPress Support', desc: '24/7 WordPress support and troubleshooting to keep your website running smoothly and efficiently.' },
  ],

  'Content Writing': [
    { title: 'Content Writing Services', desc: 'Professional content writing services delivering SEO-optimized, engaging content that drives traffic and conversions.' },
    { title: 'Blog Writing', desc: 'Expert blog writing services to establish thought leadership, improve SEO rankings, and engage your target audience.' },
    { title: 'Website Content Writing', desc: 'Compelling website content that communicates your brand message, engages visitors, and drives conversions.' },
    { title: 'SEO Content Writing', desc: 'SEO-optimized content writing that ranks higher in search engines while maintaining readability and engagement.' },
    { title: 'Technical Writing', desc: 'Clear, accurate technical writing for documentation, user guides, manuals, and knowledge base articles.' },
    { title: 'Copywriting Services', desc: 'Persuasive copywriting for ads, landing pages, emails, and marketing materials that convert readers into customers.' },
    { title: 'Social Media Content', desc: 'Engaging social media content creation including captions, hashtag strategy, and platform-specific copy.' },
    { title: 'Article Writing', desc: 'Professional article writing services including interviews, customer stories, press releases, and industry insights.' },
    { title: 'Product Description Writing', desc: 'Compelling product descriptions that highlight benefits, features, and unique selling points to boost sales.' },
    { title: 'Email Content Writing', desc: 'Effective email content writing for newsletters, drip campaigns, promotional emails, and customer communication.' },
  ],
};

const SERVICE_FAQS = {
  'Digital Marketing': [
    { q: 'What does a digital marketing strategy include?', a: 'A comprehensive digital marketing strategy includes SEO, PPC advertising, social media marketing, content marketing, email campaigns, and analytics tracking. We create a customized mix based on your business goals, target audience, budget, and industry competition.' },
    { q: 'How much should I budget for digital marketing in {cityName}?', a: 'Budget depends on your goals, industry, and competition. Small businesses typically start with ₹15,000-₹50,000/month, while mid-size companies invest ₹50,000-₹2,00,000/month. We offer flexible packages and always recommend starting with a focused approach.' },
    { q: 'How long before I see results from digital marketing?', a: 'PPC ads can generate leads within days. Social media engagement improves within 2-4 weeks. SEO typically takes 3-6 months for significant ranking improvements. Content marketing shows compounding results over 6-12 months.' },
    { q: 'What digital marketing services do you offer in {cityName}?', a: 'We provide a full suite of digital marketing services in {cityName} including SEO, Google Ads, social media marketing, content marketing, email campaigns, and performance analytics — all tailored to your local market.' },
    { q: 'How do you measure the ROI of digital marketing campaigns?', a: 'We track key metrics including website traffic, lead generation, conversion rates, cost per acquisition, customer lifetime value, and revenue attribution. Our custom dashboards provide real-time visibility into campaign performance.' },
    { q: 'Can you handle both B2B and B2C marketing in {cityName}?', a: 'Absolutely. B2B strategies focus on LinkedIn, content marketing, and lead nurturing funnels. B2C strategies leverage social media, influencer partnerships, and performance marketing. We tailor the approach to your specific audience.' },
    { q: 'Do you offer customized marketing plans for {cityName} businesses?', a: 'Yes, every strategy is customized for {cityName}. We research local competition, audience behavior, and market trends to create campaigns that resonate with your specific customer base.' },
    { q: 'What makes Digital Solution 360 different from other agencies?', a: 'We combine data-driven strategies with creative execution, offer transparent reporting, and focus on ROI. Our local expertise across 790+ Indian cities gives us unmatched understanding of regional markets.' },
    { q: 'Do you provide monthly reporting and analytics?', a: 'Yes, we provide detailed monthly reports with campaign performance metrics, traffic analytics, lead tracking, ROI calculations, and actionable recommendations for optimization.' },
    { q: 'Can I start with a small budget and scale up later?', a: 'Absolutely. We recommend starting with a focused strategy, measuring results, and scaling based on what works best. Many of our clients started small and gradually increased investment as they saw returns.' },
  ],

  'Web Development': [
    { q: 'What types of websites do you develop in {cityName}?', a: 'We develop all types of websites including corporate websites, e-commerce stores, CMS-based sites, web applications, landing pages, portfolio sites, educational platforms, and custom web solutions.' },
    { q: 'How long does it take to develop a website?', a: 'Timeline depends on complexity. A basic website takes 2-4 weeks, a medium-complexity site takes 4-8 weeks, and complex web applications can take 8-16 weeks. We provide detailed timelines during project scoping.' },
    { q: 'Do you provide website maintenance services in {cityName}?', a: 'Yes, we offer comprehensive maintenance packages including regular updates, security monitoring, backup management, performance optimization, and technical support to keep your website running smoothly.' },
    { q: 'Will my website be mobile-friendly and responsive?', a: 'Absolutely. All our websites are built with responsive design, ensuring they look and function perfectly on desktops, tablets, and mobile devices. Mobile-first design is our standard practice.' },
    { q: 'Do you build SEO-friendly websites?', a: 'Yes, SEO is baked into our development process. We implement clean code, fast loading speeds, proper URL structures, schema markup, meta tags, and other SEO best practices from the ground up.' },
    { q: 'What technologies do you use for web development?', a: 'We work with React, Next.js, Node.js, WordPress, PHP, MySQL, MongoDB, and more. We choose the right technology stack based on your project requirements, scalability needs, and budget.' },
    { q: 'How much does website development cost in {cityName}?', a: 'Costs vary based on complexity and features. Basic websites start from ₹15,000, e-commerce sites from ₹40,000, and custom web applications from ₹1,00,000. We provide detailed quotes after understanding your requirements.' },
    { q: 'Can you redesign my existing website?', a: 'Yes, we specialize in website redesigns. We analyze your current site, understand your goals, and create a modern, high-performing website while preserving your existing content and SEO rankings.' },
  ],

  'Google Business': [
    { q: 'What is Google My Business and why does my {cityName} business need it?', a: 'Google My Business is a free tool by Google that lets you manage how your business appears on Google Search and Maps. For businesses in {cityName}, an optimized GMB profile ensures you show up when local customers search for your services.' },
    { q: 'How long does it take to set up and verify a GMB profile in {cityName}?', a: 'We typically complete the full setup within 2-3 business days. Google verification via postcard takes 5-14 days, though we also assist with phone or email verification when available.' },
    { q: 'Can you help manage reviews for my {cityName} business?', a: 'Yes. Our review management service includes monitoring new reviews, crafting professional responses, and implementing strategies to encourage satisfied customers to leave positive feedback.' },
    { q: 'How do you optimize a GMB listing for {cityName}?', a: 'We optimize every element — business description with local keywords, categories, service areas, photos, posts, Q&A, and attributes — all tailored specifically for the {cityName} market.' },
    { q: 'Do you provide GMB services for multiple locations in {cityName}?', a: 'Yes, we manage multi-location GMB profiles for businesses with several branches. Each location gets individually optimized content, photos, and review management.' },
    { q: 'What results can I expect from GMB optimization in {cityName}?', a: 'Most businesses see a 2-5× increase in profile views, map appearances, and customer actions (calls, direction requests, website visits) within the first 2-3 months of optimization.' },
  ],

  'Social Media': [
    { q: 'Which social media platforms should my {cityName} business be on?', a: 'It depends on your audience. B2C businesses benefit from Instagram, Facebook, and YouTube. B2B companies should focus on LinkedIn. We analyze your target market in {cityName} and recommend the right platform mix.' },
    { q: 'How much does social media marketing cost in {cityName}?', a: 'Packages typically range from ₹10,000-₹75,000/month depending on platforms, content volume, and ad spend. We create custom plans based on your goals and budget.' },
    { q: 'How often should I post on social media?', a: 'We recommend 3-5 posts per week for most platforms. Consistency matters more than volume. Our team creates a content calendar tailored to your {cityName} audience and platform algorithms.' },
    { q: 'Do you create content for social media campaigns?', a: 'Yes, our team handles everything — graphic design, video production, copywriting, hashtag research, and content scheduling. You just approve and we execute.' },
    { q: 'How do you measure social media ROI?', a: 'We track engagement rates, reach, follower growth, website traffic from social, leads generated, and conversions. Monthly reports show exactly how your social media investment is performing.' },
    { q: 'Can you run paid social media campaigns for my {cityName} business?', a: 'Absolutely. We create and manage targeted ad campaigns on Facebook, Instagram, LinkedIn, and YouTube with detailed audience targeting for your {cityName} market.' },
  ],

  'Wordpress Development': [
    { q: 'Is WordPress good for web development?', a: 'Yes, it is the most widely used content management system worldwide. It\'s one of the most preferred choices among developers for building websites and online stores.' },
    { q: 'How long does it take to develop a WordPress website?', a: 'It depends on your specific requirements. If your development needs are limited, it takes less time. Digital Solution 360 has a track record of building websites as soon as possible.' },
    { q: 'Can you make my website mobile-friendly?', a: 'Yes, we do all possible things to make your website more attractive and user-friendly. We create websites so accessible that they are also mobile-friendly.' },
    { q: 'Why should I trust Digital Solution 360 for WordPress development?', a: 'We have a team of skilled and experienced WordPress designers and developers who are dedicated to creating unique and modern approach websites for business. Customer satisfaction is our top priority.' },
    { q: 'What is a WordPress development agency?', a: 'It is typically made up of project managers, designers, developers, and other roles that come together to design and develop projects for their clients using WordPress.' },
    { q: 'How much does a WordPress agency cost?', a: 'It depends from agency to agency but Digital Solution 360 provides very affordable services where you can get custom design service and custom development with unique features.' },
  ],

  'Content Writing': [
    { q: 'What are the types of content writing?', a: 'There are many types including blog writing, article writing (interviews, customer stories, press releases), ghost writing, technical writing, social media writing, email writing, and ad & promo writing.' },
    { q: 'What makes a good content writer?', a: 'Key skills include good written communication, proofreading and editing abilities, imagination, knowledge of target readers, SEO optimization tools familiarity, time management, research analysis, and storytelling.' },
    { q: 'How much do content writers charge in {cityName}?', a: 'A professional content writer in {cityName} charges between 60 paise to 4 Rs per word. It varies according to skill and expertise of the writers.' },
    { q: 'Can you write content for my website?', a: 'Yes, we have a team of professional content writers with expertise in writing varieties of website content and content creation techniques for A-to-Z type of writing according to your audience.' },
    { q: 'Is content writing a good career option?', a: 'Content writing is an evergreen career. Even in a world of AI, clients prefer professional human writers who understand the basics and targeted audience. It is a profitable career at individual and team levels.' },
  ],
};

export { SERVICE_CARDS, SERVICE_FAQS };
