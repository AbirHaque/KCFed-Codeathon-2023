import * as React from 'react';
import { List, arrayMove } from 'react-movable';
import parse from 'html-react-parser';
import "./CodePage.css";


function check(textbox_answers) {
  var i = 0;
  var list_elements = document.getElementById("code_list").getElementsByTagName("div");
  var good = true;
  for(var i=0;i < list_elements.length; i++) {
    if (list_elements[i].id[1]!=(i+1).toString()){
      document.getElementById("l"+(i+1)).style.color="red";
      document.getElementById("l"+(list_elements[i].id[1])).style.color="red";
      good=false;
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
      good=false;
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
  const tab_style = { whiteSpace: 'pre', tabSize: 4, listStyleType: "none"  };
  const back_style ={backgroundColor:'black', paddingBottom: '10px',  width:"100%"};
  const str_items=props.str_items.split(/\r?\n/);
  const randomized_items=[...str_items].sort(() => Math.random() - 0.5);
  const item_ptrs=[];
  for (var i = 0; i < str_items.length;i++){
    item_ptrs.push(str_items.indexOf(randomized_items[i]));
  }
  const [items, setItems] = React.useState(randomized_items);
  return (
    <div>
      <button style={{color:"white",backgroundColor:"green",width: "150px"}} onClick={e=>check(answers)}>Run</button>
      <div style={back_style}>
      <text style={{color:"grey",width: "150px",paddingLeft: '10px'}}>File: <i  >main.py</i></text>
      <List  
          values={items}
          onChange={({ oldIndex, newIndex }) => {
              setItems(arrayMove(items, oldIndex, newIndex));
              document.getElementById(parse(items[oldIndex]).props.id).style.color="white";
              document.getElementById(parse(items[newIndex]).props.id).style.color="white";
            }
          }
          renderList={({ children, props }) => <ul id="code_list" {...props}>{children}</ul>}
          renderItem={({ value, props }) => <p className="react-movable-item" {...props} > <li style={tab_style}>{parse(value)}</li></p>}
        />
      </div>
    </div>
  );
};
export default CodePanel;