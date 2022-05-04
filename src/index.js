import reactDom from "react-dom";

function GerarBtn(){
    return (<button>Clica em mim!</button>);
}

const element = document.querySelector(".root");

reactDom.render(GerarBtn(),element);