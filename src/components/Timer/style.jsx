import styled, {keyframes} from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  color: #fff;
  z-index: 2;
  width: 100%;
`;

export const Greeting = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 5px;
`;

export const GreetingTitle = styled.h5`
    font-size: 1.7em;
    letter-spacing: 4px;
    font-weight: 400;
    @media screen and (max-width: 992px) {
      font-size: 1.2em;
    }
    @media screen and (max-width: 600px) {
      font-size: 1em;
      font-weight: 700;
    }
    @media screen and (max-width: 480px) {
      font-size: 0.8em;
      letter-spacing: 2px;
    }
`
const animateIcon = keyframes`
  0%,100%{
    transform: rotate(0deg);
  }
  50%{
    transform: rotate(20deg);
  }
`
export const Icon = styled.img`
  margin-right: 13px;
  animation: ${animateIcon} 3s infinite;
  @media screen and (max-width: 480px) {
    margin-right: 4px;
  }
`;
export const Hours = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 600px) {
    padding-bottom: 30px;
  }
`;
export const CurrentTime = styled.h1`
  font-size: 11em;
  margin-right: 10px;
  @media screen and (max-width: 992px) {
      font-size: 9em;
  }
  @media screen and (max-width: 600px) {
      font-size: 8em;
  }
  @media screen and (max-width: 480px) {
      font-size: 6em;
  }
  @media screen and (max-width: 360px) {
    font-size: 5em;
  }
`
export const Period = styled.h3`
  font-size: 2em;
  font-weight: 400;
  @media screen and (max-width: 600px) {
      font-size: 1.8em;
  }
  @media screen and (max-width: 480px) {
      font-size: 1.5em;
  }
`
export const Locale = styled.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
`
export const Region = styled.div`
  font-size: 2em;
  @media screen and (max-width: 600px) {
    font-size: 1.3em;
  }
`
export const Toggle = styled.button`
  border-radius: 30px;
  border: 0;
  min-width: 150px;
  display: flex;
  padding: 12px 20px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  transition: .7s all ease-in-out;
  &:hover{
    opacity: .9;
  }
  @media screen and (max-width: 600px) {
    padding: 10px 20px;
    min-width: 1px;
  }
`
export const ToggleTitle = styled.p`
  font-size: 1.2em;
  font-weight: 600;
  letter-spacing: 4px;
  color: #9b9696;
  @media screen and (max-width: 600px) {
    font-size: 1em;
    margin-right: 5px;
  }
`
export const IconUpOrDown = styled.img`
  @media screen and (max-width: 600px) {
    height: 30px;
  }
`






