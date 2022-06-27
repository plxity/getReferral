import { FooterContainer } from './styles';
function Footer() {
  return (
    <FooterContainer>
      <span>Powered by</span>
      <a href="https://peerlist.io/" target="_blank">
        <img src="/icons/peerlistLogo.svg" alt="Peerlist logo" />
      </a>
    </FooterContainer>
  );
}

export default Footer;
