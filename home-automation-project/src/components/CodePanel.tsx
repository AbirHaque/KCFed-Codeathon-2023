import * as React from 'react';
import { List, arrayMove } from 'react-movable';
import parse from 'html-react-parser';



function check(textbox_answers,item_ptrs) {
  var i = 0;

  console.log(item_ptrs);
  for(i = 0; i<item_ptrs.length;i++){
    if(i!=item_ptrs[i]){
      console.log("Wrong order!");
      return;
    }
  }
  var elem = document.getElementById("q1");
  i = 1;
  while (elem!=null){
    if (elem.value!=textbox_answers[i-1]){
      elem.style.background='red';
      elem.style.color='white';
    }
    else{
      elem.style.background='green';
      elem.style.color='white';
    }
    i++;
    elem = document.getElementById("q"+i);
  }
}



const CodePanel: React.FC = (props) => {
  const answers = props.answers.split(/\r?\n/);
  const style = { whiteSpace: 'pre', tabSize: 4 };
  const str_items=props.str_items.split(/\r?\n/);
  const randomized_items=[...str_items].sort(() => Math.random() - 0.5);
  const item_ptrs=[];
  for (var i = 0; i < str_items.length;i++){
    item_ptrs.push(str_items.indexOf(randomized_items[i]));
  }
  const [items, setItems] = React.useState(randomized_items);
  return (
    <div>
    <button onClick={e=>check(answers,item_ptrs)}>Run</button>
    <List
      values={items}
      onChange={({ oldIndex, newIndex }) => {
          setItems(arrayMove(items, oldIndex, newIndex));
        }
      }
      renderList={({ children, props }) => <ul id="code_list" {...props}>{children}</ul>}
      renderItem={({ value, props }) => <p {...props} > <div style={style}>{parse(value)}</div></p>}
    />
    </div>
  );
};
export default CodePanel;