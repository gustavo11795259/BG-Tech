const produtos = {
    monitor1: {
        nome: "Monitor Gamer Ninja Tenseigan, 23.8 Pol, Full HD, 1ms, 120Hz, VA, 91% sRGB",
        imagem: "Img/MONITORES/MONITOR1.png",
        precoAntigo: "R$ 481,90",
        preco: "R$ 839,99",
        parcelamento: "R$ 352,93 até em 12x de R$ 29,41 sem juros no cartão",
        codigo: "MONITOR1"
    },
    monitor2: {
        nome: "Monitor Gamer SuperFrame Precision, 23.8 Pol, Flat, Full HD, IPS, 1ms, 180Hz, 99% sRGB",
        imagem: "Img/MONITORES/MONITOR2.png",
        precoAntigo: "R$ 481,90",
        preco: "R$ 499,99",
        parcelamento: "R$ 588,2 até em 12x de R$ 49,02 sem juros no cartão",
        codigo: "MONITOR2"
    },
    monitor3: {
        nome: "Monitor Gamer SuperFrame Orbit Plus V2, 27 Pol, Quad HD, 275Hz, IPS, 0.5ms, 99% sRGB",
        imagem: "Img/MONITORES/MONITOR3.png",
        precoAntigo: "R$ 1729,90",
        preco: "R$ 1.099,99",
        parcelamento: "R$ 1.294,11 até em 12x de R$ 107,84 sem juros no cartão",
        codigo: "MONITOR3"
    },
    monitor4: {
        nome: "Monitor Gamer SuperFrame Orbit Plus V2, 27 Pol, Quad HD, 275Hz, IPS, 0.5ms, 99% sRGB",
        imagem: "Img/MONITORES/MONITOR4.png",
        precoAntigo: "R$ 569,90",
        preco: "R$ 349,99",
        parcelamento: "R$ 453,52 até em 12x de R$ 37,76 sem juros no cartão",
        codigo: "MONITOR4"
    },
    placavideo1: {
        nome: "Placa de Vídeo MSI NVIDIA GeForce RTX 5060 Shadow 2X OC, 8GB, GDDR7, DLSS, Ray Tracing, 912-V537-038",
        imagem: "Img/PLACAS/PLACA1.png",
        precoAntigo: "R$ 4619,90",
        preco: "R$ 2.599,99",
        parcelamento: "R$ 3.058.81 até em 12x de R$ 254,90 sem juros no cartão",
        codigo: "PLACA1"
    },
    placavideo2: {
        nome: "Placa de Vídeo Palit NVIDIA GeForce RTX 5070 White OC, 12GB, GDDR7, DLSS, Ray Tracing, NE75070U19K9-GB2050W",
        imagem: "Img/PLACAS/PLACA2.png",
        precoAntigo: "R$ 6.629,90",
        preco: "R$ 4.899.90",
        parcelamento: "R$ 5.764,59 em até 12x de R$ 480,38 sem juros no cartão",
        codigo: "PLACA2"
    }
};

const cards = document.querySelectorAll(".produto-card");

cards.forEach((card) => {

    const tipo = card.dataset.type;

    if (tipo) {
        card.href = `comprar.html?item=${tipo}`;
    }

});

const params = new URLSearchParams(window.location.search);
const tipoProduto = params.get("item");
const produto = produtos[tipoProduto];

if (produto) {

    const produtoImagem = document.getElementById("produto-imagem");

    if (produtoImagem) {
        produtoImagem.src = produto.imagem;
        produtoImagem.alt = produto.nome;
    }

    const nome = document.getElementById("produto-nome");

    if (nome) {
        nome.textContent = produto.nome;
    }

    const precoAntigo = document.getElementById("produto-preco-antigo");

    if (precoAntigo) {
        precoAntigo.textContent = `De: ${produto.precoAntigo} por:`;
    }

    const preco = document.querySelector(".produto-preco");

    if (preco) {
        preco.textContent = produto.preco;
    }

    const parcelamento = document.getElementById("produto-parcelamento");

    if (parcelamento) {
        parcelamento.textContent = produto.parcelamento;
    }

    document.title = `${produto.nome} - BG Tech`;
}