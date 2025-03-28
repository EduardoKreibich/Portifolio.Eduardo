import imgLinkedin from "../../assets/img/linkedin.svg";
// import imgInstagram from "../../assets/img/instagram.svg"
import imgGithub from "../../assets/img/github-img.svg";


import { StyledContainer, StyledIcons, StyledSvg } from "./style";

import dark from "../../assets/img/dark.svg";
import sun from "../../assets/img/sun.svg";



export const Contact = ({setTheme}) => {
  return (
    <>
      <StyledContainer className="header">
        <div>
          <StyledSvg src={sun} onClick={()=>setTheme(true)}/>
          <StyledSvg src={dark} onClick={()=>setTheme(false)}/>
        </div>
        <p>email: kreibicheduardo@gmail.com</p>
        <div>
          <a
            href="https://www.linkedin.com/in/eduardo-kreibich-5971a51a2/"
            target="blank"
          >
            <StyledIcons src={imgLinkedin} alt="" />
          </a>
          {/* <a href="https://www.instagram.com/dudukreibich/" target="blank"><StyledIcons src={imgInstagram} alt="" /></a> */}
          <a href="https://github.com/EduardoKreibich" target="blank">
            <StyledIcons src={imgGithub} alt="" />
          </a>
        </div>
      </StyledContainer>
    </>
  );
};
