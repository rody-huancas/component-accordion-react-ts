import { Accordion } from "./components/Accordion";

const App = () => {
  const list = [
    {
      question: "Whats your name?",
      answer: "My name is Rody Huancas",
      active: 0,
    },
    {
      question: "Whats do you?",
      answer: "Full-stack developer and designer",
      active: 0,
    },
  ];

  return (
    <div className="bg-[#f2f2f2] h-screen flex items-center justify-center">
      <div className="list flex flex-col gap-5">
        {list.map((item, index) => {
          return (
            <Accordion
              key={index}
              question={item.question}
              answer={item.answer}
              active={item.active}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
