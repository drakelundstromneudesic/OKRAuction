import styled from 'styled-components';
import { AuctionList } from './Components/AuctionList';

export const AuctionListPage = (): JSX.Element => {
  return (
    <VerticalBox>
      <AuctionList />
    </VerticalBox>
  );
};

const VerticalBox = styled.div`
  display: flex;
  flex-direction: column;
`;
