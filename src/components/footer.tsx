import { configuration } from '@/configuration/site';

export const Footer = () => {
  return (
    <footer
      id="footer"
      className="text-muted-foreground flex flex-col items-center justify-center space-y-6 py-12 text-sm"
    >
      <hr className="mx-auto w-11/12" />
      <section className="container space-y-2 text-center">
        <h3>&copy; 2024 {configuration.title}</h3>
        <p>{configuration.description}</p>
        <p>❤️ Made by {configuration.author}</p>
      </section>
    </footer>
  );
};
