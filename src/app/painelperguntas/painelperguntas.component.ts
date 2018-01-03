import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-painelperguntas',
  templateUrl: './painelperguntas.component.html',
  styleUrls: ['./painelperguntas.component.css']
})
export class PainelperguntasComponent implements OnInit {

  Respostas: boolean[] = [];
  Vitoria: boolean = undefined;
  Resposta: string;
  PerguntaAtual: any;
  IndiceAtual: number = 0;
  public Perguntas: any[] =
    [
      {
        pergunta: "Quem descobriu o Brasil?",
        opcoes: [
          { resposta: "Pedro Alvares Cabral", correta: true },
          { resposta: "João", correta: false },
          { resposta: "Maria", correta: false }]
      },
      {
        pergunta: "Quanto é 1 + 1?",
        opcoes: [
          { resposta: "1", correta: false },
          { resposta: "2", correta: true },
          { resposta: "3", correta: false }]
      },
      {
        pergunta: "Qual a capital do Brasil?",
        opcoes: [
          { resposta: "São Paulo", correta: false },
          { resposta: "Rio de Janeiro", correta: false },
          { resposta: "Brasilia", correta: true }]
      }
    ];

  public atualizarResposta(resposta: Event): void {
    this.Resposta = (<HTMLInputElement>resposta.target).value;

    // console.log(this.Resposta)
  }

  public enviarResposta(): void {
    this.IndiceAtual += 1;

    //Adiciona as respostas no array.
    this.Respostas.push(this.PerguntaAtual.opcoes.find((obj) => { return obj.resposta == this.Resposta }).correta)

    //Verifica vitória
    this.Vitoria = this.Respostas.find((obj) => { return !obj });

    if (this.IndiceAtual == 3) {
      this.Vitoria = this.Respostas.find((obj) => { return !obj }) == undefined;
    }

    this.PerguntaAtual = this.Perguntas[this.IndiceAtual];
  }

  public voltar(): void {

    this.IndiceAtual = 0;
    this.Respostas = [];
    this.PerguntaAtual = this.Perguntas[this.IndiceAtual];
    this.Vitoria = undefined;
  }

  constructor() { }

  ngOnInit() {

    this.PerguntaAtual = this.Perguntas[this.IndiceAtual];

  }

}
