import img from "./../../assets/img/Image.jpeg";
import { StyledContainer, StyledImg } from "./styled";


export const Profile = () => {
  return (
    <StyledContainer className="sobre">
      <div className="containerBio">
        <h1 className="name">Eduardo Foletto Kreibich</h1>
        <p className="bio">
          Olá! Sou um entusiasta da tecnologia com formação concluída em
          programação fullstack. Ao longo do meu curso, adquiri habilidades em
          construção de interfaces web interativas, desenvolvimento de
          servidores e manipulação de dados. Sou movido por desafios, resiliente
          e estou sempre em busca de oportunidades para crescer. Animado para
          aplicar minhas habilidades em projetos inovadores, estou pronto para
          criar algo incrível juntos!
        </p>
      </div>
      <StyledImg src={img} alt="" />
    </StyledContainer>
  );
};
