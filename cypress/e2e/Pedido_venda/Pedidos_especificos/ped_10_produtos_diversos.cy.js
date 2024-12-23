import { titulopagina } from '../../../support/para_todos.js';
import { escolherTransportadora, saldodisponivel, escolherRota, escolherClientePedido, pedidoGerado, botaoFinalizarPedido,
         finalizandoPedido, tirarEntrega, tirarMontagem, tirarEntregaSegundo, tirarMontagemSegundo, botaoGerarParcelas, processoVendaPrincipal, 
         avancarParaTransportadora, avancarParcelasEntrega, modalServicosVinculados, okServicosVinculados, escolherProdutoPesquisa,
         avancarFinal, modalInconsRotaTransp, carregandoFormaPagamento, trocarFilialFaturamento, escolherUmaParcelaPagamento } from '../../../support/para_pedidos/gerais_pedidos.js';
import { produtoPrincipal, botãoAdicionarProduto, primeiroProdutoEscolher, segundoProdutoEscolher, terceiroProdutoEscolher,
         quartoProdutoEscolher, quintoProdutoEscolher, sextoProdutoEscolher, setimoProdutoEscolher, oitavoProdutoEscolher,
         nonoProdutoEscolher, decimoProdutoEscolher} from '../../../support/para_pedidos/para_pedidos_10_produtos.js';

describe('Gerar pedido normal', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.clearAllSessionStorage();
        cy.login();
        titulopagina()
        processoVendaPrincipal()
        escolherClientePedido()
        cy.wait(700)
    })

    context('Sem frete/ processo 9860 - caminho feliz', () => {

        it('Pedido de venda: produto 1860 0 0', () => {

            produtoPrincipal() //primeira pesquisa de produto - 1889 0 0 - sem serviço / sem entrega
            cy.wait(1000)
            saldodisponivel()
            escolherProdutoPesquisa() //primeira vez escolher produto - 1889 0 0 - sem serviço / sem entrega
            cy.wait(700)
            primeiroProdutoEscolher() // primeira escolha de voltagem - 1889 0 0 - sem serviço / sem entrega
            botãoAdicionarProduto() //primeira adicionando produto - 1889 0 0 - sem serviço / sem entrega
            cy.wait(700)
            modalServicosVinculados()
            okServicosVinculados()
            tirarEntrega()
            tirarMontagem()
    
            cy.wait(700)

            produtoPrincipal() //segunda pesquisa de produto - 1889 1 1 - sem serviço / sem entrega
            cy.wait(1000)
            saldodisponivel()
            escolherProdutoPesquisa() //segunda vez escolher produto - 1889 1 1 - sem serviço / sem entrega
            cy.wait(700)
            segundoProdutoEscolher() // segunda escolha de voltagem - 1889 1 1 - sem serviço / sem entrega
            botãoAdicionarProduto() //segunda adicionando produto - 1889 1 1 - sem serviço / sem entrega
            cy.wait(700)
            modalServicosVinculados()
            okServicosVinculados()
            tirarEntregaSegundo()
            tirarMontagemSegundo()
    
            cy.wait(700)

            produtoPrincipal() //terceira pesquisa de produto - 1889 2 2 - com garantia / com entrega
            cy.wait(1000)
            saldodisponivel()
            escolherProdutoPesquisa() //terceira vez escolher produto - 1889 2 2 - com garantia / com entrega
            cy.wait(700)
            terceiroProdutoEscolher() // terceira escolha de voltagem - 1889 2 2 - com garantia / com entrega
            botãoAdicionarProduto() //terceira adicionando produto - 1889 2 2 - com garantia / com entrega
            cy.wait(700)
            modalServicosVinculados()
            cy.get('#checkbox-139-0 > .md-container') //terceira - adicionando garantia - 1889 2 2 - com garantia / com entrega
                .click({force:true})
            okServicosVinculados()

            cy.wait(700)

            produtoPrincipal() //quarta pesquisa de produto - 1889 3 3 - com garantia / com entrega
            cy.wait(1000)
            saldodisponivel()
            escolherProdutoPesquisa() //quarta vez escolher produto - 1889 3 3 - com garantia / com entrega
            cy.wait(700)
            quartoProdutoEscolher() // quarta escolha de voltagem - 1889 3 3 - com garantia / com entrega
            botãoAdicionarProduto() //quarta adicionando produto - 1889 3 3 - com garantia / com entrega
            cy.wait(700)
            modalServicosVinculados()
            cy.get('#checkbox-139-0 > .md-container') //quarta - adicionando garantia - 1889 3 3 - com garantia / com entrega
                .click({force:true})
            okServicosVinculados()

            cy.wait(700)

            produtoPrincipal() //quinta pesquisa de produto - 1889 4 4 - sem serviço / com entrega
            cy.wait(2000)
            saldodisponivel()
            escolherProdutoPesquisa() //quinta vez escolher produto - 1889 4 4 - sem serviço / com entrega
            cy.wait(700)
            quintoProdutoEscolher() // quinta escolha de voltagem - 1889 4 4 - sem serviço / com entrega
            botãoAdicionarProduto() //quinta adicionando produto - 1889 4 4 - sem serviço / com entrega
            cy.wait(700)
            modalServicosVinculados()
            okServicosVinculados()

            cy.wait(700)

            produtoPrincipal() //sexto pesquisa de produto - 1889 5 5 - sem serviço / com entrega
            cy.wait(2000)
            saldodisponivel()
            escolherProdutoPesquisa() //sexto vez escolher produto - 1889 5 5 - sem serviço / com entrega
            cy.wait(700)
            sextoProdutoEscolher() // sexto escolha de voltagem - 1889 5 5 - sem serviço / com entrega
            botãoAdicionarProduto() //sexto adicionando produto - 1889 5 5 - sem serviço / com entrega
            cy.wait(700)
            modalServicosVinculados()
            okServicosVinculados()

            cy.wait(700)

            produtoPrincipal() //sétima pesquisa de produto - 1889 6 6 - sem serviço / com entrega
            cy.wait(3000)
            saldodisponivel()
            escolherProdutoPesquisa() //sétima vez escolher produto - 1889 6 6 - sem serviço / com entrega
            cy.wait(3000)
            setimoProdutoEscolher() // sétima escolha de voltagem - 1889 6 6 - sem serviço / com entrega
            botãoAdicionarProduto() //sétima adicionando produto - 1889 6 6 - sem serviço / com entrega
            cy.wait(700)
            modalServicosVinculados()
            okServicosVinculados()

            cy.wait(700)

            produtoPrincipal() //oitava pesquisa de produto - 1889 7 7 - sem serviço / com entrega
            cy.wait(3000)
            saldodisponivel()
            escolherProdutoPesquisa() //oitava vez escolher produto - 1889 7 7 - sem serviço / com entrega
            cy.wait(3000)
            oitavoProdutoEscolher() // oitava escolha de voltagem - 1889 7 7 - sem serviço / com entrega
            botãoAdicionarProduto() //oitava adicionando produto - 1889 7 7 - sem serviço / com entrega
            cy.wait(700)
            modalServicosVinculados()
            okServicosVinculados()

            cy.wait(700)

            produtoPrincipal() //nona pesquisa de produto remoto - 1889 8 8 - sem serviço / com entrega
            cy.wait(4000)
            saldodisponivel()
            escolherProdutoPesquisa() //nona vez escolher produto remoto - 1889 8 8 - sem serviço / com entrega
            cy.wait(3000)
            nonoProdutoEscolher() // nona escolha de voltagem remoto - 1889 8 8 - sem serviço / com entrega
            cy.wait(1000) 
            trocarFilialFaturamento()
            botãoAdicionarProduto() //nona adicionando produto remoto - 1889 8 8 - sem serviço / com entrega
            cy.wait(700)
            modalServicosVinculados()
            okServicosVinculados()

            cy.wait(700)

            produtoPrincipal() //décima pesquisa de produto remoto - 1889 9 9 - sem serviço / com entrega
            cy.wait(4000)
            saldodisponivel()
            escolherProdutoPesquisa() //décima vez escolher produto remoto - 1889 9 9 - sem serviço / com entrega
            cy.wait(3000)
            decimoProdutoEscolher() // décima escolha de voltagem remoto - 1889 9 9 - sem serviço / com entrega
            cy.wait(1000) 
            trocarFilialFaturamento()
            botãoAdicionarProduto() //décima adicionando produto remoto - 1889 9 9 - sem serviço / com entrega
            cy.wait(1000)

            avancarParaTransportadora()
            cy.wait(12000)
            modalInconsRotaTransp() //TRANSPORTADORA
            escolherTransportadora()
            escolherRota()
            avancarParcelasEntrega()
            cy.wait(10000)
            botaoGerarParcelas() //GERAR PARCELAS
            carregandoFormaPagamento()
            cy.wait(10000)

            //Selecionando forma de pagamento
            cy.get('[style=""] > md-collapsible-header.layout-row > .md-collapsible-tools > .ng-scope')
                .click()

            //Selecionando parcela na forma de pagamento
            cy.get('.active > md-collapsible-body > .layout-column > [style="position: relative"] > :nth-child(1) > div.ng-binding')
                .click()

            cy.wait(400)
            avancarFinal()
            cy.wait(10000)
        })
    })

    afterEach(() => {
        botaoFinalizarPedido() //RESUMO
        finalizandoPedido()
        cy.wait(10000)
        pedidoGerado()
      });
})