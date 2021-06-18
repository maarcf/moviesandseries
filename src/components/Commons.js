import styled from 'styled-components';
import { NavLink, Link } from "react-router-dom";

export const Flex = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  justify-content: ${props => props.justifyContent};
  align-items: ${props => props.alignItems || "center"}; 
  flex-wrap: ${props => props.flexWrap}; 
`;

export const ImageContainer = styled.div`
  width: ${props => props.width || "auto"};  
`;

export const ImageStyled = styled.img`
  width: 100%;
  height: ${props => props.height || "auto"};
`;

export const NavLinkStyled = styled(NavLink)`
  color: ${props => props.theme.colors.textPrimary};
  padding: 5px ${props => props.theme.spaces.extraSmall};

  svg {
    font-size: ${props => props.theme.sizes.large};
  }
  
  &.selected {
    border-bottom: 3px solid ${props => props.theme.colors.textSecondary};

    svg {
      color: ${props => props.theme.colors.textSecondary};
    }

    p {
      color: ${props => props.theme.colors.textSecondary};
    }
  }

  &:visited, &:active {
    color: ${props => props.theme.colors.textPrimary};
  }
`;

export const LinkStyled = styled(Link)`
  color: ${props => props.theme.colors.textPrimary};

  &:visited, &:active {
    color: ${props => props.theme.colors.textPrimary};
  }

  svg {
    color: ${props => props.theme.colors.textSecondary};
  }
`;

export const ItemListStyled = styled.li`
  display: flex;
  justify-content: center;
  margin: 0 ${props => props.theme.spaces.extraSmall};
`;

export const ListStyled = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const SectionTitle = styled.h2`
  font-size: ${props => props.theme.sizes.large};
  margin-right: ${props => props.theme.spaces.medium};

  @media (max-width:${props => props.theme.breakpoints.small}) {
    font-size: ${props => props.theme.sizes.medium};
    margin-right: ${props => props.theme.spaces.small};
  }
`;

export const MainFlex = styled(Flex)`
  max-width: ${props => props.theme.maxWidth};
  margin: ${props => props.theme.spaces.large} 
  ${props => props.theme.spaces.medium};
`;