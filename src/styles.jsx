import styled from 'styled-components';
import BackgroundMorning from "./assets/img/bg-image-daytime.jpg"
import BackgroundNight from "./assets/img/bg-image-nighttime.jpg"

export const Container = styled.div `
    display: flex;
    flex-direction: column;
`

export const Home = styled.div`
    padding: 40px 120px;
    display: flex;
    flex-direction: column;
    align-items: center;    
    min-height: 100vh;
    width: 100vw;
    background-image: ${props => props.bg < 18? `url(${BackgroundMorning})`:`url(${BackgroundNight})`} ;
    background-repeat: no-repeat;
    ::before{
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 1;
        background: rgba(0, 0, 0, 0.4);
    }
    @media screen and (max-width: 992px){
        padding: 30px 60px;
        background-size: cover;
        background-position: center;
    }
    @media screen and (max-width: 600px){
        padding: 13px 26px;
    }
`;

export const Toggle = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 50px;
  right: 100px;
  border-radius: 30px;
  border: 0;
  min-width: 150px;
  padding: 12px 20px;
  transition: .4s all ease-in-out;
  z-index: 2;
  cursor: pointer;
  &:hover{
    opacity: .6;
  }
  @media screen and (max-width: 600px) {
    padding: 10px 20px;
    min-width: 1px;
  }
`
export const ToggleTitle = styled.p`
  position: relative;
  font-size: 1.2em;
  font-weight: 600;
  letter-spacing: 4px;
  color: #9b9696;
  margin-right: 10px;

  @media screen and (max-width: 600px) {
    font-size: 1em;
  }
`
export const IconUpOrDown = styled.img`
  @media screen and (max-width: 600px) {
    height: 30px;
  }
`
