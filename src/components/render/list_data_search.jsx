
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {data} from '../../data';
const useStyles = makeStyles({
    root: {
      minWidth: 275,
    },
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 16,
    },
    pos: {
      marginBottom: 12,
    },
});
function List_data_search(props) {
    const {text} = props;
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    const [get_data, setGet_data] = useState()
    function removeAccents(str) {
        var AccentsMap = [
        "aàảãáạăằẳẵắặâầẩẫấậ",
        "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
        "dđ", "DĐ",
        "eèẻẽéẹêềểễếệ",
        "EÈẺẼÉẸÊỀỂỄẾỆ",
        "iìỉĩíị",
        "IÌỈĨÍỊ",
        "oòỏõóọôồổỗốộơờởỡớợ",
        "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
        "uùủũúụưừửữứự",
        "UÙỦŨÚỤƯỪỬỮỨỰ",
        "yỳỷỹýỵ",
        "YỲỶỸÝỴ"    
        ];
        for (var i=0; i<AccentsMap.length; i++) {
        var re = new RegExp('[' + AccentsMap[i].substr(1) + ']', 'g');
        var char = AccentsMap[i][0];
        str = str.replace(re, char);
        }
        return str;
    }
    useEffect(()=>{
        if(text){

            let text_search = removeAccents(text).toLocaleLowerCase();
            let temp = [];
            data.map(item=>{
                // console.log(removeAccents(item.content))
                let item_ = removeAccents(item.content).toLocaleLowerCase();
                // console.log(item_)
                // console.log(text_search)
                if(item_.search(text_search)>=0){
                    console.log(item_.search(text_search))
                    temp.push(item);
                }
                // let check = removeAccents(item.content).search(text_search);
                // console.log(check)
                
            });
           setGet_data([...temp]);
        }else{
            setGet_data([...data])
        }
    },[text])
    return (
        <>
        {get_data&&get_data.map((item,i)=>{
            return <Card className={classes.root} key={item.index}>
                <CardContent>
                    {item.content}
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
        </Card>
        })}
        </>
    );
}

export default List_data_search;