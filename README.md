# Residência em Tecnologia da Informação e Comunicação

## INSTRUÇÃO PRÁTICA FEB-P007
### MÓDULO Programação WEB (Front-end) - Básico

**OBJETIVO DA ATIVIDADE**
Aprender a criar componentes e diretivas no Angular, explorar a comunicação entre componentes pai-filho e comunicação entre componentes filho-pai, reforçar os conceitos das linguagens HTML, CSS, TypeScript e Angular discutidos em sala de aula.

## DESCRIÇÃO

A tarefa FEB-P007 consiste em desenvolver uma aplicação Angular para a leitura e análise de um arquivo JSON denominada JReader. A Figura 01 ilustra uma captura de tela do modelo da aplicação a ser desenvolvida. A aplicação deve ler um arquivo JSON (veiculos.json), analisar e exibir todas as categorias de veículos, todos os veículos da categoria selecionada, todas as propriedades do veículo selecionado e, por fim, o valor da propriedade selecionada.

Considere como exemplo de uso da aplicação um usuário que acabou de carregar o arquivo “veiculos.json”. Se o usuário clica em Aviões, a aplicação mostra os aviões: Supermarine Spitfire, P-51 Mustang e o B-17 ao lado direito de categorias. Se o usuário clica em Supermarine Spitfire, a aplicação exibe todas as características do Spitfire (Name, Model, Engine, etc) ao lado direito de aviões. Por fim, se o usuário clica em uma das propriedades do Supermarine Spitfire, a aplicação exibe o valor da propriedade no seu lado direito. O usuário pode adicionar esse veículo numa área de rodapé que paralelamente vai criar/adicionar um arquivo JSON com todos os veículos selecionados e suas propriedades preenchidas para ser posteriormente armazenado num banco de dados através de uma API.

**Arquivo veiculos.json**
```json
{
  "Avioes": [
    {
      "Name": "Supermarine Spitfire",
      "Model": "Mk V",
      "Engine": "Rolls-Royce Merlin",
      "NumberOfPassengers": 1,
      "Autonomia": "470 miles",
      "Alcance": "1,135 miles",
      "Teto": "36,500 ft"
    },
    {
      "Name": "P-51 Mustang",
      "Model": "D",
      "Engine": "Packard V-1650-7",
      "NumberOfPassengers": 1,
      "Autonomia": "1,650 miles",
      "Alcance": "2,300 miles",
      "Teto": "41,900 ft"
    },
    {
      "Name": "B-17 Flying Fortress",
      "Model": "G",
      "Engine": "Wright R-1820-97",
      "NumberOfPassengers": 10,
      "Autonomia": "2,000 miles",
      "Alcance": "3,750 miles",
      "Teto": "35,600 ft"
    }
  ],
  "Carros": [
    {
      "Name": "Tesla Model S",
      "Model": "2022",
      "Engine": "Electric",
      "NumberOfPassengers": "5",
      "Autonomia": "390 miles",
      "Alcance": "N/A"
    },
    {
      "Name": "Ford Mustang",
      "Model": "2021",
      "Engine": "5.0L Ti-VCT V8",
      "NumberOfPassengers": "4",
      "Autonomia": "N/A",
      "Alcance": "N/A"
    },
    {
      "Name": "Chevrolet Camaro",
      "Model": "2022",
      "Engine": "6.2L Supercharged V8",
      "NumberOfPassengers": "4",
      "Autonomia": "N/A",
      "Alcance": "N/A"
    }
  ],
  "Barcos": [
    {
      "Name": "Ferretti Yachts",
      "Model": "670",
      "Engine": "2 x MAN V8-1000",
      "NumberOfPassengers": "12",
      "Autonomia": "N/A",
      "Alcance": "N/A"
    },
    {
      "Name": "Azimut Grande",
      "Model": "25 Metri",
      "Engine": "2 x MAN V12-1800",
      "NumberOfPassengers": "10",
      "Autonomia": "N/A",
      "Alcance": "N/A"
    },
    {
      "Name": "Sunseeker Predator",
      "Model": "57",
      "Engine": "Twin Volvo Penta D13-900",
      "NumberOfPassengers": "6",
      "Autonomia": "N/A",
      "Alcance": "N/A"
    }
  ]
}
