let qtdPista = parseInt(document.getElementById("qtd-pista").textContent);
let qtdSuperior = parseInt(document.getElementById("qtd-superior").textContent);
let qtdInferior = parseInt(document.getElementById("qtd-inferior").textContent);
    
console.log(`Quantidade Pista: ${qtdPista}`);
console.log(`Quantidade Superior: ${qtdSuperior}`);
console.log(`Quantidade Inferior: ${qtdInferior}`);

const efetuarCompra = (tipo, qtd) => {
    if (qtd <= 0) {
        alert(`Quantidade inválida! Deve ser maior que zero`);
        return;
    }

    if (tipo === 'pista') {
        if (qtd <= qtdPista) {
             alert(`Compra de ${qtd} ingresso ${tipo} efetuada com sucesso!`);
             qtdPista = qtdPista - qtd;
             alert(`Quantidade de ingressos tipo: pista restante ${qtdPista}`);
             document.getElementById('qtd-pista').textContent = qtdPista;
        } else {
            alert(`Ingressos esgotados!`);
        }
    } else if (tipo === 'superior') {
        if (qtd <= qtdSuperior) {
             alert(`Compra de ${qtd} ingresso ${tipo} efetuada com sucesso!`);
             qtdSuperior = qtdSuperior - qtd;
             alert(`Quantidade de ingressos tipo: pista restante ${qtdSuperior}`);
             document.getElementById('qtd-superior').textContent = qtdSuperior;
        } else {
            alert(`Ingressos esgotados!`);
        }
    } else {
        if (qtd <= qtdInferior) {
             alert(`Compra de ${qtd} ingresso ${tipo} efetuada com sucesso!`);
             qtdInferior = qtdInferior - qtd;
             alert(`Quantidade de ingressos tipo: pista restante ${qtdInferior}`);
             document.getElementById('qtd-inferior').textContent = qtdInferior;
        } else {
            alert(`Ingressos esgotados!`);
        }
    }
    
}

const comprar = () => {
    let tipo = document.getElementById("tipo-ingresso").value;
    let qtd = document.getElementById("qtd").value;
    
    console.log(`Tipo escolhido: ${tipo}`);
    efetuarCompra(tipo, qtd);
}







