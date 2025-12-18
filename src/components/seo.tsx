import { Metadata } from 'next';
import { configuration } from '@/configuration/site';

export interface PageProps {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

interface PageSEOProps {
  title: string;
  description?: string;
  image?: string;

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

export function genPageMetadata({ title, description, image, ...rest }: PageSEOProps): Metadata {
  description = description
    ? `${description}|${configuration.title}`
    : `${configuration.description}|${configuration.title}`;
  return {
    title: title,
    description: description,
    openGraph: {
      title: title,
      description: description,
      url: './',
      siteName: configuration.title,
      images: image ? [image] : [configuration.socialBanner],
      locale: configuration.locale,
      type: 'website',
    },
    twitter: {
      title: title,
      card: 'summary_large_image',
      images: image ? [image] : [configuration.socialBanner],
    },
    ...rest,
  };
}
