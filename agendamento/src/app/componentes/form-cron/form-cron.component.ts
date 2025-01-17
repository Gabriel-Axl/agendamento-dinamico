import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AgendarService } from 'src/app/agendar.service';

@Component({
  selector: 'app-form-cron',
  templateUrl: './form-cron.component.html',
  styleUrls: ['./form-cron.component.css']
})
export class FormCronComponent implements OnInit {

  todoDia:boolean = true;
  todoDiaSemana:boolean = true;
  todoMes:boolean = true;

  meses = [
    { nome: 'Janeiro', valor: '1' },
    { nome: 'Fevereiro', valor: '2' },
    { nome: 'Março', valor: '3' },
    { nome: 'Abril', valor: '4' },
    { nome: 'Maio', valor: '5' },
    { nome: 'Junho', valor: '6' },
    { nome: 'Julho', valor: '7' },
    { nome: 'Agosto', valor: '8' },
    { nome: 'Setembro', valor: '9' },
    { nome: 'Outubro', valor: '10' },
    { nome: 'Novembro', valor: '11' },
    { nome: 'Dezembro', valor: '12' }
  ];

  dias = [
    { nome: 'Segunda-feira', valor: '1'},
    { nome: 'Terça-feira', valor: '2'},
    { nome: 'Quarta-feira', valor: '3'},
    { nome: 'Quinta-feira', valor: '4'},
    { nome: 'Sexta-feira', valor: '5'},
    { nome: 'Sábado', valor: '6'},
    { nome: 'Domingo', valor: '0'}
  ];

  mesSelecionado:string = "";
  horarioSelecionado:string = "";
  diaSelecionado:string = "";
  diaMesSelecionado!:number;
  constructor(private agendamentoService:AgendarService) { }

  ngOnInit(): void {
  }

  async criarCron(form: NgForm) {
    if (form.valid) { // faz a validação do formulario
      let cron:string;
      let diaMes, diaSemana, todoMes;
      cron = this.tratarHorario(this.horarioSelecionado);

      if(this.todoDia == true){
        diaMes = '*';
      }else{
        diaMes = this.diaMesSelecionado.toString()
      }

      if(this.todoDiaSemana == true){
        diaSemana = '*';
      }else{
        diaSemana = this.diaSelecionado
      }

      if(this.todoMes == true){
        todoMes = '*';
      }else{
        todoMes = this.mesSelecionado
      }

      cron = cron.concat( diaMes + ' ' +  todoMes + ' ' + diaSemana)
      console.log(cron)
      await this.agendamentoService.agendarTarefa(cron).subscribe(
        (response: any) => {
          console.log('Resposta:', response);
          alert('Agendamento cadastrado!')
        },
        (error: any) => {
          console.error(error); 
        }
      );
    } else {
      console.log('Formulário inválido');
    }
  }

  tratarHorario(horario:string){
    let horarioSeparado = horario.split(':')
    let segundo = horarioSeparado[2]
    let minuto = horarioSeparado[1]
    let hora = horarioSeparado[0]
    let horarioFormatado = segundo + ' ' + minuto + ' ' + hora + ' '; 
    return horarioFormatado;
  }

}
