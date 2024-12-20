import Script from 'next/script';

export const MicrosoftClarity = ({ id, content }: { id: string; content: string }) => {
  return (
    <>
      <meta name="msvalidate.01" content={content} />
      <Script strategy={'afterInteractive'} id={'microsoft-clarity'}>
        {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window, document, "clarity", "script", "${id}");`}
      </Script>
    </>
  );
};
