// ESTRUTURA JSON DE DADOS (FUTEBOL)

const dados = {
  "clubes": [
    {
      "id": 1,
      "nome": "Arsenal FC",
      "descricao": "Clube tradicional de Londres famoso pelo seu futebol envolvente e rica história.",
      "conteudo": "Fundado em 1886, o Arsenal é um dos clubes mais bem-sucedidos do futebol inglês. Conhecido pela lendária época invencível de 2003/04 e pela sua estrutura moderna no Emirates Stadium.",
      "pais": "Inglaterra",
      "destaque": true,
      "data": "1886-12-01",
      "imagemPrincipal": "https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": 2,
      "nome": "Real Madrid",
      "descricao": "Maior vencedor da Liga dos Campeões da UEFA e gigante do futebol mundial.",
      "conteudo": "Fundado em 1902, o Real Madrid é reconhecido mundialmente como o clube de maior sucesso no futebol europeu. Tem como palco o histórico Estádio Santiago Bernabéu.",
      "pais": "Espanha",
      "destaque": true,
      "data": "1902-03-06",
      "imagemPrincipal": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": 3,
      "nome": "Flamengo",
      "descricao": "Clube de maior torcida do Brasil, com conquistas marcantes e paixão nacional.",
      "conteudo": "Fundado em 1895 no Rio de Janeiro, o Flamengo possui múltiplos títulos da Libertadores e do Brasileirão, mandando os seus jogos no icónico Estádio do Maracanã.",
      "pais": "Brasil",
      "destaque": true,
      "data": "1895-11-17",
      "imagemPrincipal": "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": 4,
      "nome": "FC Barcelona",
      "descricao": "Clube catalão conhecido pela sua filosofia de jogo e formação de jovens talentos.",
      "conteudo": "Famoso pela academia de La Masia e estilo 'Tiki-Taka', o Barcelona dominou o futebol mundial na última década e manda os seus jogos no prestigiado Camp Nou.",
      "pais": "Espanha",
      "destaque": false,
      "data": "1899-11-29",
      "imagemPrincipal": "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=800&q=80"
    },
    {
      "id": 5,
      "nome": "Bayern de Munique",
      "descricao": "Dominador do futebol alemão e referência de gestão desportiva na Europa.",
      "conteudo": "O Bayern de Munique é a maior potência do futebol alemão, acumulando dezenas de títulos da Bundesliga e troféus da Liga dos Campeões na Allianz Arena.",
      "pais": "Alemanha",
      "destaque": false,
      "data": "1900-02-27",
      "imagemPrincipal": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=800&q=80"
    }
  ],

  "jogadores": [
    {
      "id": 1,
      "clubeId": 1,
      "nome": "Thierry Henry",
      "descricao": "Maior marcador da história do clube e ídolo da era Invencível.",
      "imagem": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
    },
    {
      "id": 2,
      "clubeId": 1,
      "nome": "Dennis Bergkamp",
      "descricao": "Mestre da técnica e visão de jogo excecional.",
      "imagem": "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=600&q=80"
    },
    {
      "id": 3,
      "clubeId": 1,
      "nome": "Bukayo Saka",
      "descricao": "Jovem estrela e referência da equipa atual.",
      "imagem": "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=600&q=80"
    },
    {
      "id": 4,
      "clubeId": 2,
      "nome": "Cristiano Ronaldo",
      "descricao": "Maior marcador da história do Real Madrid com mais de 450 golos.",
      "imagem": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
    },
    {
      "id": 5,
      "clubeId": 2,
      "nome": "Zinedine Zidane",
      "descricao": "Lenda dentro de campo e treinador tricampeão da Champions.",
      "imagem": "https://images.unsplash.com/photo-1577223625816-7546f13df25d?auto=format&fit=crop&w=600&q=80"
    },
    {
      "id": 6,
      "clubeId": 3,
      "nome": "Zico",
      "descricao": "O 'Galinho de Quintino', maior ídolo da história do clube.",
      "imagem": "https://images.unsplash.com/photo-1522778119026-d647f0596c20?auto=format&fit=crop&w=600&q=80"
    },
    {
      "id": 7,
      "clubeId": 3,
      "nome": "Gabigol",
      "descricao": "Herói dos títulos da Libertadores de 2019 e 2022.",
      "imagem": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
    },
    {
      "id": 8,
      "clubeId": 4,
      "nome": "Lionel Messi",
      "descricao": "Considerado por muitos o maior jogador de todos os tempos.",
      "imagem": "https://images.unsplash.com/photo-1518091043644-c1d4457512c6?auto=format&fit=crop&w=600&q=80"
    },
    {
      "id": 9,
      "clubeId": 5,
      "nome": "Thomas Müller",
      "descricao": "Símbolo de lealdade e vitorioso avançado do clube.",
      "imagem": "https://images.unsplash.com/photo-1508098682722-e99c43a406b2?auto=format&fit=crop&w=600&q=80"
    }
  ]
};

// INICIALIZAÇÃO DA PÁGINA HOME (index.html)

function initHome() {
  const cardsContainer = document.getElementById("cardsContainer");
  if (!cardsContainer) return;

  const carouselInner = document.getElementById("carouselInner");
  const carouselIndicators = document.getElementById("carouselIndicators");

  // 1. Carrossel de Destaques
  const clubesDestaque = dados.clubes.filter(clube => clube.destaque);
  if (carouselInner && carouselIndicators) {
    carouselInner.innerHTML = "";
    carouselIndicators.innerHTML = "";

    clubesDestaque.forEach((clube, index) => {
      const activeClass = index === 0 ? "active" : "";

      carouselIndicators.innerHTML += `
        <button type="button" data-bs-target="#carouselDestaques" data-bs-slide-to="${index}" class="${activeClass}" aria-label="Slide ${index + 1}"></button>
      `;

      carouselInner.innerHTML += `
        <div class="carousel-item ${activeClass}">
          <img src="${clube.imagemPrincipal}" class="d-block w-100" alt="${clube.nome}">
          <div class="carousel-caption">
            <h3 class="fw-bold">${clube.nome} (${clube.pais})</h3>
            <p class="d-none d-md-block">${clube.descricao}</p>
            <a href="detalhes.html?id=${clube.id}" class="btn btn-warning btn-sm mt-1 fw-bold">
              Ver Detalhes do Clube <i class="bi bi-arrow-right"></i>
            </a>
          </div>
        </div>
      `;
    });
  }

  // 2. Cards do Catálogo
  cardsContainer.innerHTML = "";
  dados.clubes.forEach(clube => {
    const dataFundacao = new Date(clube.data).toLocaleDateString("pt-PT");

    cardsContainer.innerHTML += `
      <div class="col-12 col-sm-6 col-lg-4">
        <div class="card h-100 shadow-sm border-0">
          <img src="${clube.imagemPrincipal}" class="card-img-top" alt="${clube.nome}">
          <div class="card-body d-flex flex-column">
            <div class="d-flex justify-content-between align-items-center mb-2">
              <span class="badge bg-secondary">${clube.pais}</span>
              <small class="text-muted"><i class="bi bi-flag me-1"></i>Fundado: ${dataFundacao}</small>
            </div>
            <h5 class="card-title fw-bold">${clube.nome}</h5>
            <p class="card-text text-muted flex-grow-1">${clube.descricao}</p>
            <a href="detalhes.html?id=${clube.id}" class="btn btn-outline-primary w-100 mt-2">
              Ver Informações <i class="bi bi-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    `;
  });
}

// INICIALIZAÇÃO DA PÁGINA DE DETALHES (detalhes.html)

function initDetalhes() {
  const detalheGeral = document.getElementById("detalheGeral");
  if (!detalheGeral) return;

  const jogadoresContainer = document.getElementById("jogadoresContainer");

  const urlParams = new URLSearchParams(window.location.search);
  const idClube = parseInt(urlParams.get("id"));

  const clube = dados.clubes.find(c => c.id === idClube);

  if (!clube) {
    detalheGeral.innerHTML = `
      <div class="alert alert-danger text-center py-5" role="alert">
        <i class="bi bi-exclamation-octagon fs-1"></i>
        <h3 class="mt-3">Clube não encontrado!</h3>
        <p>O clube solicitado não existe na nossa base de dados.</p>
        <a href="index.html" class="btn btn-primary mt-2">Voltar à página inicial</a>
      </div>
    `;
    return;
  }

  document.title = `${clube.nome} - Detalhes do Clube`;
  const dataFundacao = new Date(clube.data).toLocaleDateString("pt-PT");

  detalheGeral.innerHTML = `
    <div class="row align-items-center g-4">
      <div class="col-12 col-lg-6">
        <img src="${clube.imagemPrincipal}" alt="${clube.nome}" class="img-fluid shadow detail-main-img">
      </div>
      <div class="col-12 col-lg-6">
        <div class="d-flex align-items-center gap-2 mb-2">
          <span class="badge bg-primary fs-6">${clube.pais}</span>
          ${clube.destaque ? '<span class="badge bg-warning text-dark fs-6"><i class="bi bi-star-fill me-1"></i>Clube em Destaque</span>' : ''}
        </div>
        <h1 class="display-5 fw-bold mb-3">${clube.nome}</h1>
        <p class="lead text-secondary">${clube.descricao}</p>
        <hr>
        <p class="mb-3">${clube.conteudo}</p>
        <div class="bg-white p-3 rounded border shadow-sm d-flex justify-content-between align-items-center">
          <small class="text-muted"><i class="bi bi-calendar-check me-1"></i> Fundação: <strong>${dataFundacao}</strong></small>
          <small class="text-muted"><i class="bi bi-hash me-1"></i> Código do Clube: <strong>${clube.id}</strong></small>
        </div>
      </div>
    </div>
  `;

  const jogadoresDoClube = dados.jogadores.filter(j => j.clubeId === idClube);

  if (jogadoresContainer) {
    jogadoresContainer.innerHTML = "";
    if (jogadoresDoClube.length === 0) {
      jogadoresContainer.innerHTML = `
        <div class="col-12">
          <p class="text-muted">Nenhum jogador registado para este clube.</p>
        </div>
      `;
    } else {
      jogadoresDoClube.forEach(jogador => {
        jogadoresContainer.innerHTML += `
          <div class="col-12 col-sm-6 col-md-4">
            <div class="card h-100 shadow-sm border-0">
              <img src="${jogador.imagem}" class="card-img-top" alt="${jogador.nome}">
              <div class="card-body">
                <h5 class="card-title fw-bold fs-6">${jogador.nome}</h5>
                <p class="card-text text-muted small">${jogador.descricao}</p>
              </div>
            </div>
          </div>
        `;
      });
    }
  }
}

// Executa após o carregamento do DOM
document.addEventListener("DOMContentLoaded", () => {
  initHome();
  initDetalhes();
});