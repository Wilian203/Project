
let  humanScore  = 0;
let  computerScore = 0;

const getComputChoice = () => {
  const eleccion = ["Piedra", "Papel", "Tijera"];

  let elementoAleatorio = Math.floor(Math.random() * eleccion.length);

  let reultado = eleccion[elementoAleatorio].toLowerCase();;
  return reultado;

};




const getHumanChoice = () => {
  
  let ingresoUsario = prompt("Escoga: Piedra, Papel o Tijera");

  let eleccionHumano =  ingresoUsario.toLowerCase();
  return eleccionHumano;
};


const playRound = (humanChoice, computerChoice)=>{

    if(computerChoice === 'piedra' && humanChoice === 'tijera'){
      computerScore++;
      console.log('!Perdiste! Piedra vence a Tijera')
    }

    else if(humanChoice === 'piedra' && computerChoice === 'tijera'){
      humanScore++;
      console.log('!Ganaste! Piedra vence a tijera');
    }

    else if(computerChoice === 'papel' && humanChoice === 'piedra'){
      computerScore++;
      console.log('!Perdiste! Papel vence a Piedra');
    }
    else if(humanChoice === 'papel' && computerChoice === 'piedra'){
      humanScore++
      console.log('!Ganaste! Papel vence a Piedra');
    }

    else if(computerChoice === 'tijera' && humanChoice === 'papel'){
      computerScore++;
      console.log('!Perdiste! Tijera vence a Papel');
    }

    else if(humanChoice === 'tijera' && computerChoice === 'papel'){
      humanScore++
      console.log('!Ganaste! Tijera vence a Papel');
    }
    else if(humanChoice === computerChoice){
      console.log('Es un emapate')
  }


}




const playGame = ()=>{
  for(let i = 1; i <= 5; i++){
    console.log(`Ronda ${i}`)
     const humanSelection =  getHumanChoice();
     const computerSelecion = getComputChoice();
     playRound(humanSelection,computerSelecion);
  }

  console.log(`Puntajes finales - Usuario: ${humanScore} - Computadora: ${computerScore}`);
  if(humanScore > computerScore){
    console.log('!Ganaste el juego')
  }

  if(computerScore > humanScore){
    console.log('!Perdiste el juego')
  }else{
    console.log('Es un empate')
  }
}

playGame();