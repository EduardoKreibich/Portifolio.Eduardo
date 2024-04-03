
import { StyledContainer} from "./styled"
import { Contact } from "../../components/contact"
import { Profile } from "../../components/profile"
import { Project } from "../../components/projects"
import { Technology } from "../../components/technology"


export const Portifolio = ({setTheme}) => {
    return(
        <StyledContainer>
            <Contact setTheme={setTheme}/>
            <Profile/>
            <Technology/>
            <Project/>
        </StyledContainer>
    )
}