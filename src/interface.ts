interface Iendereco {
  rua: string;
  numero: number;
  bairro: string;
  cidade?: string;
  readonly pessoa: string;
}

let Endereco: Iendereco;

Endereco = {
  rua: "gabriel",
  numero: 3,
  bairro: "Cidade de Deus",
  pessoa: "Diego",
};

// Interface, é como se fosse um contrato, todos os tipos que eu passei na interface são necessarios passar no objeto
// o tipo cidade com ? é pq ele é opcional
// o método readonly é que ele é apenas leitura, não pode ser modificado

interface Ianimal {
  nome: string;
  raca: string;
}

interface Icachorro extends Ianimal {
  latir?: string;
}

let dog: Icachorro;

dog = {
  nome: "bob",
  raca: "senta aqui",
  latir: "não",
};

// Interface que extende de outro
