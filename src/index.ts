const empresa: string = "Tutipalst";

// Tipo String

const numeros: number = 10;

// Tipo numérico

let pix: number | string;

pix = 12324;
pix = "diego@gmail.com";

// Tipo Union Tipes onde ele junta mais de um tipo,
// Ele funciona apenas com let

let admin: boolean;

admin = true;
admin = false;

// Tipo boolean pode ser true ou false, apenas isso

const files: string[] = ["comedia", "terror", "herois"];
// Tipo array que determina qual tipo vai dentro do array

const times: (string | number)[] = ["texto", 123];
// tipo array que aceita mais de um tipo

let Pessoa: [string, number];

Pessoa = ["nome", 22];

// Tipo tuple onde eu defino qual tipo ele vai receber e tem que seguir a ordem

const servidor: object = {
  nome: "IPWIASI",
  IP: 253,
};

// Tipo object que é um objeto

enum Permissao {
  ADMIN = 1,
  USER = 2,
  ESTAGIARIO = 3,
}

console.log(Permissao.ADMIN);

// tipo ENUM onde posso agrupar tipos de informações

const nulo = null;
let indenifinido: undefined;

// Tipo null e um tipo indefinido

const vasco: any = "Qualquer valor";
const flu: any = 12;
const fla: any = true;
const bot: any = null;

// Tipo any aceita qualquer coisa ai

let NaoSei: unknown;

// unknown serve para quando não se sabe qual tipo o valor vai receber
