import styled from "styled-components";

export const GifContainer = styled.div`
  display: grid;
  grid-template-rows: 60% 20%;
  place-items: center;
  cursor: pointer;
  img {
    width: 50px;
    height: 50px;
    transition: height 0.8s, width 0.8s ease-out;
    border: 1px solid lightcyan;
  }
  img:hover {
    width: 80px;
    height: 80px;
  }
  &:hover {
    opacity: 0.8;
  }
`;

export const GifContainerBig = styled(GifContainer)`
  grid-template-rows: auto 10%;
  img {
    width: 200px;
    height: 200px;
    transition: height 0.8s, width 0.8s ease-out;
    border: 1px solid lightcyan;
  }
  img:hover {
    width: 380px;
    height: 380px;
  }
`;

export default { GifContainer, GifContainerBig };
