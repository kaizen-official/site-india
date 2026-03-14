import CityClient from '../../[slug]/cityClient';
import { notFound } from 'next/navigation';

const API_BASE = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5001/api';
const SITE_URL = 'https://www.digitalsolution360.in';

const CATEGORY_SCHEMA = {
  'Google Business': {
    serviceName: 'Google My Business Optimization',
    image: '/gmb-og.webp',
  },
  'Digital Marketing': {
    serviceName: 'Digital Marketing Services',
    image: '/digital-marketing-og.webp',
  },
  'Web Development': {
    serviceName: 'Web Development Services',
    image: '/og-home.webp',
  },
  'Social Media': {
    serviceName: 'Social Media Marketing Services',
    image: '/social-media-og.webp',
  },
  'Content Writing': {
    serviceName: 'Content Writing Services',
    image: '/content-writing-og.webp',
  },
  'Wordpress Development': {
    serviceName: 'WordPress Development Services',
    image: '/wordpress-og.webp',
  },
};

async function fetchMetroCity(slug) {
  try {
    const res = await fetch(`${API_BASE}/cities/metro/${slug}`, {
      next: { revalidate: 3600 },
    });
    const json = await res.json();
    if (json.success && json.data) return json.data;
  } catch {}
  return null;
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const city = await fetchMetroCity(slug);
  if (!city) return {};

  const catSchema = CATEGORY_SCHEMA[city.category_name] || CATEGORY_SCHEMA['Digital Marketing'];
  const cityName = city.city || '';
  const title = city.meta_title || `${catSchema.serviceName} in ${cityName}`;
  const description = city.meta_description || `Professional ${catSchema.serviceName.toLowerCase()} tailored to your local business needs in ${cityName}. Reach our experts at +91 99905 56217.`;
  const keywords = city.meta_keyword || `${catSchema.serviceName}, ${cityName}, digital marketing ${cityName}`;
  const ogImage = city.image || catSchema.image;

  return {
    title,
    description,
    keywords,
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/metro-cities/${slug}`,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default async function MetroCityPage({ params }) {
  const { slug } = await params;
  const city = await fetchMetroCity(slug);

  if (!city) {
    notFound();
  }

  return <CityClient />;
}
