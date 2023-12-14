import imgLinkedin from "../../assets/img/linkedin.svg"
import imgInstagram from "../../assets/img/instagram.svg"
import { StyledContainer, StyledIcons } from "./style"


export const Contact = () => {
    return(
        <>
            <StyledContainer className="header">
                <p>email: kreibicheduardo@gmail.com</p>
                <div>
                    <a href="https://www.linkedin.com/in/eduardo-kreibich-5971a51a2/" target="blank"><StyledIcons src={imgLinkedin} alt="" /></a>
                    <a href="https://www.instagram.com/dudukreibich/" target="blank"><StyledIcons src={imgInstagram} alt="" /></a>
                </div>
            </StyledContainer>
        </>
    )
}