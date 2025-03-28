
import { StyledContainer} from "./styled"
import { Contact } from "../../components/contact"
import { Profile } from "../../components/profile"
import { Project } from "../../components/projects"
import { Technology } from "../../components/technology"
import PropTypes from 'prop-types';

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

Portifolio.propTypes = {
    setTheme: PropTypes.func.isRequired, // Adiciona a validação da prop
};