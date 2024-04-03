import styled from "styled-components";

export const ImgBloc = styled.div`
  position: relative;
`;
export const Title = styled.div`
  font-size: 30px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #ffffff;
  text-shadow: 1px 0px #0000004d;
  font-weight: 700;
`;
export const Description = styled.div`
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  line-height: 26px;
  color: #212121;
`;

export const CardWrapper = styled.div`
  width: calc((970px - 150px) / 3);
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 350px;
  gap: 16px;
`;
interface ButtonCardProps {
  ctostatus: string;
}
export const ButtonCard = styled.button<ButtonCardProps>`
  border-radius: calc(infinity * 1px);
  border: none;
  cursor: pointer;
  background: ${(props) => (props.ctostatus ? "#B00005" : "#FAEC70")};
  color: ${(props) => (props.ctostatus ? "white" : "#212121")};
  padding: 14px 30px;
  position: absolute;
  bottom: 20px;
  font-weight: 700;
`;
