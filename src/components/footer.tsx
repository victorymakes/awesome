import { configuration } from '@/configuration/site';

export const Footer = () => {
  return (
    <footer id="footer" className={'space-y-12 py-12'}>
      <hr className="mx-auto w-11/12" />
      <section className="container space-y-2 text-center">
        <h3>&copy; 2024 {configuration.title}</h3>
        <div className={'font-light'}>{configuration.description}</div>
      </section>
    </footer>
  );
};
