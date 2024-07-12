interface TopicElement {
    title : string;
    imgSrc : string;
    text : string;
}
export const topics = {
    WebDevelopment : 'WebDevelopment',
    ApplicationDevelopment : 'ApplicationDevelopment',
    GameDevelopment : 'GameDevelopment',
} as const

export default function SelectiveTopic({ title, imgSrc, text } : TopicElement){
    return (
        <li><a href=""></a></li>
    );
}