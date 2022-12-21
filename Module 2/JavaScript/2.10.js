'use strict'

// Write a voting program as described below for small-scale meeting use. (8p)
//    The program asks for the number of candidates.
//    Then the program asks for the names of the candidates: 'Name for candidate 1
//    Store the candidates' names and initial vote count in objects like this:

//    The program asks for the number of voters.
//    The program asks each voter in turn who they will vote for. Voter should enter candidate name.
//    If the voter enters an empty value instead of the voting number, it will be interpreted as an empty vote.
//    The program announces the name of the winner and the results by printing it to the console:

const candidates_list = [];
let candidates_number = parseInt(prompt('Enter the desired number of candidates:'))

for (let i = 0; i < candidates_number; i++) {
  let name = prompt('Give name:');
  let candidate =  {'name': name, 'votes': 0};
  candidates_list.push(candidate);
}

let vote_number = parseInt(prompt('Enter the number of voters:'));
for (let n=0; n < vote_number; n++) {
  let selected_candidate = prompt('Enter candidate name to vote for:')
  let indexChecker = candidates_list.findIndex(candidate => candidate.name === selected_candidate);
   if (indexChecker >= 0) {
     candidates_list[indexChecker].votes += 1;
   }
}

let final_list = candidates_list.sort((a, b) => (a.votes < b.votes) ? 1 : (a.votes > b.votes) ? -1 : 0);
console.log('The winner is ' + final_list[0].name + ' with a total of ' + final_list[0].votes + ' vote(s).');
console.log('results:');

for (let x = 0; x < final_list.length; x++) {
   console.log('' + final_list[x].name + ': ' + final_list[x].votes + ' vote(s)');
}