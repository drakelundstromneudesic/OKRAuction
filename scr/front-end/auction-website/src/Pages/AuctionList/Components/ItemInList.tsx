import { useState } from 'react';
import styled from 'styled-components';
import { LayerThreeCard } from '../../../Components/Card';
import { PrimaryText, SecondaryText, TertiaryText } from '../../../Components/Text';
import { Item } from '../../../Models/Item';
import { AuctionCountdown } from './AuctionCountdown';

type ItemInListProps = {
  readonly item: Item;
};

export const ItemInList = ({ item }: ItemInListProps): JSX.Element => {
  return (
    <StyledLayerThreeCard key={item.id}>
      <HorizontalBox>
        <ItemThumbnail src={item.imageLink} />
        <VerticalBox>
          <PrimaryText>{item.name}</PrimaryText>
          <SecondaryText>{AuctionCountdown(item.closingTime)}</SecondaryText>

          <TertiaryText>{item.description}</TertiaryText>
          <HorizontalBox>
            {item.bids.length > 0 ? (
              <>
                <SecondaryText>Current Bid: ${item.bids[0].amount} |</SecondaryText>
                <SecondaryText>| Min Increase: ${item.minimumIncrease}</SecondaryText>{' '}
              </>
            ) : (
              <SecondaryText>Starting Bid: ${item.startingBid}</SecondaryText>
            )}
          </HorizontalBox>
        </VerticalBox>
      </HorizontalBox>
    </StyledLayerThreeCard>
  );
};

const HorizontalBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const VerticalBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  box-sizing: border-box;
`;

const ItemThumbnail = styled.img`
  max-width: 250px;
  width: 30vw;
  margin-right: 1vw;
`;

const StyledLayerThreeCard = styled(LayerThreeCard)`
  width: 97%;
`;
