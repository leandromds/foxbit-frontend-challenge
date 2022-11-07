import styled from 'styled-components';

export const Card = styled.div`
  background-color: ${ props => props.theme.colors.bg.main_contrast};
  position: relative;
  display: flex;
  flex-direction: column;
  font-variant: common-ligatures tabular-nums;
  border-radius: 16px;
  padding: 1.5rem 1.25rem;
  opacity: 1;
  overflow: initial;
`;

export const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin: 0px 0px 4px;
`;

export const CoinBox = styled.div`
  height: 28px;
  width: 28px;
  display: flex;
`;

export const Index = styled.span`
  display: block;
  border-radius: 12px;
  background-color: ${props => `${props.theme.colors.bg.positive.main}`};
  font-size: ${props => `${props.theme.typography.size.xxs}px`};
  font-family: ${props => `${props.theme.typography.family.semibold}`};
  padding: 4px 4px 4px 8px;
`;

export const Coin = styled.p`
  margin: 0px 0px 8px;
  font-size: ${props => `${props.theme.typography.size.sm}px`};
`;

export const Prize = styled.p`
  margin: 0px 0px 20px;
  font-size: ${props => `${props.theme.typography.size.md}px`};
  & > span {
    color: ${ props => props.theme.colors.paragraph.lighter};
  }
  `;

export const VolumeDescription = styled.p`
  margin: 0px 0px 4px;
  font-size: ${props => `${props.theme.typography.size.xxxs}px`};
  color: ${ props => props.theme.colors.paragraph.light};
`;

export const VolumeValue = styled.p`
  margin: 0px;
  font-size: ${props => `${props.theme.typography.size.xxs}px`};
`;