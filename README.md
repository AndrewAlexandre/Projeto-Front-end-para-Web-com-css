
🐱 ONG Frajola - Projeto Front-end para Web com CSS

✨ Visão Geral do Projeto
Este repositório contém o desenvolvimento Front-end completo de um website institucional para a ONG Frajola, uma organização fictícia dedicada ao resgate e adoção responsável de felinos em Duque de Caxias, RJ.
O projeto foi construído com foco na semântica HTML5, na estilização avançada com CSS3 e na implementação de funcionalidades básicas em JavaScript para melhorar a experiência do usuário.

🚀 Tecnologias e Recursos Utilizados
HTML5: Estrutura semântica de todas as páginas.
CSS3: Estilização, layout e design responsivo.
JavaScript (Puro): Para funcionalidades interativas no formulário.

🎨 Destaques de CSS e Design
O design do projeto é moderno, limpo e utiliza um esquema de cores discreto (preto/cinza e fundo claro) com destaque para botões estilizados e uso eficiente de layout:
Layout Consistente: O header com a área de logo e o menu de navegação (nav.main-nav) utilizam Flexbox para centralização e alinhamento responsivo dos itens.
Botões e Links: Os links de navegação são estilizados como "pills" arredondadas, com transições suaves (transition: all 0.3s ease;) e efeitos de sombra (box-shadow) no hover.
Layout da Galeria: A página galeria.html utiliza o CSS Grid Layout para organizar os cartões de gatos em uma grade dinâmica, garantindo que o layout se adapte elegantemente a diferentes tamanhos de tela (grid-template-columns: repeat(auto-fit, minmax(350px, 1fr))).
Responsividade (Mobile First): Todos os arquivos CSS incluem blocos de @media queries (para max-width: 768px e max-width: 480px) para garantir que o site seja totalmente acessível e utilize layouts otimizados em dispositivos móveis.

💻 Destaques de Funcionalidade (JavaScript)
O projeto inclui um script JavaScript dedicado para aprimorar a usabilidade do formulário de cadastro:
Máscaras de Input: O arquivo mascaras.js aplica automaticamente máscaras de formatação em tempo real para os campos de CPF, Telefone e CEP, facilitando a entrada de dados pelo usuário.
CPF: 000.000.000-00.
Telefone: (00) 00000-0000 (incluindo o 9º dígito).
CEP: 00000-000.

📄 Estrutura de Arquivos
O projeto é organizado com a separação clássica de preocupações (Separation of Concerns):
Projeto-Front-end-para-Web-com-css/
├── CSS/
│   ├── Cadastro.css      # Estilos para o formulário
│   ├── galeria.css       # Estilos para a galeria (usa CSS Grid)
│   ├── index.css         # Estilos para a página inicial
│   └── Projeto.css       # Estilos para a página de projetos
├── IMG/                  # Pasta para logotipos e imagens dos gatos (não fornecidos, mas referenciados)
├── JS/
│   └── mascaras.js       # Funções JavaScript para máscaras de input
├── Cadastro.html         # Página de cadastro/voluntariado
├── galeria.html          # Página com histórias de sucesso e gatos adotados
├── index.html            # Página inicial (Home) com a missão da ONG
└── Projeto.html          # Página detalhando os projetos de Resgate, Cuidados e Adoção

🗺️ Mapa de Páginas
Arquivo HTML	Conteúdo Principal	Destaques
index.html	Apresentação da ONG Frajola, missão e estatísticas de sucesso (200+ gatos resgatados).	Chamada de contato (<address>).
Projeto.html	Detalhamento dos programas da ONG: Resgate, Cuidados Veterinários, Socialização e Adoção Responsável.	Lista de resultados: 200+ gatinhos adotados, 20 voluntários ativos.
galeria.html	Galeria de "Histórias de Final Feliz!", com fotos e descrição dos gatos adotados.	Utiliza CSS Grid para o layout responsivo dos cards.
Cadastro.html	Formulário completo para doadores, voluntários e adotantes.	Campo de Máscara JS para CPF, Telefone e CEP.

⚙️ Como Executar
Clone o repositório: git clone https://github.com/AndrewAlexandre/Projeto-Front-end-para-Web-com-css.git
Abra o projeto:
Navegue até o diretório principal.
Abra o arquivo index.html no seu navegador favorito para iniciar a navegação.

👤 Autor
Andrew Alexandre Elias da Cruz
GitHub: AndrewAlexandre
Linkedin: https://www.linkedin.com/in/andrew-alexandre-16207a2a8/
