import Script from 'next/script';

export const GoogleAnalytics = ({ id }: { id: string }) => {
  return (
    <>
      {/*Google tag (gtag.js)*/}
      <Script
        strategy={'afterInteractive'}
        src={`https://www.googletagmanager.com/gtag/js?id=${id}`}
      />
      <Script strategy={'afterInteractive'} id={'google-analytics'}>
        {`window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);};gtag('js', new Date());gtag('config', '${id}');`}
      </Script>
    </>
  );
};
