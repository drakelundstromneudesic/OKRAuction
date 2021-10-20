import { useState } from 'react';
import styled from 'styled-components';
import { AddItemForm } from './Components/AddItemForm';
import { AuctionList } from './Components/AuctionList';

export const AuctionListPage = (): JSX.Element => {
  const [isModalOpen, setIsAddingItem] = useState<boolean>(false);
  return (
    <VerticalBox>
      {isModalOpen ? <AddItemForm /> : <> </>}
      <button onClick={() => setIsAddingItem(!isModalOpen)}>Add Item</button>
      <AuctionList />
    </VerticalBox>
  );
};

const VerticalBox = styled.div`
  display: flex;
  flex-direction: column;
`;
