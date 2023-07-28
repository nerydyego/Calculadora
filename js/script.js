function calcular(tipo, valor){
    if(tipo === 'acao'){
        if(valor === 'c'){
            //Limpa o visor (id resultado)
            document.getElementById('resultado').value = ''
        }
        if(valor === '+' || valor === '-' || valor === '/' || valor === '*' || valor === '.'){
            document.getElementById('resultado').value += valor
        }
        if(valor === '='){
            valor_campo = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = valor_campo
        }
             
    }else if(tipo === 'valor'){
        
        document.getElementById('resultado').value += valor
    }
}
const colorInput = document.getElementById('color');
const elementoEstilizado = document.getElementById('elemento-estilizado');

colorInput.addEventListener('input', () => {
const selectedColor = colorInput.value;
elementoEstilizado.style.backgroundColor = selectedColor;
});

