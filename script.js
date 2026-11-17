const produtos = {
    item001: {
        imagem: "Img/PLACAS/item001.png",
        nome: "Placa de Vídeo MSI NVIDIA GeForce RTX 5060 Ti Shadow 2X OC Plus, 16GB, GDDR7, DLSS, Ray Tracing, 912-V535-029",
        precoAntigo: "R$ 9.396,11",
        preco: "R$ 5.899,99",
        parcelamento: "R$ 6.941,16 em até 12x de R$ 578,43 sem juros no cartão"
    },
    item002: {
        imagem: "Img/PROCESSADORES/item002.png",
        nome: "Processador AMD Ryzen 5 5500 3.6GHz (4.2GHz Turbo), 6-Cores 12-Threads, Cooler Wraith Stealth, AM4, Sem Vídeo Integrado, 100-100000457BOX",
        precoAntigo: "R$ 1.031,52",
        preco: "R$ 499,99",
        parcelamento: "R$ 588,22 em até 12x de R$ 49,02 sem juros no cartão"
    },
    item003: {
        imagem: "Img/PLACA-MÃE/item003.png",
        nome: "Placa Mãe Gigabyte B550M AORUS Elite, Chipset B550, AMD AM4, mATX, DDR4",
        precoAntigo: "R$ 1.239,99",
        preco: "R$ 749,99",
        parcelamento: "R$ 882,34 em até 12x de R$ 73,53 sem juros no cartão"
    },
    item004: {
        imagem: "Img/MEMORIA-RAM/item004.png",
        nome: "Memória DDR5 Kingston Fury Beast EXPO, 8GB, 5600Mhz, Black, KF556C36BBE-8",
        precoAntigo: "R$ 1.946,59",
        preco: "R$ 1.259,90",
        parcelamento: "R$ 1.482,24 em até 12x de R$ 123,52 sem juros no cartão"
    },
    item005: {
        imagem: "Img/MONITORES/item005.png",
        nome: "Monitor Gamer Rise Mode Elite, 27 Pol, Quad HD, IPS, 165Hz, 1ms, 99% sRGB, HDMI/DP, FreeSync, RM-MOG-27F1652K-B",
        precoAntigo: "R$ 1.789,99",
        preco: "R$ 879,99",
        parcelamento: "R$ 1.035,28 em até 12x de R$ 86,27 sem juros no cartão"
    },
    item006: {
        imagem: "Img/CADEIRAS/item006.png",
        nome: "Cadeira Gamer SuperFrame Griffin, Reclinável, 3D, Creme e Laranja, SF-CH-GFR3DWOL",
        precoAntigo: "R$ 1.499,99",
        preco: "R$ 789,99",
        parcelamento: "R$ 929,40 em até 12x de R$ 77,45 sem juros no cartão"
    },
    item007: {
        imagem: "Img/PC-GAMER/item007.png",
        nome: "PC GAMER COMMANDER AMD Ryzen 5 5500 / NVIDIA RTX 2060 / 16GB DDR4 / SSD 240GB",
        precoAntigo: "R$ 6.898,43",
        preco: "R$ 3.999,99",
        parcelamento: "R$ 4.705,87 em até 12x de R$ 392,16 sem juros no cartão"
    }
};


function abrirproduto(infoproduto) {
    localStorage.setItem(".produto-info", infoproduto);
}

const tipoproduto = localStorage.getItem(".produto-info");
const produto = produtos[tipoproduto];

if (produto) {

    /* IMAGEM */
    const produtoImagem = document.getElementById("produto-imagem");

    if (produtoImagem) {
        produtoImagem.src = produto.imagem;
    }

    /* NOME */
    const nome = document.getElementById("produto-nome");

    if (nome) {
        nome.textContent = produto.nome;
    }

    /* PREÇO ANTIGO */
    const precoAntigo = document.getElementById("produto-preco-antigo");

    if (precoAntigo) {
        precoAntigo.textContent = `De: ${produto.precoAntigo} por:`;
    }

    /* PREÇO */
    const preco = document.querySelector(".produto-preco");

    if (preco) {
        preco.textContent = produto.preco;
    }

    /* PARCELAMENTO */
    const parcelamento = document.getElementById("produto-parcelamento");

    if (parcelamento) {
        parcelamento.textContent = produto.parcelamento;
    }

    document.title = `${produto.nome} - BG Tech`;
}
