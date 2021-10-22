import { useState } from 'react';
import styled from 'styled-components';
import { LayerThreeCard } from '../../../Components/Card';
import { PrimaryText, SecondaryText, TertiaryText } from '../../../Components/Text';
import { Item } from '../../../Models/Item';

type ItemInListProps = {
  readonly item: Item;
};

export const ItemInList = ({ item }: ItemInListProps): JSX.Element => {
  return (
    <LayerThreeCard key={item.id}>
      <HorizontalBox>
        <ItemThumbnail src={item.imageLink} />
        <VerticalBox>
          <PrimaryText>{item.name}</PrimaryText>
          <SecondaryText>{CountdownTimer(item.closingTime)}</SecondaryText>

          <TertiaryText>{item.description}</TertiaryText>
          <HorizontalBox>
            {item.bids ? (
              <>
                <SecondaryText>Current Bid: ${item.bids[0].amount} |</SecondaryText>
                <SecondaryText>| Min Increase: ${item.minimumIncrease}</SecondaryText>{' '}
              </>
            ) : (
              <SecondaryText>Starting Bid: ${item.startingBid}</SecondaryText>
            )}
          </HorizontalBox>
        </VerticalBox>{' '}
      </HorizontalBox>
    </LayerThreeCard>
  );
};

const CountdownTimer = (closingTime: string): string => {
  const [result, setResult] = useState('Tets');

  var timerFunction = setInterval(function () {
    var countDownDate = new Date(closingTime).getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    const startingText = 'This Auction closes in ';
    const dayText = days && days + 'days ';
    const hourText = hours + ' hours';
    const minuteAndSecondText = days <= 7 ? ' ' + minutes + 'mintues and ' + seconds + 'seconds.' : '.';

    setResult(distance > 0 ? startingText + dayText + hourText + minuteAndSecondText : 'This Auction Has Ended');

    // If the count down is finished, write some text
    if (distance < 0) clearInterval(timerFunction);
  }, 1000);
  return result;
};

const HorizontalBox = styled.div`
  display: flex;
`;
const VerticalBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemThumbnail = styled.img`
  width: 10vw;
  margin-right: 1vw;
`;
