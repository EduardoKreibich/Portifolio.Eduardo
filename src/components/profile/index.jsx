import img from "./../../assets/img/profile.jpeg";
import { StyledContainer, StyledImg } from "./styled";


export const Profile = () => {
  return (
    <StyledContainer className="sobre">
      <div className="containerBio">
        <h1 className="name">Eduardo Foletto Kreibich</h1>
        <h2 className='typing'>Desenvolvedor Full Stack</h2>
    
        <div className="bio">
          <p>Sou profissional da área de Desenvolvimento Fullstack.</p>  

          <p>Tenho experiência na criação de soluções tecnológicas, incluindo elaboração de APIs RESTful, automação de processos e integração entre sistemas.</p>  

          <p>Possuo conhecimento em tecnologias front-end, como HTML, CSS, JavaScript, React.js e TypeScript, e back-end, como Node.js, Express.js, Java, Python e C#, aplicando boas práticas de desenvolvimento, incluindo Clean Code e Design Patterns.</p>  

          <p>Também tenho experiência com bancos de dados relacionais como MySQL e PostgreSQL, com vivência em modelagem de dados e otimização de desempenho.</p>  

          <p>Apresento conhecimento em metodologias ágeis, como Scrum, e ferramentas de conteinerização, como Docker.</p>  

          <p>Responsabilidade, planejamento, boa comunicação e visão sistêmica são habilidades que definem meu perfil.</p>  

          <p>Com foco em resultados, meu propósito é fazer a diferença e entregar excelência em cada oportunidade!</p>  

        </div>
      </div>
      <StyledImg src={img} alt="" />
    </StyledContainer>
  );
};
