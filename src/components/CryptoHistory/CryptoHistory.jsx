import { BaseTable, THead, Th, Tr, Td } from './CryptoHistory.styled';
import { formatData } from 'helpers/formatData';

export const CryptoHistory = ({ items }) => {
  return (
    <BaseTable>
      <THead>
        <tr>
          <Th>№</Th>
          <Th>PRICE</Th>
          <Th>AMOUNT</Th>
          <Th>DATE</Th>
        </tr>
      </THead>

      <tbody>
        {items.map(({ id, price, amount, date }, idx) => {
          return (
            <Tr key={id}>
              <Td>{idx + 1}</Td>
              <Td>{price}</Td>
              <Td>{amount}</Td>
              <Td>{formatData(date)}</Td>
            </Tr>
          );
        })}
      </tbody>
    </BaseTable>
  );
};

// // <Tr>
// <Td>1</Td>
// <Td>3190</Td>
// <Td>0.24843</Td>
// <Td>02/01/2022, 1:14 PM</Td>
// </Tr>
// <Tr>
// <Td>2</Td>
// <Td>3195</Td>
// <Td>0.088</Td>
// <Td>05/09/2022, 2:24 PM</Td>
// </Tr>
