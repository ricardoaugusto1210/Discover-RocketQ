o node nao roda com HTML.

precisa de rotas para poder funcionar
rotas sao caminhos na URL para indicar o que ele deve mostrar nessa rota na URL.

Conteúdo público e estático e passando o nome da pasta.


// config ejs como view - responsável pela view engine é o modulo ejs

path é o caminho do arquivo, join é juntar
esta juntando o caminho do projeto com __dirname no caso é src/ 
com views.

todo pacote que for instalar e não for necessário para o projeto funcionar coloca-se '-D'

// : no express - o conteúdo que virá nesse espaço não sabemos o que é.

// get é pegar - ir no navegador abrir essa rota e pegar o conteúdo dessa rota 

// post enviar dados para uma rota.

// Formato que o formulário de dentro da modal tem que passar a informação.

// route.get('/room/:room/:questions/:action', (req, res) => res.render("exemplo", { req }))

Controllers 
É a camada onde fica a regra de negócio.
conteúdo que controla


View - Front
É todo o layout 

middleware 
Um intermédio de tudo que entra

template string