import styled from 'styled-components';
import { LayerFourCard } from '../../../Components/Card';
import { Header2, SecondaryText } from '../../../Components/Text';
import { useForm } from 'react-hook-form';
import { Item } from '../../../Models/Item';
import { createItem } from '../../../Services/ItemsService';
import { DataField, HelperText, Label, TextAreaField } from '../../../Components/FormComponents';
import { NegativeButton, PrimaryButton, SecondaryButton } from '../../../Components/Button';

type AddItemFormProps = {
  readonly setIsAddingItem: (IsAddingItem: boolean) => void;
};

export const AddItemForm = ({ setIsAddingItem }: AddItemFormProps): JSX.Element => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<Item>();

  const defaultImageLink =
    'https://th.bing.com/th/id/R.1a7bc301df26f4a5bb8d51ca05904443?rik=xY8r%2bU3xUl6dNg&riu=http%3a%2f%2fassets.kogan.com%2ffiles%2fproduct%2fMYSTERY_BOX%2fMYSTERY_BOX_2.jpg&ehk=8Cpu1h69ejdxJR66C4ftmo16eENSKAF1gLTlrXUsw%2f0%3d&risl=&pid=ImgRaw&r=0';

  const watchItem = watch();

  const requiredErrorMessage: string = 'This field is required';

  return (
    <LayerFourCard>
      <StyledForm
        onSubmit={handleSubmit(item => {
          console.log(item);
          createItem(item);
          setIsAddingItem(false);
        })}
      >
        <FormRowBox>
          <FormItemBox>
            <Label errors={errors.name}>What is the item name?</Label>
            <DataField errors={errors.name} type="text" {...register('name', { required: true, maxLength: 100 })} />
            {errors.name && <HelperText errors={errors.name}>{requiredErrorMessage}</HelperText>}
          </FormItemBox>

          <FormItemBox>
            <Label errors={errors.description}>Please describe your item.</Label>
            <TextAreaField
              errors={errors.description}
              {...register('description', { required: true, minLength: 50, maxLength: 1000 })}
            />
            {errors.description && <HelperText errors={errors.description}>{requiredErrorMessage}</HelperText>}
          </FormItemBox>
        </FormRowBox>
        <FormRowBox>
          <FormItemBox>
            <Label errors={errors.sellerFirstName}>Seller first name:</Label>
            <DataField
              errors={errors.sellerFirstName}
              type="text"
              {...register('sellerFirstName', { required: true, maxLength: 45 })}
            />
            {errors.sellerFirstName && <HelperText errors={errors.sellerFirstName}>{requiredErrorMessage}</HelperText>}
          </FormItemBox>

          <FormItemBox>
            <Label errors={errors.sellerLastName}>Seller last name:</Label>
            <DataField
              errors={errors.sellerLastName}
              type="text"
              {...register('sellerLastName', { required: true, maxLength: 45 })}
            />
            {errors.sellerLastName && <HelperText errors={errors.sellerLastName}>{requiredErrorMessage}</HelperText>}
          </FormItemBox>

          <FormItemBox>
            <Label errors={errors.sellerEmail}>Seller email address:</Label>
            <DataField
              errors={errors.sellerEmail}
              type="email"
              {...register('sellerEmail', { required: true, maxLength: 100 })}
            />
            {errors.sellerEmail && <HelperText errors={errors.sellerEmail}>{requiredErrorMessage}</HelperText>}
          </FormItemBox>
        </FormRowBox>
        <FormRowBox>
          <FormItemBox>
            <Label errors={errors.imageLink}>Enter a link to an image of your item (optional)</Label>
            <DataField
              errors={errors.imageLink}
              type="url"
              {...register('imageLink', { required: false, maxLength: 950 })}
            />
          </FormItemBox>

          <FormItemBox>
            <Label errors={errors.closingTime}>When do you want the auction to end?</Label>
            <DataField
              errors={errors.closingTime}
              type="datetime-local"
              {...register('closingTime', { required: true })}
            />
            {errors.closingTime && <HelperText errors={errors.closingTime}>{requiredErrorMessage}</HelperText>}
          </FormItemBox>
        </FormRowBox>
        <FormItemBox>
          <Label errors={errors.startingBid}>Starting bid (USD):</Label>
          <DataField
            errors={errors.startingBid}
            type="number"
            {...register('startingBid', { required: true, min: 10 })}
          />
          {errors.startingBid && <HelperText errors={errors.startingBid}>{requiredErrorMessage}</HelperText>}
        </FormItemBox>
        <FormItemBox>
          <ItemThumbnail
            src={watchItem.imageLink ? watchItem.imageLink : defaultImageLink}
            alt={
              'This is the image that will display based on your link.  If nothing is displaying, your link is faulty.'
            }
          />
        </FormItemBox>
        <CenteringBox>
          <SecondaryButton onClick={() => setIsAddingItem(false)}>Cancel</SecondaryButton>
          <PrimaryButton type={'submit'}>Submit</PrimaryButton>
        </CenteringBox>
      </StyledForm>
    </LayerFourCard>
  );
};

const StyledForm = styled.form`
  flex-direction: column;
  display: flex;
`;

const ItemThumbnail = styled.img`
  max-width: 100%;
`;

const FormRowBox = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const FormItemBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  max-width: 190px;
`;

const CenteringBox = styled.div`
  display: flex;
  justify-content: center;
`;
