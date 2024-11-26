import { getCSS, criarGrafico, incluirTexto } from "./common.js";

async function redesFavoritasMundo() {
    const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/redes-favoritas.json';
    const res = await fetch(url);
    const dados = await res.json();
    const redes = Object.keys(dados);
    const valores = Object.values(dados);

    const data = [
        {
            values: valores,
            labels: redes,
            type: 'pie',
            textinfo: 'label+percent'
        }
    ];

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        height: 700,
        title: {
            text: 'Redes sociais que os usuários mais gostam',
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30
            }
        },
        legend: {
            font: {
                color: getCSS('--primary-color'),
                size: 16
            }
        }
    };

    // Criação do gráfico com ID único
    const grafico = document.createElement('div');
    grafico.className = 'grafico';
    grafico.id = `grafico-${Date.now()}`; // Garantindo ID único
    const container = document.getElementById('graficos-container');

    console.log('Conteúdo do container antes:', container.innerHTML);
    container.appendChild(grafico);
    Plotly.newPlot(grafico, data, layout);
    console.log('Conteúdo do container depois:', container.innerHTML);

    incluirTexto(`Embora o <span>Instagram</span> ocupe a quarta posição em termos de número total de usuários entre as redes sociais, destaca-se como a <span>preferida pelos usuários</span>. Supera até mesmo o <span>Facebook</span>, a plataforma com mais usuários, sendo a terceira opção mais apreciada pelos usuários. <br>Essa preferência evidencia a forte conexão e apreço que as pessoas têm pelo Instagram em comparação com outras redes sociais`);
}

redesFavoritasMundo();
