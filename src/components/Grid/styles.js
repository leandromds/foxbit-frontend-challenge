import styled from "styled-components";

export const Grid = styled.section`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, 176px);
  gap: 0.75rem;
  -webkit-box-pack: center;
  justify-content: center;
  flex: 0 1 0%;
  overflow-y: auto;
  height: 100vh;
  padding: 20px 0.75rem;
  background-color: ${ props => props.theme.colors.bg.main };
`;
