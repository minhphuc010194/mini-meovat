import React,{useState} from 'react';

import Form_search from './form_search';
import List_data_search from './list_data_search';

function Render() {
    const [text, setText] = useState("");

    function get_search(text_){
       
        setText(text_)
    }
    return (
        <div>
            <Form_search get_search={get_search} />
            <List_data_search text={text}/>
        </div>
    );
}

export default Render;