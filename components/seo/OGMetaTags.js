"use client";

export default function OGMetaTags({ cityName, serviceName, pageSlug, image }) {
  const baseUrl = 'https://www.digitalsolution360.in';
  const phone = '9990556217';
  const defaultImage = `${baseUrl}/public/frontend/img/Digital-marketing-agency-digitalsolution360.webp`;

  const location = cityName || 'India';
  const service = serviceName || 'Digital Marketing';
  const ogImage = image || defaultImage;
  const ogUrl = pageSlug ? `${baseUrl}/${pageSlug}` : baseUrl;

  // Generate title
  const ogTitle = cityName
    ? `Best ${service} Company in ${cityName} | Call: ${phone}`
    : `Best ${service} Services in India | Digital Solution 360`;

  // Generate description
  const ogDescription = cityName
    ? `Discover why we're the best ${service.toLowerCase()} company in ${cityName}! 📈 Expert strategies tailored for your success. Call 📞 ${phone} today and grow your business! 🚀`
    : `Digital Solution 360 offers professional ${service.toLowerCase()} services across India. 📈 Expert strategies, proven results. Call 📞 ${phone} for a free consultation! 🚀`;

  // Generate keywords
  const keywordVariants = cityName
    ? [
        `Best online marketing company in ${cityName}`,
        `Leading digital marketing firm in ${cityName}`,
        `Best PPC services in ${cityName}`,
        `Top-rated SEO agency in ${cityName}`,
        `Social media marketing company in ${cityName}`,
        `Best content marketing services in ${cityName}`,
        `Local SEO experts in ${cityName}`,
        `Best branding agency in ${cityName}`,
        `Affordable digital marketing company in ${cityName}`,
        `Best website marketing company in ${cityName}`,
        `Performance marketing agency in ${cityName}`,
        `Professional SEO services in ${cityName}`,
        `Best Google Ads agency in ${cityName}`,
        `Top social media marketing agencies in ${cityName}`,
        `Best online advertising company in ${cityName}`,
        `Best ${service.toLowerCase()} in ${cityName}`,
        'np digital marketing',
        'gmb',
        'semrush',
      ]
    : [
        `Best ${service.toLowerCase()} company in India`,
        `Top ${service.toLowerCase()} agency`,
        `Professional ${service.toLowerCase()} services`,
        `Affordable ${service.toLowerCase()} company`,
        `${service} experts India`,
        'Digital Solution 360',
        'digital marketing',
        'SEO services',
        'web development',
        'social media marketing',
        'np digital marketing',
        'gmb',
        'semrush',
      ];

  const ogKeywords = keywordVariants.join(', ');

  return (
    <>
      <meta property="og:title" content={ogTitle} />
      <meta property="og:description" content={ogDescription} />
      <meta property="og:keywords" content={ogKeywords} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="Digital Solution 360" />
    </>
  );
}
