import React,{useState,useRef, useEffect} from 'react';
import e from 'express';

export function Cat(props:{x:number,y:number}){
    const {x,y} = props;
    return (
        <div style={{width:'50px',height:'50px',background:'orange',
        position:'absolute',left:x,top:y}}></div>
    )
}

export function Mouse(props:any){
    const [pos,setPos] = useState({x:0,y:0})
    const [offsetPos,setOffsetPos] = useState({x:0,y:0})
    const [flag,setFlag] = useState(false);
    const conRef:any = useRef(null);
    const divRef:any = useRef(null);
    useEffect(()=>{
        console.log(conRef.current.offsetTop);
        setPos({x:conRef.current.offsetLeft,y:conRef.current.offsetTop})
    },[])
    
    function handleMove(e:MouseEvent){
        if(flag) {
            const {offsetTop,offsetWidth,offsetHeight} = conRef.current
            const w = 50;
            const h = 50;
            
            let x = -offsetPos.x+e.clientX, y=-offsetPos.y+e.clientY;
            x = x<0 ? 0:x;
            x = x>offsetWidth-w ? offsetWidth-w:x;
            y = y<offsetTop ? offsetTop:y;
            y = y>offsetTop + offsetHeight -h ? offsetTop + offsetHeight - h:y;
            
            setPos({x,y});
        }
    }

    function getOffsetPos(e:any){
        let x = e.nativeEvent.offsetX, y=e.nativeEvent.offsetY;
        setOffsetPos({x,y});
        setFlag(true)
    }
    return (
        <div onMouseMove={(e:any)=>{handleMove(e)}} style={{height:'400px',border:'1px solid #f44'}}
            ref={ele=>{conRef.current = ele}}
        >
            <h1>移动鼠标哦</h1>
            <div onMouseDown={(e)=>{getOffsetPos(e)}} onMouseUp={()=>{setFlag(false)}} ref={ele=>{divRef.current = ele;}}>
                {props.render({x:pos.x,y:pos.y})}
            </div>
            
        </div>
    )
}