function Story(props){
   
    return (
        <div class="story">
            <div class="imagem">
                <img src={props.image} />
            </div>
            <div class="usuario">
                {props.title}
            </div>
        </div>
    );
};


export default function Stories(){
    const items = [{
        image:"assets/img/9gag.svg",
        title:"9gag"
    },
    {
        image:"assets/img/meowed.svg",
        title:"meowed"
    },
    {
        image:"assets/img/barked.svg",
        title:"barked"  
    },
    {
        image:"assets/img/nathanwpylestrangeplanet.svg",
        title:"nathanwpylestrangeplanet"
    },
    {
        image:"assets/img/wawawicomics.svg",
        title:"wawawicomics"
    },
    {
        image:"assets/img/respondeai.svg", 
        title:"respondeai"
    },
    {
        image:"assets/img/filomoderna.svg", 
        title:"filomoderna"
    },
    {
        image:"assets/img/memeriagourmet.svg",
        title:"memeriagourmet"
    }
];
    return (
        <div class="stories">
            {items.map(item => <Story image={item.image} title={item.title} />)}
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    );
};