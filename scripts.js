function getComputerChoice() {
  const computer_choice = [
    "Rock",
    "Paper",
    "Scissor"
  ];
  return Math.trunc(Math.random()*3);
}
console.log(getComputerChoice())
