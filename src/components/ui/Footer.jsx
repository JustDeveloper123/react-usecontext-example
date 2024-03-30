import { Container } from '@ui';

const Footer = () => {
  return (
    <footer className="bg-gray-400">
      <Container className="py-1">
        <p className="text-center">
          Copyright 2024. tg:{' '}
          <a
            href="https://t.me/Fermi_Paradox"
            className="ring-green-400 hover:text-blue-700 hover:underline focus:ring"
          >
            @Fermi_Paradox
          </a>
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
