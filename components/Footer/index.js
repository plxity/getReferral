import { FooterContainer, IconContainer } from './styles';
function Footer() {
  return (
    <FooterContainer>
      <span>Powered by</span>
      <IconContainer>
        <a href="https://peerlist.io/" target="_blank">
          <img src="/icons/peerlistLogo.svg" alt="Peerlist logo" />
        </a>
        <a href="https://www.linode.com/" target="_blank">
          <img src="/icons/linodeIcon.webp" alt="Linode logo" />
        </a>
        <a href="https://hashnode.com/" target="_blank">
          <img src="/icons/hashnodeIcon.png" alt="hashnode logo" />
        </a>
      </IconContainer>
    </FooterContainer>
  );
}

export default Footer;
