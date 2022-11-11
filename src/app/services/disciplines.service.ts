import { Injectable } from '@angular/core';

class Discipline {
  name: String;
  day: String;
  hour: String;
}

@Injectable()
export class DisciplinesService {
  private disciplines: Discipline[] = [
    {
      name: 'Desenvolvimento para Dispositivos Móveis I',
      day: 'Monday',
      hour: '19:00',
    },
    { name: 'Inglês V', day: 'Tuesday', hour: '19:00' },
    {
      name: 'Negócios e Marketing e Eletrônicos',
      day: 'Tuesday',
      hour: '20:40',
    },
    {
      name: 'Negócios e Marketing e Eletrônicos',
      day: 'Wednesday',
      hour: '19:00',
    },
    {
      name: 'Desenvolvimento para Servidores II',
      day: 'Thursday',
      hour: '19:00',
    },
    {
      name: 'Tópicos Especiais em Sistemas para Internet II',
      day: 'Friday',
      hour: '19:00',
    },
    {
      name: 'Projeto de Prototipagem e Testes de Usabilidade',
      day: 'Saturday',
      hour: '07:00',
    },
    {
      name: 'Projeto de Trabalho de Graduação em Sistemas para Internet I',
      day: 'Saturday',
      hour: '11:30',
    },
  ];

  constructor() {}

  add(name: string, day: string, hour: string) {
    this.disciplines.push({ name, day, hour });
  }

  remove(i: number) {
    this.disciplines.splice(i, 1);
  }

  getDiscipline() {
    return this.disciplines;
  }
}
