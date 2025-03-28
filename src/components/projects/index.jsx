
import { StyledButtonGithub, StyledContainer } from "./style"
import github from "../../assets/img/github.svg"
import imgFashionStore from "../../assets/img/fashion-store.png"
import imgFastFood from "../../assets/img/fast-food.png"
import imgFinanceControl from "../../assets/img/Finance-Control.png"
import imgBD from "../../assets/img/bd.png"
import imgContactBook from "../../assets/img/contact-book.png"



export const Project= () => {
    return(
        <StyledContainer>
            <h2>Principais Projetos</h2>
            <div className="links">
                <div className="projects">
                    <a href="https://hamburguria-kenzie-cdfrv2oek-eduardokreibich.vercel.app/" target="blank"><img className="img-project" src={imgFastFood} alt=""/></a> 
                    <div className="iconsProject">
                    <p>E-comerce hamburgueria "Front End"</p>
                        <a href="https://github.com/EduardoKreibich/hamburgueria_e-comerce" target="blank"><StyledButtonGithub src={github} alt="" /></a>
                    </div>
                </div>
                <div className="projects">
                    <a href="https://nukenzie-2twykubd1-eduardokreibich.vercel.app/" target="blank"><img className="img-project" src={imgFinanceControl} alt="" /></a>
                    <div className="iconsProject">
                        <p>Plataforma de Lançamentos Financeiros "Front End"</p>
                        <a href="https://github.com/EduardoKreibich/lancamentos_financeiros" target="blank"><StyledButtonGithub src={github} alt="" /></a>
                    </div>
                </div>
                <div className="projects">
                    <a href="https://fashion-store-entrega-template-grupo6-alex-three.vercel.app/" target="blank"><img className="img-project" src={imgFashionStore} alt="" /></a>
                    <div className="iconsProject">
                        <p>E-comerce Fashion Store "Front End"</p>
                        <a href="https://github.com/EduardoKreibich/contact-directory" target="blank"><StyledButtonGithub src={github} alt="" /></a>
                    </div>
                </div>
                <div className="projects">
                    <a href="https://github.com/EduardoKreibich/contact-directory" target="blank"><img className="img-project" src={imgContactBook} alt="" /></a>
                    <div className="iconsProject">
                        <p>Plataforma de Agenda de Contatos "Full Stack"</p>
                        <a href="https://github.com/EduardoKreibich/contact-directory" target="blank"><StyledButtonGithub src={github} alt="" /></a>
                    </div>
                </div>
                <div className="projects">
                    <a href="https://fashion-store-entrega-template-grupo6-alex-three.vercel.app/" target="blank"><img className="img-project" src={imgBD} alt="" /></a>
                    <div className="iconsProject">
                        <p>Banco de Dados Relacional para Gestão de Cursos e Alunos em EAD "Back End"</p>
                        <a href="https://github.com/EduardoKreibich/Projeto-Final-Python" target="blank"><StyledButtonGithub src={github} alt="" /></a>
                    </div>
                </div>

            </div>
        </StyledContainer>
    )
}