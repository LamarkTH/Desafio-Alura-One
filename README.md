📜 Decodificador de Texto
Bem-vindo ao projeto Decodificador de Texto! Este é um aplicativo web simples desenvolvido usando HTML, CSS e JavaScript que permite criptografar e decodificar textos usando substituições de caracteres específicas.

🖥️ Tecnologias Utilizadas
HTML: Estruturação da página e separação das seções.
CSS: Estilização e distribuição dos elementos na viewport.
JavaScript: Lógica para criptografia e decodificação do texto.
🚀 Funcionalidades
Criptografia de textos substituindo vogais por palavras específicas.
Decodificação de textos criptografados de volta ao formato original.
Interface amigável e intuitiva.
Responsivo para diversos tamanhos de tela.
🔍 Lógica de Funcionamento da Codificação e Decodificação
Criptografia
A lógica de criptografia utiliza estruturas de controle condicionais (como if) para verificar a presença de cada vogal no texto original. Quando uma vogal específica é encontrada, ela é substituída por uma palavra determinada usando o método replace. Por exemplo, a vogal "e" é substituída por "enter", "i" por "imes", "a" por "ai", "o" por "ober" e "u" por "ufat".

Decodificação
A decodificação segue um processo semelhante, mas no sentido inverso. Novamente, estruturas de controle condicionais verificam a presença das palavras que representam as vogais criptografadas. Quando essas palavras são encontradas no texto criptografado, o método replace é usado para substituí-las de volta pelas suas respectivas vogais originais. Assim, "enter" se torna "e", "imes" se torna "i", e assim por diante.

🎯 Principais Desafios Enfrentados
1. Separação das Seções em HTML
Organizar o conteúdo de maneira lógica e fluida foi um dos principais desafios. Cada parte da aplicação foi separada em seções distintas para melhorar a clareza e a manutenção do código.

2. Distribuição dos Elementos na Viewport com CSS
Garantir que os elementos da interface estivessem bem distribuídos e fossem responsivos exigiu um planejamento cuidadoso e ajustes precisos no CSS. A meta era criar uma interface que fosse visualmente atraente e fácil de usar em diferentes dispositivos.

🛠️ Como Executar o Projeto
Clone este repositório para o seu ambiente local.
Abra o arquivo index.html em um navegador web.
Utilize a interface para criptografar e decodificar textos conforme necessário. 
Para ver a aplicação em funcionamento, entre no link do vercel : https://desafio-alura-one-three.vercel.app/


