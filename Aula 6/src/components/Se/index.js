export default props => { //Testa a propriedade teste 
    if(props.teste){
        return props.children;
    }
    else{
        return false;
    }
}