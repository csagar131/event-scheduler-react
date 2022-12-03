import { Col } from "antd";
import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;

  @media only screen and (max-width: 600px) {
    padding: 28px 18px;
    box-sizing: border-box;
    margin-top: 144px;
  }
`;


export const CustomColumn = styled(Col)`
   border-width : 1px;
   border-right-style : inset;

   @media only screen and (max-width: 600px) {
    border-width : 0;
    border-bottom-style: inset;
    border-bottom: 10px;
  }
`
