import { StatisticItem } from 'components';
import { StatisticsList, StatisticTitle } from './Statistics.styled';
import { FaAngellist } from 'react-icons/fa';
import { MdPeople, MdOutlineProductionQuantityLimits } from 'react-icons/md';
import { GiTreeDoor } from 'react-icons/gi';

const icons = [
  <FaAngellist />,
  <MdPeople />,
  <MdOutlineProductionQuantityLimits />,
  <GiTreeDoor />,
];

export const Statistics = ({ title, data }) => {
  return (
    <>
      {title && <StatisticTitle>{title}</StatisticTitle>}

      <StatisticsList>
        {data.map((item, index) => (
          <StatisticItem
            key={item.id}
            icon={icons[index]}
            title={item.title}
            total={item.total}
          />
        ))}
      </StatisticsList>
    </>
  );
};
