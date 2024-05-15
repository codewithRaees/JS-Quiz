const allquestions = [
  {
    number: 1,
    quest: "Founder Of Computer?",
    a: "Charless Babbage",
    b: "Bill Gates",
    c: "Martin",
    d: "None of these",
    correct: "Charless Babbage",
  },
  {
    number: 2,
    quest: "OSI model have __________ layers?",
    a: "Charless Babbage",
    b: "Bill Gates",
    c: "Martin",
    d: "None of these",
    correct: "7",
  },
  {
    number: 3,
    quest: "AI stands for?",
    a: "Charless Babbage",
    b: "Bill Gates",
    c: "Martin",
    d: "None of these",
    correct: "Aritificial Intelligence",
  },
  {
    number: 4,
    quest: "BIOS stands for?",
    a: "Charless Babbage",
    b: "Bill Gates",
    c: "Martin",
    d: "None of these",
    correct: "Aritificial Intelligence",
  },
];
const question = document.querySelector(".question");
const mcqbox = document.querySelectorAll(".mcq-box");
allquestions.map((quest) => {
  console.log(quest.quest);
});
question.addEventListener("click", (qnumber) => {
  question.innerText = allquestions[qnumber].quest;
});
