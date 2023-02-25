import * as React from 'react';
import { List, arrayMove } from 'react-movable';


const CodePanel: React.FC = (props) => {
  const style = { whiteSpace: 'pre', tabSize: 4 };
  const str_items=props.str_items.split(/\r?\n/);
  const [items, setItems] = React.useState(str_items);
  return (
    <List
      values={items}
      onChange={({ oldIndex, newIndex }) =>
        setItems(arrayMove(items, oldIndex, newIndex))
      }
      renderList={({ children, props }) => <ul {...props}>{children}</ul>}
      renderItem={({ value, props }) => <p {...props} > <div style={style}>{value}</div></p>}
    />
  );
};
export default CodePanel;