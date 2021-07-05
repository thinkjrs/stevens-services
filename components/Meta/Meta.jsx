import React from 'react';

export default function Meta() {
  const description = 'Stevens Services does lawn and landscape, snow and ice removal, in addition to remodeling and new construction throughout the Greater Kansas City area. Call us at 816-824-7289.';
  const title = 'Stevens Services (816) 824-7289';
  const link = 'https://stevens-services.com';
  const imageUrl = 'https://res.cloudinary.com/thinkjrs-dev/image/upload/c_scale,w_400/v1625448345/stevens-services/IMG_2414A_zexmov.jpg';

  return (
    <>
      <link rel="apple-touch-icon" sizes="180x180" href="/favicon/180.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon/32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon/16.png" />
      <link rel="manifest" href="/favicon/site.webmanifest" />
      <link rel="mask-icon" href="/favicon/512.png" color="#000000" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <meta name="msapplication-TileColor" content="#000000" />
      <meta name="msapplication-config" content="/favicon/browserconfig.xml" />
      <meta name="theme-color" content="#000" />
      <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
      <meta name="description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={link} />
      <meta property="og:type" content="website" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:url" content={link} />
      <meta name="twitter:image" content={imageUrl} />
      <title>{title}</title>
    </>
  );
}
