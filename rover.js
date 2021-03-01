//Iteration 1 | The rover object - OK
//Iteration 2 | Turning the rover - OK
//Iteration 3 | Moving the rover - OK
//Iteration 4 | Commands - OK
//Iteration 5 | Tracking - OK
//Bonus 1 | Enforce boundaries - MAIS OU MENOS
//Bonus 2 | Move backwards - OK
//Bonus 3 | Validate inputs - FALTA
//Bonus 4 | Obstacles - FALTA
//TOTAL obrigatórios 3/5, bonus 2/4
let rover = {
  direction: 'n',
  position: [0, 0],
  // norte: 'n',
  // sul: 's',
  // leste: 'l',
  // oeste: 'w',
  travelLog: [],
};
// ====================== virando para a esquerda ok
function turnLeft(rover) {
  console.log('turnLeft was called!');
  switch (rover.direction) {
    case 'n':
      rover.direction = 'w';
      break;
    case 'w':
      rover.direction = 's';
      break;
    case 's':
      rover.direction = 'e';
      break;
    case 'e':
      rover.direction = 'n';
      break;
  }
}
// ====================== virando para a direita ok
function turnRight(rover) {
  console.log('turnRight was called!');
  switch (rover.direction) {
    case 'n':
      rover.direction = 'e';
      break;
    case 'w':
      rover.direction = 'n';
      break;
    case 's':
      rover.direction = 'w';
      break;
    case 'e':
      rover.direction = 's';
      break;
  }
}
// ====================== movimento para frente ok
function moveForward(rover) {
  console.log('moveForward was called');
  switch (rover.direction) {
    case 'n':
      rover.position[1] -= 1;
      break;
    case 'w':
      rover.position[0] -= 1;
      break;
    case 's':
      rover.position[1] += 1;
      break;
    case 'e':
      rover.position[0] += 1;
      break;
  }
}
// ====================== movimento de ré ok
function moveBackward(rover) {
  console.log('moveForward was called');
  switch (rover.direction) {
    case 'n':
      rover.position[1] += 1;
      break;
    case 'w':
      rover.position[0] += 1;
      break;
    case 's':
      rover.position[1] -= 1;
      break;
    case 'e':
      rover.position[0] -= 1;
      break;
  }
}
//comandos abaixo

function mov(comando) {
  // salva no historico
  if (comando == 'f' || comando == 'r' || comando == 'l' || comando == 'b') {
    rover.travelLog.push([rover.position[0], rover.position[1]]);
  } else console.log('Comando ignorado');
  // executa comando
  switch (comando) {
    case 'f':
      moveForward(rover);
      break;
    case 'l':
      turnLeft(rover);
      break;
    case 'r':
      turnRight(rover);
      break;
    case 'b':
      moveBackward(rover);
      break;
  }
}

let comandos = 'rffrfflfrff';

for (let i = 0; i < comandos.length; i++) {
  mov(comandos[i]); // entre colchete puxa o caractere na posição i
}
console.log('o histórico é:');
console.log(rover.travelLog);

/*
  let comandosArray = comandos.split("")
  comandosArray.forEach (function(comando){
    mov(comando)
  })*/

// ====================== Aviso de carro fora da grid
if (
  rover.position[0] < 0 ||
  rover.position[0] > 9 ||
  rover.position[1] < 0 ||
  rover.position[1] > 9
) {
  console.log(
    `Rover out the field, at position ${rover.position}, REBUILD your coordinates`
  );
}
// ====================== Retorno de funcionamento ok
else
  console.log(
    `The Rover in on the way! The actual Position X is ${rover.position[0]} and Position Y is ${rover.position[1]}.`
  ); // and facing + ${rover.direction}`)
// ====================== Retorno de direção da frente do carro
switch (rover.direction) {
  case 'n':
    console.log(`It's pointing to North!`);
    break;
  case 's':
    console.log(`It's pointing to South!`);
    break;
  case 'e':
    console.log(`It's pointing to East!`);
    break;
  case 'w':
    console.log(`It's pointing to West!`);
    break;
}
