'use client'


import {useEffect, useState} from "react";
import {useRouter} from "next/navigation";
import {number} from "prop-types";


interface Article{
    id : number | string
    title : string
    article : string
}

export default function ApplicationDevelopment() {
    const router = useRouter()
    const [refreshed, setRefreshed] = useState(0)
    const [articles_Json,setJSON] = useState<Article[] | null>(null)
    useEffect(() => {
        fetch('http://localhost:9999/articles').then(res => res.json()).then(res => {

            // @ts-ignore
            const arr = res.filter(article => (article.id !== "nextID"))
            // @ts-ignore
            arr.forEach(article => {article.id = Number(article.id)})
            console.log(arr)
            setJSON(arr)
        })
    },[refreshed])


    //console.log(articles_Json)
    if(!articles_Json) return <>Loading...</>

    // const title = articles_Json.title
    // const article = articles_Json.article
    return (
        <>
            You re currently in ApplicationDevelopment Page
            <div className="flex-row justify-evenly">
                {
                    articles_Json.map(article => (
                        <div key = {article.id} className="flex-col bg-blue-900 rounded-md m-2 w-1/5 shadow-md">
                            <p className="text-2xl">{article.title}</p><button value={article.id} onClick={event => {
                                const articleID = (event.target as HTMLButtonElement).value

                                const options = {
                                    method : 'DELETE'
                                }
                                console.log(articleID)
                                fetch('http://localhost:9999/articles/' + articleID,options).then(res => res.json()).then(res => {
                                    setRefreshed(refreshed+1)
                                    router.refresh()
                                })


                        }}>Delete</button>
                            <div className="bg-blue-400 rounded-md">
                                <p className="">{article.article}</p>
                            </div>
                        </div>
                    ))
                }
            </div>

        </>
    );
}
