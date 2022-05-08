function IconMobile(props){
    return (
        <div class={props.class}>
                <ion-icon name={props.name}></ion-icon>
        </div>
    );
}
function Icones(){
    
    const names = ["paper-plane-outline","compass-outline","heart-outline","person-outline"]
    
    return (
        <div class="icones">
                {names.map(icons => <ion-icon name={icons}></ion-icon>)}
            
        </div>
    );
};

export default function Navbar () {
    return (
        <div class="navbar">
            <div class="container">
            
            <div class="logo">
                <ion-icon name="logo-instagram"></ion-icon>
                <div class="separador"></div>
                <img src="assets/img/logo.png" />
            </div>
            <IconMobile class="logo-mobile" name="logo-instagram" />
             

            <div class="instagram-mobile">
                <img src="assets/img/logo.png" />
            </div> 
    
            <div class="pesquisa">
                <input type="text" placeholder="Pesquisar" />
            </div> 
            
            <Icones />
            
            <IconMobile class="icones-mobile" name="paper-plane-outline" />
            
            </div>
        </div>
    );
};