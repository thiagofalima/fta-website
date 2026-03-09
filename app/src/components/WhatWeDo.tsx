import styled from "styled-components";
import { Products } from "./Products";

const WhatWeDoWrapper = styled.section`
  width: 100vw;
  margin: 1.5em 0;
  background-color: #344969;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .container {
    width: 80%;
    padding: 16px;
  }

  h2.title {
    font-size: 1.5em;
    font-weight: 700;
    margin: 16px 0;
    color: #FFFFFF;
  }
`;

export const WhatWeDo = () => {
  return (
    <WhatWeDoWrapper>
      <div className="container">
        <h2 className="title">O que fazemos?</h2>
        <Products />
      </div>
    </WhatWeDoWrapper>
  );
};
