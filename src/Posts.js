function Post(props){
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                <img src={props.image} />
                  {props.title}
                </div>
                <div class="acoes">
                  <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={props.post} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" />
                    <div class="texto">
                        Curtido por <strong>respondeai</strong> e <strong>outras 101.523 pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default function Posts(){
    const items =[
        {
            image:"assets/img/barked.svg",
            title:"barked",
            post: "assets/img/dog.svg"
        },
        {
            image:"assets/img/meowed.svg",
            title:"meowed",
            post: "assets/img/gato-telefone.svg"
        }
    ]
    
    return(
    <div class="posts">
        {items.map(item => <Post image={item.image} title={item.title} post={item.post} />)}
    </div>

    );
}