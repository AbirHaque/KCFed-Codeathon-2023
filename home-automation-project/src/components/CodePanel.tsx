import * as React from 'react';
import { List, arrayMove } from 'react-movable';
import parse from 'html-react-parser';



function check(textbox_answers) {
  var i = 0;
  var list_elements = document.getElementById("code_list").getElementsByTagName("div");
  for(var i=0;i < list_elements.length; i++) {
    if (list_elements[i].id[1]!=(i+1).toString()){
      document.getElementById("l"+(i+1)).style.color="red";
      document.getElementById("l"+(list_elements[i].id[1])).style.color="red";
    }
    else{
      document.getElementById("l"+(i+1)).style.color="green";

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
  const style = { whiteSpace: 'pre', tabSize: 4, listStyleType: "none"  };
  const str_items=props.str_items.split(/\r?\n/);
  const randomized_items=[...str_items].sort(() => Math.random() - 0.5);
  const item_ptrs=[];
  for (var i = 0; i < str_items.length;i++){
    item_ptrs.push(str_items.indexOf(randomized_items[i]));
  }
  const [items, setItems] = React.useState(randomized_items);
  return (
    <div>
    <button onClick={e=>check(answers)}>Run</button>
    <List
      values={items}
      onChange={({ oldIndex, newIndex }) => {
          setItems(arrayMove(items, oldIndex, newIndex));
        }
      }
      renderList={({ children, props }) => <ul id="code_list" {...props}>{children}</ul>}
      renderItem={({ value, props }) => <p {...props} > <li style={style}>{parse(value)}</li></p>}
    />
    </div>
  );
};
export default CodePanel;