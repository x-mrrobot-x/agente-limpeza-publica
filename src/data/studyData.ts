export interface Exercise {
  q: string;
  opts: string[];
  ans: number;
  explain: string;
}

export interface Subject {
  id: string;
  title: string;
  sub: string;
  icon: string;
  num: string;
  desc: string;
  chips: { label: string; variant: 'default' | 'info' }[];
  resumo: ResumoBlock[];
  exercises: Exercise[];
}

export interface ResumoBlock {
  title: string;
  content?: string;
  items?: string[];
  highlight?: string;
}

export const SUBJECTS: Subject[] = [
  {
    id: 'portugues',
    title: 'Língua Portuguesa',
    sub: '10 questões na prova • 25 pontos',
    icon: 'book',
    num: '01',
    desc: 'Leitura, escrita, concordância, acentuação e vocabulário básico.',
    chips: [
      { label: '10 questões', variant: 'default' },
      { label: '25 pts', variant: 'default' },
      { label: '15 exercícios', variant: 'info' },
    ],
    resumo: [
      {
        title: 'Interpretação de Texto',
        content: 'Ler o texto com atenção antes de responder. A resposta está sempre dentro do texto. Não invente nada que não está escrito!',
        highlight: 'Dica: Leia a pergunta PRIMEIRO, depois leia o texto procurando a resposta.',
      },
      {
        title: 'Ortografia — Como se escreve certo?',
        items: [
          'S ou Z? — beleza, riqueza (Z); análise, empresa (S)',
          'G ou J? — viagem, garagem (G); sujeito, jeito (J)',
          'SS ou Ç? — pássaro, missão (SS); ação, lição (Ç)',
          'X ou CH? — enxada, xícara (X); chave, chuva (CH)',
        ],
      },
      {
        title: 'Acentuação — Quando colocar o acento?',
        items: [
          'Oxítona (última sílaba): só acentua se terminar em A,E,O,EM,ENS → café, avó, também',
          'Paroxítona (penúltima): acentua quando NÃO termina em A,E,O,EM,NS → fácil, útil, óculos',
          'Proparoxítona (antepenúltima): SEMPRE acentuada → pássaro, número, médico',
        ],
        highlight: '"Música", "pássaro", "ônibus" = sempre têm acento (proparoxítonas)',
      },
      {
        title: 'Classes de Palavras',
        items: [
          'Substantivo: nome de coisa, pessoa, lugar → casa, João, cidade',
          'Adjetivo: caracteriza o substantivo → casa bonita, trabalho pesado',
          'Verbo: indica ação ou estado → correr, ser, limpar',
          'Pronome: substitui o substantivo → eu, tu, ele, ela, nós',
          'Preposição: liga palavras → de, em, para, com, por, sem',
          'Conjunção: liga orações → e, mas, porém, porque, quando',
        ],
      },
      {
        title: 'Sujeito e Predicado',
        content: 'Sujeito = quem faz a ação. Predicado = o que se diz sobre o sujeito.',
        highlight: 'Exemplo: "Os garis limpam as ruas." — Sujeito: "Os garis". Predicado: "limpam as ruas".',
      },
      {
        title: 'Concordância Verbal',
        content: 'O verbo deve concordar com o sujeito em número (singular/plural).',
        items: [
          'Correto: "Os trabalhadores chegaram cedo." (plural → plural)',
          'Errado: "Os trabalhadores chegou cedo."',
        ],
      },
      {
        title: 'Os Porquês',
        items: [
          'porque (junto, sem acento): explicação → Fui porque precisava.',
          'por que (separado, sem acento): pergunta → Por que você não veio?',
          'por quê (separado, com acento): final de frase → Não sei por quê.',
          'porquê (junto, com acento): substantivo → Quero saber o porquê.',
        ],
      },
      {
        title: 'Sinônimos e Antônimos',
        items: [
          'Sinônimo: mesma ideia → limpo = asseado; rápido = veloz',
          'Antônimo: ideia contrária → limpo ≠ sujo; rápido ≠ lento',
        ],
      },
    ],
    exercises: [
      { q: "Leia: 'O agente de limpeza trabalha todos os dias para manter as ruas limpas.' Qual é o sujeito dessa frase?", opts: ["As ruas", "O agente de limpeza", "Trabalha", "Todos os dias"], ans: 1, explain: "Sujeito é quem pratica a ação. Na frase, quem trabalha? 'O agente de limpeza'." },
      { q: "Qual das palavras abaixo está escrita CORRETAMENTE?", opts: ["serjente", "borsalina", "vassoura", "fasenda"], ans: 2, explain: "Vassoura é a grafia correta. 'Fasenda' = fazenda, 'serjente' = sargento são erros ortográficos comuns." },
      { q: "Em 'Os funcionários chegaram cedo', o verbo está no:", opts: ["Singular", "Plural", "Feminino", "Imperativo"], ans: 1, explain: "Chegaram está no plural, concordando com 'Os funcionários' (também plural)." },
      { q: "Qual das frases usa CORRETAMENTE o 'porque'?", opts: ["Por que você foi embora?", "Quero saber o porque.", "Eu fui cedo porque chovia.", "Não sei por que."], ans: 2, explain: "'porque' (junto, sem acento) indica causa: 'Eu fui cedo porque chovia.'" },
      { q: "A palavra 'pássaro' tem acento porque é:", opts: ["Oxítona", "Paroxítona", "Proparoxítona", "Não tem regra"], ans: 2, explain: "Proparoxítonas têm sílaba tônica na antepenúltima: Pás-sa-ro. SEMPRE têm acento!" },
      { q: "Qual é o ANTÔNIMO (contrário) da palavra LIMPO?", opts: ["Asseado", "Higiênico", "Sujo", "Varrido"], ans: 2, explain: "Antônimo é a palavra de sentido oposto. O contrário de 'limpo' é 'sujo'." },
      { q: "Em qual alternativa a palavra está corretamente SEPARADA em sílabas?", opts: ["ca-mi-nhão", "ca-min-hão", "cam-i-nhão", "caminhã-o"], ans: 0, explain: "Ca-mi-nhão é a separação correta. O dígrafo 'nh' nunca é separado." },
      { q: "Qual das frases abaixo tem CONCORDÂNCIA VERBAL correta?", opts: ["Os garis limpou a cidade.", "O prefeito ordenou a limpeza.", "As ruas foi varrida.", "Os resíduos foi coletado."], ans: 1, explain: "'O prefeito ordenou': sujeito singular + verbo singular." },
      { q: "Qual é o SINÔNIMO da palavra RESÍDUO?", opts: ["Limpeza", "Detrito", "Vassoura", "Coleta"], ans: 1, explain: "Detrito é sinônimo de resíduo/lixo." },
      { q: "A palavra SEMANALMENTE na frase 'A coleta é feita semanalmente' indica:", opts: ["Lugar", "Tempo", "Quantidade", "Pessoa"], ans: 1, explain: "Semanalmente é advérbio de tempo — indica quando (uma vez por semana)." },
      { q: "Qual palavra está com ACENTUAÇÃO correta?", opts: ["saúde", "saude", "saúdé", "saùde"], ans: 0, explain: "Saúde: o 'u' recebe acento pois é hiato (vogais em sílabas distintas)." },
      { q: "Identifique o ADJETIVO: 'O caminhão verde recolhe o lixo.'", opts: ["caminhão", "verde", "recolhe", "lixo"], ans: 1, explain: "Adjetivo caracteriza o substantivo. 'Verde' caracteriza o caminhão." },
      { q: "Qual a forma correta do plural de 'cidadão'?", opts: ["cidadãos", "cidadães", "cidadâos", "cidadoes"], ans: 0, explain: "Cidadãos é o plural correto." },
      { q: "Na frase 'Trabalhe, pois o esforço traz recompensa', a palavra POIS é:", opts: ["Preposição", "Conjunção", "Advérbio", "Substantivo"], ans: 1, explain: "Conjunção liga orações. 'Pois' tem sentido de 'porque' (causa)." },
      { q: "Qual palavra tem X com som de CH?", opts: ["taxi", "exame", "xadrez", "fixo"], ans: 2, explain: "Em 'xadrez', o X tem som de CH." },
    ],
  },
  {
    id: 'matematica',
    title: 'Matemática',
    sub: '10 questões na prova • 25 pontos',
    icon: 'calculator',
    num: '02',
    desc: 'Contas do dia a dia, porcentagem, medidas e problemas práticos.',
    chips: [
      { label: '10 questões', variant: 'default' },
      { label: '25 pts', variant: 'default' },
      { label: '15 exercícios', variant: 'info' },
    ],
    resumo: [
      {
        title: 'Operações Básicas',
        items: [
          'Adição (+): somar → 5 + 3 = 8',
          'Subtração (−): diminuir → 10 − 4 = 6',
          'Multiplicação (×): somar várias vezes → 4 × 3 = 12',
          'Divisão (÷): repartir → 12 ÷ 4 = 3',
        ],
        highlight: 'Na prova, muitos problemas são situações do cotidiano com essas operações!',
      },
      {
        title: 'Porcentagem (%)',
        items: [
          '10% de 200 = 200 ÷ 10 = 20',
          '50% de 80 = 80 ÷ 2 = 40 (metade)',
          '25% de 100 = 100 ÷ 4 = 25 (um quarto)',
        ],
        highlight: 'Macete: 10% = divide por 10 | 50% = divide por 2 | 25% = divide por 4',
      },
      {
        title: 'Medidas Importantes',
        items: [
          'Comprimento: 1 km = 1.000 m | 1 m = 100 cm',
          'Peso: 1 kg = 1.000 g | 1 tonelada = 1.000 kg',
          'Capacidade: 1 litro = 1.000 ml',
          'Tempo: 1 hora = 60 min | 1 dia = 24h | 1 semana = 7 dias',
        ],
      },
      {
        title: 'Regra de Três Simples',
        content: 'Se 2 trabalhadores limpam 4 ruas, quantas ruas limpam 6 trabalhadores?',
        highlight: '2 → 4 / 6 → x = x = (6 × 4) ÷ 2 = 12 ruas',
      },
      {
        title: 'Geometria — Área e Perímetro',
        items: [
          'Perímetro: soma de todos os lados',
          'Área do retângulo: base × altura → 5m × 3m = 15m²',
          'Área do quadrado: lado × lado → 4m × 4m = 16m²',
        ],
      },
      {
        title: 'Sistema Monetário',
        content: 'R$ 1,00 = 100 centavos. Some em centavos, depois converta.',
        highlight: 'R$ 2,50 + R$ 1,75: 250 + 175 = 375 centavos = R$ 3,75',
      },
    ],
    exercises: [
      { q: "Um caminhão de lixo faz 3 viagens por dia. Em 7 dias, quantas viagens fará?", opts: ["18 viagens", "21 viagens", "24 viagens", "14 viagens"], ans: 1, explain: "3 × 7 = 21 viagens." },
      { q: "Uma equipe de 8 garis limpa 200 metros. Quantos metros limpa cada um?", opts: ["20 metros", "25 metros", "30 metros", "40 metros"], ans: 1, explain: "200 ÷ 8 = 25 metros." },
      { q: "Se 10% do salário de R$ 1.621,00 vai para o INSS, quanto é descontado?", opts: ["R$ 121,00", "R$ 162,10", "R$ 200,00", "R$ 182,00"], ans: 1, explain: "10% = divide por 10. R$ 1.621 ÷ 10 = R$ 162,10." },
      { q: "Um saco de lixo pesa 2,5 kg. Se um gari carregou 4 sacos, qual o peso total?", opts: ["8 kg", "9 kg", "10 kg", "6,5 kg"], ans: 2, explain: "2,5 × 4 = 10 kg." },
      { q: "Uma vassoura custa R$ 18,50. A prefeitura compra 6. Quanto pagará?", opts: ["R$ 101,00", "R$ 108,00", "R$ 111,00", "R$ 120,00"], ans: 2, explain: "R$ 18,50 × 6 = R$ 111,00." },
      { q: "De 40 trabalhadores, 25% são mulheres. Quantas mulheres há?", opts: ["8 mulheres", "10 mulheres", "12 mulheres", "15 mulheres"], ans: 1, explain: "25% = ¼. 40 ÷ 4 = 10 mulheres." },
      { q: "Uma rua tem 1.500 metros. Se um gari já varreu 750 metros, quantos faltam?", opts: ["600 m", "650 m", "700 m", "750 m"], ans: 3, explain: "1.500 − 750 = 750 metros." },
      { q: "1 tonelada de lixo equivale a quantos quilogramas?", opts: ["100 kg", "500 kg", "1.000 kg", "10.000 kg"], ans: 2, explain: "1 tonelada = 1.000 kg." },
      { q: "A coleta começa às 06h30 e termina às 11h00. Quanto tempo durou?", opts: ["3h30min", "4h30min", "5h00min", "4h00min"], ans: 1, explain: "06h30→11h00 = 4 horas e 30 minutos." },
      { q: "Terreno retangular de 10m × 5m. Qual é a ÁREA?", opts: ["30 m²", "40 m²", "50 m²", "60 m²"], ans: 2, explain: "Área = base × altura = 10 × 5 = 50 m²." },
      { q: "Uma lata de produto de limpeza tem 2 litros. Quantos ml?", opts: ["200 ml", "500 ml", "1.000 ml", "2.000 ml"], ans: 3, explain: "1 litro = 1.000 ml. 2 litros = 2.000 ml." },
      { q: "Um gari trabalha 44h semanais. Quantas horas em 4 semanas?", opts: ["156 h", "166 h", "176 h", "186 h"], ans: 2, explain: "44 × 4 = 176 horas." },
      { q: "R$ 0,50 + R$ 1,25 + R$ 2,00 = ?", opts: ["R$ 3,25", "R$ 3,50", "R$ 3,75", "R$ 4,00"], ans: 2, explain: "50 + 125 + 200 = 375 centavos = R$ 3,75." },
      { q: "2 garis limpam 1 quadra em 30 min. Quantos garis para limpar em 15 min?", opts: ["2 garis", "3 garis", "4 garis", "6 garis"], ans: 2, explain: "Metade do tempo → dobro de pessoas: 2 × 2 = 4 garis." },
      { q: "PERÍMETRO de um terreno quadrado com lado de 8 metros?", opts: ["16 m", "24 m", "32 m", "64 m"], ans: 2, explain: "Perímetro = 4 × 8 = 32 metros." },
    ],
  },
  {
    id: 'informatica',
    title: 'Informática Básica',
    sub: '10 questões na prova • 25 pontos',
    icon: 'monitor',
    num: '03',
    desc: 'Computador básico, Windows, Word, Excel e internet.',
    chips: [
      { label: '10 questões', variant: 'default' },
      { label: '25 pts', variant: 'default' },
      { label: '15 exercícios', variant: 'info' },
    ],
    resumo: [
      {
        title: 'Partes do Computador',
        items: [
          'Monitor: tela onde você vê tudo',
          'Teclado: para digitar texto e comandos',
          'Mouse: para clicar e navegar',
          'CPU/Torre: o "cérebro" do computador',
          'HD/SSD: guarda os arquivos permanentemente',
          'RAM: memória temporária para processar',
        ],
      },
      {
        title: 'Atalhos do Teclado',
        items: [
          'Ctrl + C: COPIAR',
          'Ctrl + V: COLAR',
          'Ctrl + X: RECORTAR',
          'Ctrl + Z: DESFAZER',
          'Ctrl + S: SALVAR',
          'Ctrl + A: SELECIONAR TUDO',
          'Ctrl + P: IMPRIMIR',
          'Delete: APAGAR',
        ],
      },
      {
        title: 'Word / Excel / PowerPoint',
        items: [
          'Word (.docx): escrever documentos e cartas',
          'Excel (.xlsx): tabelas e cálculos. Fórmulas começam com =',
          'PowerPoint (.pptx): apresentações de slides',
        ],
      },
      {
        title: 'Internet e Navegadores',
        items: [
          'Navegadores: Chrome, Firefox, Edge — abrem sites',
          'URL: endereço do site (www.prefeitura.gov.br)',
          'Download: baixar arquivo da internet para o PC',
          'Upload: enviar arquivo do PC para a internet',
        ],
      },
      {
        title: 'E-mail',
        items: [
          'Todo e-mail tem @: exemplo@gmail.com',
          'Para: destinatário principal',
          'CC: cópia para outras pessoas',
          'Assunto: título do e-mail',
          'Anexo: arquivo enviado junto com o e-mail',
        ],
      },
      {
        title: 'Nuvem, Lixeira e Backup',
        items: [
          'Nuvem (cloud): guardar arquivos na internet. Ex: Google Drive, OneDrive',
          'Lixeira: arquivos apagados ficam lá temporariamente. Pode restaurar ou excluir',
          'Backup: cópia de segurança dos seus arquivos',
          'Antivírus: protege contra vírus e malwares',
        ],
        highlight: 'Arquivos na Lixeira ainda ocupam espaço! Esvazie para liberar.',
      },
    ],
    exercises: [
      { q: "Para COPIAR um texto selecionado, você usa:", opts: ["Ctrl + V", "Ctrl + X", "Ctrl + C", "Ctrl + Z"], ans: 2, explain: "Ctrl + C = COPIAR. Ctrl+V cola, Ctrl+X recorta, Ctrl+Z desfaz." },
      { q: "Qual é a extensão do Microsoft Word (versão mais recente)?", opts: [".xls", ".ppt", ".docx", ".txt"], ans: 2, explain: ".docx é a extensão do Word." },
      { q: "O que é a LIXEIRA do Windows?", opts: ["Um antivírus", "Um local temporário para arquivos apagados", "Uma pasta de documentos", "Um navegador"], ans: 1, explain: "A Lixeira armazena temporariamente arquivos apagados." },
      { q: "Qual programa é um NAVEGADOR de internet?", opts: ["Word", "Excel", "Google Chrome", "PowerPoint"], ans: 2, explain: "Google Chrome é navegador (browser) para acessar sites." },
      { q: "No e-mail, o campo 'CC' serve para:", opts: ["Assunto do e-mail", "Enviar cópia para outras pessoas", "Guardar rascunhos", "Cancelar o envio"], ans: 1, explain: "CC (Com Cópia): envia cópia para outras pessoas." },
      { q: "O atalho Ctrl + Z serve para:", opts: ["Salvar", "Imprimir", "Desfazer a última ação", "Fechar o programa"], ans: 2, explain: "Ctrl + Z = DESFAZER." },
      { q: "O que é 'computação em nuvem' (cloud)?", opts: ["Um tipo de antivírus", "Guardar arquivos na internet para acessar de qualquer lugar", "Um processador", "Uma impressora sem fio"], ans: 1, explain: "Computação em nuvem: armazenar arquivos na internet." },
      { q: "No Excel, as fórmulas começam com qual símbolo?", opts: ["#", "@", "=", "$"], ans: 2, explain: "No Excel, toda fórmula começa com =." },
      { q: "O que significa 'fazer download'?", opts: ["Enviar arquivo para a internet", "Excluir um arquivo", "Baixar um arquivo da internet para o computador", "Compartilhar"], ans: 2, explain: "Download: transferir arquivo da internet para o computador." },
      { q: "Qual atalho serve para SALVAR?", opts: ["Ctrl + A", "Ctrl + S", "Ctrl + P", "Ctrl + N"], ans: 1, explain: "Ctrl + S = SALVAR (Save)." },
      { q: "O que é um ANTIVÍRUS?", opts: ["Edita textos", "Protege o computador contra vírus e malwares", "Um navegador", "Um programa de planilhas"], ans: 1, explain: "Antivírus detecta e remove vírus/malwares." },
      { q: "Para IMPRIMIR um documento:", opts: ["Ctrl + I", "Ctrl + M", "Ctrl + P", "Ctrl + F"], ans: 2, explain: "Ctrl + P = IMPRIMIR (Print)." },
      { q: "Qual símbolo todo endereço de e-mail possui?", opts: ["#", "%", "@", "&"], ans: 2, explain: "Todo e-mail tem @ (arroba)." },
      { q: "O que é 'backup'?", opts: ["Abrir vários programas", "Copiar arquivos importantes para não perder", "Aumentar velocidade", "Conectar à internet"], ans: 1, explain: "Backup = cópia de segurança." },
      { q: "Para ver arquivos e pastas do computador, você usa:", opts: ["Calculadora", "Bloco de Notas", "Explorador de Arquivos", "Paint"], ans: 2, explain: "O Explorador de Arquivos permite navegar por pastas e arquivos." },
    ],
  },
  {
    id: 'conhecimentos',
    title: 'Conhecimentos Gerais',
    sub: '10 questões na prova • 25 pontos',
    icon: 'globe',
    num: '04',
    desc: 'Macarani, Bahia, história, localização e legislação municipal.',
    chips: [
      { label: '10 questões', variant: 'default' },
      { label: '25 pts', variant: 'default' },
      { label: '15 exercícios', variant: 'info' },
    ],
    resumo: [
      {
        title: 'O Município de Macarani',
        items: [
          'Localização: Bahia, mesorregião Centro-Sul Baiano, microrregião de Itapetinga',
          'População: aproximadamente 15.000 habitantes',
          'Área: ~1.200 km²',
          'Bioma: 100% Mata Atlântica',
          'Distância de Salvador: ~600 km',
        ],
      },
      {
        title: 'História de Macarani',
        items: [
          'Nome: origem indígena — "Gruta dos Índios" (índios Caranis/Botocudos)',
          'Escritura do terreno: maio de 1922',
          'Emancipação: 31 de dezembro de 1943 (Decreto-Lei nº 141)',
          'Instalação oficial: 3 de abril de 1944',
          '1º prefeito (interventor): João Salíba (1944)',
          'Origem: era distrito de Encruzilhada (desmembrada de Vitória da Conquista)',
        ],
      },
      {
        title: 'Rios, Economia e Cultura',
        items: [
          'Rios: Rio Macarani, Rio Mangerona, Rio Pardo, Rio Paterão',
          'Rio Mangerona: nome vem de "Mãe Gerônima", uma índia querida da região',
          'Economia: pecuária (gado de corte e leite), mineração, laticínios',
          'Padroeiro: São Pedro (festa: 29 de junho)',
          'Igreja Matriz: São Pedro, uma das maiores igrejas católicas da Bahia',
        ],
      },
      {
        title: 'Estado da Bahia',
        items: [
          'Capital: Salvador | Região: Nordeste do Brasil',
          'Governador atual: Jerônimo Rodrigues',
          'Rio principal: Rio São Francisco ("Velho Chico")',
          'Biomas: Caatinga, Mata Atlântica, Cerrado',
        ],
      },
      {
        title: 'Saneamento Básico e Reciclagem',
        items: [
          'Saneamento básico: água, esgoto, limpeza urbana e drenagem',
          'Coleta seletiva: separar lixo por tipo',
          'Resíduo orgânico: restos de comida → viram adubo (compostagem)',
        ],
        highlight: 'Cores das lixeiras: Azul = papel | Vermelho = plástico | Verde = vidro | Amarelo = metal | Marrom = orgânico',
      },
      {
        title: 'Lei Orgânica Municipal',
        content: 'A Lei Orgânica é a "constituição" do município — define como ele se organiza, direitos dos cidadãos e deveres da prefeitura. Todo município tem a sua.',
      },
    ],
    exercises: [
      { q: "O nome 'Macarani' tem origem indígena e significa:", opts: ["Terra das Flores", "Gruta dos Índios", "Rio das Pedras", "Lugar do Sol"], ans: 1, explain: "Macarani significa 'Gruta dos Índios', referência aos índios Caranis." },
      { q: "Em que ano Macarani foi instalada como município?", opts: ["1922", "1930", "1944", "1950"], ans: 2, explain: "Instalada oficialmente em 3 de abril de 1944." },
      { q: "Qual foi o primeiro prefeito (interventor) de Macarani?", opts: ["Athanásio da Silva Neto", "Joviniano Neres", "João Salíba", "Joaquim Dagno"], ans: 2, explain: "João Salíba foi o primeiro interventor." },
      { q: "Macarani está localizado na mesorregião de:", opts: ["Extremo Oeste Baiano", "Centro-Sul Baiano", "Metropolitana de Salvador", "Vale São-Franciscano"], ans: 1, explain: "Macarani está na mesorregião do Centro-Sul Baiano." },
      { q: "Qual é o principal rio que banha Macarani?", opts: ["Rio São Francisco", "Rio Pardo", "Rio Mangerona", "Rio Itapetinga"], ans: 2, explain: "O Rio Mangerona é o principal." },
      { q: "A principal atividade econômica de Macarani é:", opts: ["Turismo", "Indústria têxtil", "Pecuária (gado de corte e leite)", "Pesca"], ans: 2, explain: "A economia é baseada na pecuária." },
      { q: "Qual é o padroeiro de Macarani?", opts: ["São João", "São Pedro", "Nossa Senhora", "Santo Antônio"], ans: 1, explain: "O padroeiro é São Pedro, festa em 29 de junho." },
      { q: "Qual é a capital do Estado da Bahia?", opts: ["Feira de Santana", "Vitória da Conquista", "Ilhéus", "Salvador"], ans: 3, explain: "Salvador é a capital da Bahia." },
      { q: "Lixeiras de cor AZUL na coleta seletiva são para:", opts: ["Vidro", "Metal", "Papel e Papelão", "Resíduos orgânicos"], ans: 2, explain: "Lixeira AZUL = Papel e Papelão." },
      { q: "O que é a Lei Orgânica Municipal?", opts: ["Lei que regula o meio ambiente", "Lei que organiza o funcionamento do município", "Lei que define salários", "Lei que regula o trânsito"], ans: 1, explain: "A Lei Orgânica é a lei maior do município." },
      { q: "O bioma presente em 100% do território de Macarani é:", opts: ["Cerrado", "Caatinga", "Mata Atlântica", "Pantanal"], ans: 2, explain: "Macarani está inteiramente no bioma Mata Atlântica." },
      { q: "De qual município Macarani se desmembrou indiretamente?", opts: ["Vitória da Conquista", "Itapetinga", "Jequié", "Ilhéus"], ans: 0, explain: "Macarani era distrito de Encruzilhada, desmembrada de Vitória da Conquista." },
      { q: "'Saneamento básico' inclui quais serviços?", opts: ["Apenas coleta de lixo", "Apenas água e esgoto", "Água, esgoto, limpeza urbana e drenagem", "Apenas pavimentação"], ans: 2, explain: "Saneamento básico: água, esgoto, limpeza urbana e drenagem pluvial." },
      { q: "Qual é um exemplo de RESÍDUO ORGÂNICO?", opts: ["Garrafa PET", "Lata de alumínio", "Casca de banana", "Jornal velho"], ans: 2, explain: "Resíduo orgânico: origem biológica (restos de comida, cascas)." },
      { q: "Em que região do Brasil está a Bahia?", opts: ["Norte", "Centro-Oeste", "Nordeste", "Sudeste"], ans: 2, explain: "A Bahia está no Nordeste do Brasil." },
    ],
  },
];
