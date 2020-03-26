import styled from 'styled-components/native';
import SafeAreaView from 'react-native-safe-area-view';
import {RFPercentage} from 'react-native-responsive-fontsize';
import {colors} from '../../styles';

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${colors.background};
  align-items: center;
`;

export const ContainerBanner = styled.View`
  margin-top: ${RFPercentage(3)}px;
`;

export const ContainerMovie = styled.View`
  margin-bottom: ${RFPercentage(0)}px;
`;

export const CustomTitle = styled.Text``;

export const TitleMovie = styled.Text`
  position: absolute;
  bottom: ${RFPercentage(0.5)}px;
  left: ${RFPercentage(2.7)}px;
  width: ${RFPercentage(30.1)}px;
  height: ${RFPercentage(12)}px;
  padding: 20px;
  text-align: center;
  color: #fff;
  font-size: ${RFPercentage(2.5)}px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  background-color: rgba(0, 0, 0, 0.7);
`;
