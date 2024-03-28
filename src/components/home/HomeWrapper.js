import styled from "styled-components";

export const HomeWrapper = styled.div`
  display: flex;
  padding: 20px;
  flex-direction: column;
  align-items: center;
`;
export const Header = styled.div`
  max-width: 970px;
  min-height: 135px;
  border-radius: 10px;
  padding: 20px;
  gap: 10px;
  background-color: #f4f4f4;
  color: #212121;
`;
export const Title = styled.h1`
  font-weight: 700;
  font-size: 30px;
  text-align: center;
  line-height: 33px;
`;
export const Description = styled.div`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  line-height: 26px;
`;
export const NewsletterCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
export const Container = styled.div`
  max-width: 970px;
`;
export const TitleSite = styled.h4`
  font-familly: Source Sans Pro;
  font-weight: 700;
  font-size: 22px;
  line-height: 27.65px;
  position: relative;
  width: fit-content;

  &:after {
    content: "";
    position: absolute;
    width: 70%;
    height: 4px;
    border: none;
    background-color: #b00005;
    top: 40px;
    left: 0;
  }
`;
