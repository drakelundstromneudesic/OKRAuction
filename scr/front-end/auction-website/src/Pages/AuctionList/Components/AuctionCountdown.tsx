import { useState } from 'react';

export const AuctionCountdown = (closingTime: string): string => {
  const [result, setResult] = useState('Tets');

  var timerFunction = setInterval(function () {
    var countDownDate = new Date(closingTime).getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const startingText = 'This Auction closes in ';
    const dayText = days && days + 'days ';
    const hourText = hours + ' hours';
    const minuteAndSecondText = days <= 7 ? ' ' + minutes + 'mintues and ' + seconds + 'seconds.' : '.';

    setResult(distance > 0 ? startingText + dayText + hourText + minuteAndSecondText : 'This Auction Has Ended');

    if (distance < 0) clearInterval(timerFunction);
  }, 1000);
  return result;
};
