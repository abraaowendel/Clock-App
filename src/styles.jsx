import styled from 'styled-components';
import BackgroundMorning from "./assets/img/bg-image-daytime.jpg"
import BackgroundNight from "./assets/img/bg-image-nighttime.jpg"

export const Container = styled.div `
    display: flex;
    flex-direction: column;
`

export const Home = styled.div`
    padding: 60px 120px;
    display: flex;
    flex-direction: column;
    align-items: center;    
    min-height: 100vh;
    width: 100vw;
    background-image: url(${BackgroundMorning}) ;
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
    }
    @media screen and (max-width: 600px){
        padding: 13px 26px;
    }
`;

