export const questionsKA: question[] = [
    {
      id: "რა იქნება ლოგი?",
      question: `
  function sayHi() {
      console.log(name);
      console.log(age);
      var name = 'Lydia';
      let age = 21;
  }
    
  sayHi(); 
          `,
      answers: [
        "Lydia და undefined",
        "Lydia და ReferenceError",
        "ReferenceError და 21",
        "undefined და ReferenceError",
      ],
      correct_answer_idx:3,
      explanation: `ფუნქციაში ჯერ ვადეკლარირებთ რ...`,
    }
]