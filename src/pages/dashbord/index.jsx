
import { StyledContainer} from "./styled"
import { Contact } from "../../components/contact"
import { Profile } from "../../components/profile"
import { Project } from "../../components/projects"
import { Technology } from "../../components/technology"


export const Portifolio = () => {
    return(
        <StyledContainer>
            <Contact/>
            <Profile/>
            <Technology/>
            <Project/>
        </StyledContainer>
    )
}