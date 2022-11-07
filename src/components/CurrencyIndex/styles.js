import styled from 'styled-components';

export const Index = styled.span`
  display: flex;
  border-radius: 12px;
  background-color: ${ props => {
      if (!props.status) {
        return props.theme.colors.bg.undefined;
      }
      return props.theme.colors.bg[props.status];
    }
  };
  color: ${ props => {
      return props.theme.colors.content[props.status];
    }
  };
  font-size: ${props => `${props.theme.typography.size.xxs}px`};
  font-family: ${props => `${props.theme.typography.family.semibold}`};
  padding: 4px 4px 4px 8px;
  align-items: center;
`;