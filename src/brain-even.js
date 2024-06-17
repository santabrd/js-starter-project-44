import readlineSync from 'readline-sync';
import getName from './cli.js';

const brainEven = () => {
  let correctsCount = 0;

  const userName = getName();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNumber = Math.round(Math.random() * 100);

    console.log(`Question: ${randomNumber}`);

    const isEven = randomNumber % 2 === 0;
    const correctAnswer = isEven ? 'yes' : 'no';
    const answer = readlineSync.question('Your answer: ');

    if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
      console.log('Correct!');
      correctsCount += 1;
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}`);
      break;
    }
  }

  if (correctsCount === 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};

export default brainEven;
