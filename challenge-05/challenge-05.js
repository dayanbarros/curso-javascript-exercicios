/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/
var arr = [1, 2, 3, 4, 5 ]

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
function myfunc(arr){
    return arr;
}

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/
console.log(myfunc(arr)[1]);

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar um índice do array que foi passado
no primeiro parâmetro. O índice a ser retornado, deve ser o número passado no
segundo parâmetro.
*/
function myFunc2(arr2, index){
    return arr2[index];
}

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/
var myarray2 = ['nome', 24.5, false, [1, 2, 'teste'], {b: 3}];

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/
myFunc2(myarray2, 0);
myFunc2(myarray2, 1);
myFunc2(myarray2, 2);
myFunc2(myarray2, 3);
myFunc2(myarray2, 4);

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book (nameBook){
    var allBooks = {
        'Começando no JavaScript': {
			quantidadePaginas: 45,
			autor: 'Antonio',
			editora: 'Abril'
		},
        'Maze Runner': {
        	quantidadePaginas: 70,
			autor: 'Lisa',
			editora: 'Desconhecida'
		},
		'A Biblia': {
			quantidadePaginas: 300,
			autor: 'Jesus',
			editora: 'Igreja'
        }
    };
	if(!nameBook){
		return allBooks;
	}

	return allBooks[nameBook]
}

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/
book()

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/
'O livro Começando no JavaScript tem ' + book('Começando no JavaScript').quantidadePaginas ' páginas!'

/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/
"O autor do livro A Biblia é " + book('A Biblia').autor + "."

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
"O livro Maze Runner foi publicado pela editora " + book('Maze Runner').editora + " ."
