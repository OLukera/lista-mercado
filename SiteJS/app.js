
var items = []

document.querySelector('button[name=cadastrar]').addEventListener('click',function() {
    nomeProduto = document.querySelector('input[name=nomeProduto]')
    valorProduto = document.querySelector('input[name=valorProduto]')

    items.push({
        nome: nomeProduto.value,
        valor: valorProduto.value
    });

    listaProduto = document.querySelector('.lista')

    listaProduto.innerHTML = ""

    soma = 0

    items.map(function(val) {
        soma += parseFloat(val.valor)
        listaProduto.innerHTML +=`
            <div class="produtos">
                <h3>`+val.nome+`</h3>
                <h3><span>R$ `+val.valor+`</span></h3>
                <hr>
            </div>`;

        soma.toFixed(2)
        valorTotal = document.querySelector('.preco')
        valorTotal.innerHTML = "Total: R$ " + soma
    });

    nomeProduto.value = ""
    valorProduto.value = ""
})

document.querySelector('button[name=limpar]').addEventListener('click',function(){

    items = []

    document.querySelector('.lista').innerHTML = ""
    document.querySelector('.preco').innerHTML = "Total: R$ 0"
})