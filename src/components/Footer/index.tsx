import { motion } from 'framer-motion';

import { FooterWrapper } from './styles';

const Footer: React.FC = () => {
  return (
    <FooterWrapper
      as={motion.footer}
      transition={{ delay: 0.5, duration: 0.5 }}
      variants={{
        show: { opacity: 1 },
        hidden: { opacity: 0 },
      }}
      initial="hidden"
      animate="show"
    >
      <a href="https://www.alura.com.br/">
        <img src="alura-logo-white.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado por{' '}
        <a href="https://github.com/monteiro-alexandre">
          <span>Alexandre Monteiro</span>
        </a>{' '}
        durante a{' '}
        <a href="https://www.alura.com.br/">
          <span>Imersão React da Alura</span>
        </a>
      </p>
    </FooterWrapper>
  );
};

export default Footer;
