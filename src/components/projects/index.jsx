
import { StyledButtonPrimary } from "../../styles/buttons"
import { StyledContainer } from "./style"


export const Project= () => {
    return(
        <StyledContainer>
            <h2>Projetos</h2>
            <div className="links">
                <div className="projects">
                    <p>E-comerce hamburgueria</p>
                    <StyledButtonPrimary href="https://hamburguria-kenzie-cdfrv2oek-eduardokreibich.vercel.app/" target="blank">Hambugueria</StyledButtonPrimary>
                </div>
                <div className="projects">
                    <p>Plataforma de Lançamentos Financeiros</p>
                    <StyledButtonPrimary href="https://nukenzie-2twykubd1-eduardokreibich.vercel.app/" target="blank">Nu Kenzie</StyledButtonPrimary>
                </div>
                <div className="projects">
                    <p>Plataforma de Agenda de Contatos com API</p>
                    <StyledButtonPrimary href="https://github.com/EduardoKreibich/contact-directory" target="blank">Contact Directory</StyledButtonPrimary>
                </div>
            </div>
        </StyledContainer>
    )
}