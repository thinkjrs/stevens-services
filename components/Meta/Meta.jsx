import React from 'react';
import Head from 'next/head';

export default function Meta() {
  const description = 'Stevens Services does lawn and landscape, snow and ice removal, in addition to remodeling and new construction throughout the Greater Kansas City area. Call us at 816-824-7289.';
  return (
    <Head>
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
      <meta
        property="og:image"
        content="https://res.cloudinary.com/thinkjrs-dev/image/upload/c_scale,w_400/v1625448345/stevens-services/IMG_2414A_zexmov.jpg"
      />
    </Head>
  );
}
