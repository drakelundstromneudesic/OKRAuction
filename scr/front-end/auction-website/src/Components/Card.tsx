import styled from 'styled-components';
import { addOpacityToColor } from '../Style/Colors';

export const LayerTwoCard = styled.div`
  max-width: 1500px;
  width: 80vw;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  background-color: ${props => props.theme.background.layerTwo};
  box-shadow: 0px 0px 5px ${props => addOpacityToColor(props.theme.common.black, 0.8)};
`;

export const LayerThreeCard = styled.div`
  width: fit-content;
  max-width: 100%;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  background-color: ${props => props.theme.background.layerThree};
  box-shadow: 0px 0px 5px ${props => addOpacityToColor(props.theme.common.white, 0.8)};
`;

export const LayerFourCard = styled.div`
  width: fit-content;
  max-width: 100%;
  margin: 10px;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  background-color: ${props => props.theme.background.layerFour};
  box-shadow: 0px 0px 5px ${props => addOpacityToColor(props.theme.common.grey, 0.8)};
`;
