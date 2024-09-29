import { useState } from 'react';
interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1 className="text-3xl">{heading}</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul>
        {items.map((item, index) => (
          <li
            className={`p-2 text-lg border-t last:border-b hover:bg-slate-100 cursor-pointer ${
              selectedIndex === index && 'bg-slate-300'
            }`}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
