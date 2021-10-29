import { useEffect, useState } from 'react';
import { LayerTwoCard } from '../../../Components/Card';
import { Header1 } from '../../../Components/Text';
import { Item } from '../../../Models/Item';
import { getAllItems } from '../../../Services/ItemsService';
import { ItemInList } from './ItemInList';

export const AuctionList = (): JSX.Element => {
  const [allItems, setAllITems] = useState<Item[]>([]);

  const updateItems = async () => {
    const updatedItems = await getAllItems();
    setAllITems(updatedItems);
  };

  useEffect(() => {
    updateItems();
  }, []);

  return (
    <LayerTwoCard>
      <Header1>
        Auctions
        {allItems.map(item => (
          <ItemInList item={item} key={item.id} />
        ))}
      </Header1>
      <button onClick={() => console.log(allItems)} />
    </LayerTwoCard>
  );
};
