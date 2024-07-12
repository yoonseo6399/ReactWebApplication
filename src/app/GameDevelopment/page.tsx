'use client'
import {useState} from "react";

export default function GameDevelopment(){



    return (
        <>
            You're currently in GameDevelopment Page
            {DropDownArticleManager()}
        </>
    );
}



export function DropDownArticleManager(){
    const [state, setState] = useState("Normal")
    let layout = (
        <>
            <p>You re trying to write Article?</p> <a href="" onClick={ event => {event.preventDefault();setState("ArticleManager")}}>Check This Out!</a>
        </>
    );
    let dropDown = (
        <>
            <form onSubmit={event => {
                event.preventDefault();
                const title = event.currentTarget.title.value
                const article = event.currentTarget.article.value
                PostArticle(title,article)

            }}>
                <div className="flex-col">
                    <p><input className="border" type="text" name="title" placeholder="Article Title"></input></p>
                    <p><textarea className="border" name="article" placeholder="Enter article text..."></textarea></p>
                    <p><button className="shadow-md rounded-md bg-amber-700" name="submit">submit</button></p>
                </div>
            </form>
            <button onClick={event => {setState("Normal")}}>Cancel</button>
        </>
    );
    if(state === "Normal") return layout;
    else if(state === "ArticleManager") return dropDown


}

export async function PostArticle(title: string, article: string) {
    let a = await fetch(`http://localhost:9999/articles/nextID`)
    let nowID : number = (await a.json()).nextID
    const nextID = nowID+1
    console.log(nowID)
    console.log(nextID)
    await fetch('http://localhost:9999/articles/nextID', {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({nextID})
    }).then(res => res.json()).then(res => {console.log(res)})

    const id = nowID.toString()

    const option = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({id, title, article})
    }


    return fetch('http://localhost:9999/articles', option)
        .then(res => res.json())
        .then(res => {
            alert("성공적으로 전송되었습니다")
        })
}