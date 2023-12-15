
import { StyledButtonPrimary } from "../../styles/buttons"
import { StyledButtonGithub, StyledContainer } from "./style"
import github from "../../assets/img/github.svg"


export const Project= () => {
    return(
        <StyledContainer>
            <h2>Projetos</h2>
            <div className="links">
                <div className="projects">
                    <p>E-comerce hamburgueria</p>
                    <div className="iconsProject">
                        <StyledButtonPrimary href="https://hamburguria-kenzie-cdfrv2oek-eduardokreibich.vercel.app/" target="blank">Hamburgueria</StyledButtonPrimary>
                        <a href="https://github.com/EduardoKreibich/hamburgueria_e-comerce" target="blank"><StyledButtonGithub src={github} alt="" /></a>
                    </div>
                </div>
                <div className="projects">
                    <p>Plataforma de Lançamentos Financeiros</p>
                    <div className="iconsProject">
                        <StyledButtonPrimary    ledButtonPrimary href="https://nukenzie-2twykubd1-eduardokreibich.vercel.app/" target="blank">Nu Kenzie</StyledButtonPrimary>
                        <a href="https://github.com/EduardoKreibich/lancamentos_financeiros" target="blank"><StyledButtonGithub src={github} alt="" /></a>
                    </div>
                </div>
                <div className="projects">
                    <p>Plataforma de Agenda de Contatos com API</p>
                    <div className="iconsProject">
                        <StyledButtonPrimary href="https://github.com/EduardoKreibich/contact-directory" target="blank">Contact Directory</StyledButtonPrimary>
                        <a href="https://github.com/EduardoKreibich/contact-directory" target="blank"><StyledButtonGithub src={github} alt="" /></a>
                    </div>
                </div>
            </div>
        </StyledContainer>
    )
}