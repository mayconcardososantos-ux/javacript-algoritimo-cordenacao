const livros= require( '. listaLivros');
const precosLivros = [ 25,15,30, 50, 45,20];

let maisBarato = 0;

for( let atual = 0; atual < precos.length; atual++){
if (Livros[ atual] < livros[ maisBarato]){
maisBarato = atual;
}
}

console.log(`o livro mais barato custa ${ livros[maisBarato]. precos } e o titulo é livros $(livros[ maisBarato]. titulo)`);