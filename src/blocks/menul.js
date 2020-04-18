import styled from "styled-components";

const Menul = styled.ul`
  display: flex;
  justify-content: space-between;
  width: 28%;
  font-family: monospace;
  font-size: xx-large;
  list-style-type: none;
  li {
    color: white;
    transition: color 1.2s;
    a {
      color: white;
      transition: color 1.2s;
    }
    a:hover {
      color: red;
      opacity: 0.8;
    }
  }
`;

export default Menul;
