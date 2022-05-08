function User(props){
    return (
        <div class="usuario">
            <img src={props.image}/>
            <div class="texto">
                <strong>{props.userName}</strong>{props.name}
            </div>
        </div>
    );
};
function Sugestao(props){
    return(
        <div class="sugestao">
                <div class="usuario">
                    <img src={props.image} />
                    <div class="texto">
                        <div class="nome">{props.name}</div>
                        <div class="razao">{props.type}</div>
                    </div>
                </div>

                <div class="seguir">Seguir</div>
        </div>
    );
};


export default function Sidebar(){
    const items = [
        {
            image: "assets/img/bad.vibes.memes.svg",
            name: "bad.vibes.memes",
            type: "Segue você"
        },
        {
            image: "assets/img/chibirdart.svg",
            name: "chibirdart",
            type: "Segue você"
        },
        {
            image: "assets/img/razoesparaacreditar.svg",
            name: "razoesparaacreditar",
            type: "Novo no Instagram"
        },
        {
            image: "assets/img/adorable_animals.svg",
            name: "adorable_animals",
            type: "Segue você"
        },
        {
            image: "assets/img/smallcutecats.svg",
            name: "smallcutecats",
            type: "Segue você"
        }
    ];

    return(
        <div class="sidebar">
            <User image="assets/img/catanacomics.svg" userName="catanacomics" name="Catana"/>

            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>

                {items.map(item => <Sugestao image={item.image} name={item.name} type={item.type} />)}
            </div>

            

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );

};