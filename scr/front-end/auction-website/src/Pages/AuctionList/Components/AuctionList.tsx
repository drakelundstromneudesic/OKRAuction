import { useEffect, useState } from 'react';
import { PrimaryButton } from '../../../Components/Button';
import { LayerTwoCard } from '../../../Components/Card';
import { Header1 } from '../../../Components/Text';
import { Item } from '../../../Models/Item';
import { getAllItems } from '../../../Services/ItemsService';
import { AddItemForm } from './AddItemForm';
import { ItemInList } from './ItemInList';

export const AuctionList = (): JSX.Element => {
  const [allItems, setAllITems] = useState<Item[]>([]);
  const [IsAddingItem, setIsAddingItem] = useState<boolean>(false);

  const updateItems = async () => {
    const updatedItems = await getAllItems();
    setAllITems(updatedItems);
  };

  useEffect(() => {
    updateItems();
  }, []);

  return (
    <LayerTwoCard>
      <PrimaryButton onClick={() => setIsAddingItem(!IsAddingItem)}>Add Item</PrimaryButton>
      {IsAddingItem ? <AddItemForm setIsAddingItem={setIsAddingItem} /> : <> </>}
      <Header1>Auctions</Header1>
      {allItems.map(item => (
        <ItemInList item={item} key={item.id} />
      ))}
    </LayerTwoCard>
  );
};
