'use client'
//13px 글꼴 에디터

import React, {MouseEventHandler} from "react";

interface SearchBarProps{
    placeholder?: string;
    value?: string;
    width?: number;
    height?: number;
    className?: string;
    onClick?: React.MouseEventHandler<HTMLInputElement>;
}


export function SearchBar(props: SearchBarProps) {
    if(!props.height) props.height = 32
    if(!props.width) props.width = 256
    const searchBarSizing: React.CSSProperties = {
        width: (props.width+8)+'px',
        height: (props.height+8)+'px',
    };
    const customStyle: React.CSSProperties = {
        width: props.width+'px',
        height: props.height+'px',
    };
    const motion: React.CSSProperties = {
        width:  (props.width)+'px',
        height: (props.height)+'px',
    };
    return (
        <>
            <div className={"col-auto relative content-center mt-0 pt-0"} style={searchBarSizing}>
                <div id="motionObject" className={"rounded-full outline-4 outline-blue-500 top-0 absolute"} style={motion}>

                </div>
                <div className="rounded-full bg-gray-100 shadow-md top-4 absolute" style={customStyle} onClick={event => {(event.currentTarget.children[0] as HTMLInputElement).focus()}}>
                    <input type="search" className={"m-2 bg-gray-100 w-auto focus:outline-none"} placeholder={props.placeholder} value={props.value} onClick={props.onClick} onFocus={event => {event.preventDefault()}}></input>
                </div>
            </div>
        </>
    );
}