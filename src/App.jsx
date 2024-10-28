import { useEffect } from "react";
import { useState } from "react";
//Mount
// Update => state change
//Unmount
const App = () => {
  // https://reactjsquiz.netlify.app/quiz.json
  const [isShowModal, setShowModal] = useState(false);

  const [step, setStep] = useState(0);

  const [answer, setAnswer] = useState(false);

  const [score, setScore] = useState(0);

  const [quiesData, setQuiesData] = useState([
    {
      id: "01",
      question: "Which of the following is the correct name of React.js?",
      options: ["React", "React.js", "ReactJS", "All of the above"],
      answer: "All of the above",
    },
    {
      id: "02",
      question: "Which of the following are the advantages of React.js?",
      options: [
        "React.js can increase the application's performance with Virtual DOM.",
        "React.js is easy to integrate with other frameworks such as Angular, BackboneJS since it is only a view library.",
        "React.js can render both on client and server side.",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      id: "03",
      question: "Which of the following is not a disadvantage of React.js?",
      options: [
        "React.js has only a view layer. We have put your code for Ajax requests, events and so on.",
        "The library of React.js is pretty large.",
        "The JSX in React.js makes code easy to read and write.",
        "The learning curve can be steep in React.js.",
      ],
      answer: "The JSX in React.js makes code easy to read and write.",
    },
    {
      id: "04",
      question:
        "Which of the following command is used to install create-react-app?",
      options: [
        "npm install -g create-react-app",
        "npx create-react-app my-app",
        "npm install create-react-app",
        "npm install -f create-react-app",
      ],
      answer: "npx create-react-app my-app",
    },
    {
      id: "05",
      question:
        "What of the following is used in React.js to increase performance?",
      options: [
        "Original DOM",
        "Virtual DOM",
        "Both A and B.",
        "None of the above.",
      ],
      answer: "Virtual DOM",
    },
    {
      id: "06",
      question: "What is the default port where webpack-server runs?",
      options: ["3000", "8080", "3030", "6060"],
      answer: "3000",
    },
    {
      id: "07",
      question:
        "How many numbers of elements a valid react component can return?",
      options: ["1", "2", "3", "Unlimited"],
      answer: "1",
    },
    {
      id: "08",
      question:
        "What is the declarative way to render a dynamic list of components based on values in an array?",
      options: [
        "Using the reduce array method",
        "Using the <Each /> component",
        "Using the Array.map() method",
        "With a for/while loop",
      ],
      answer: "Using the Array.map() method",
    },
    {
      id: "09",
      question: "What is a state in React?",
      options: [
        "A permanent storage.",
        "Internal storage of the component.",
        "External storage of the component.",
        "None of the above.",
      ],
      answer: "Internal storage of the component.",
    },
    {
      id: "10",
      question: "What are the two ways to handle data in React?",
      options: [
        "State & Props",
        "Services & Components",
        "State & Services",
        "State & Component",
      ],
      answer: "State & Props",
    },
  ]);

  // const getQuizData = async () => {
  //   const data = await fetch("https://reactjsquiz.netlify.app/quiz.json", {
  //     method: "GET",
  //   }).then((data) => data.json());
  //   setQuiesData(data);
  // };

  // useEffect(() => {
  //   //Mount
  //   getQuizData();
  // }, []);

  const handleQuizApp = () => {
    setShowModal(true);
  };
  return (
    <>
      <div className="flex h-full justify-center items-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-gray-50 text-4xl">Basic React JS Quiz</h1>
          <button
            onClick={handleQuizApp}
            className="bg-gray-100 text-gray-950 font-bold rounded px-4 py-2"
          >
            Start Quiz
          </button>
        </div>
      </div>

      {isShowModal ? (
        <div className="fixed h-screen w-screen top-0 left-0 bottom-0 right-0 bg-black/40">
          <div className="bg-modal-back   w-10/12 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-sm p-6 flex flex-col gap-4">
            <div className="flex  justify-between">
              <span className="text-gray-100 text-base font-medium">
                {quiesData[step].question}
              </span>
              <span className="text-green-700 text-lg">{`${step + 1}/${
                quiesData.length
              }`}</span>
            </div>

            <div className="flex flex-col gap-4">
              {/* <div className="p-2 text-gray-50 bg-gray-950 rounded-sm">
                React.js
              </div>
              <div className="p-2 text-gray-50 bg-gray-950 rounded-sm">
                ReactJS
              </div>
              <div className="p-2 text-gray-50 bg-gray-950 rounded-sm">
                All of the above
              </div> */}

              {quiesData[step].options.map((option, index) => (
                <button
                  onClick={() => {
                    if (option === quiesData[step].answer) {
                      setScore((prev) => prev + 5);
                      setAnswer(true);
                    }
                  }}
                  className={`p-2 text-left text-gray-50  rounded-sm ${
                    !answer && "bg-gray-950"
                  } ${
                    answer &&
                    option === quiesData[step].answer &&
                    "bg-green-800"
                  } ${
                    answer && option !== quiesData[step].answer && "bg-red-800"
                  }  `}
                >
                  {option}
                </button>
              ))}

              <button
                onClick={() => {
                  setStep((prev) => prev + 1);
                  setAnswer(false);
                }}
                className="bg-indigo-700 py-2 text-gray-100 rounded-sm"
              >
                Next Question
              </button>
            </div>
          </div>
        </div>
      ) : undefined}
    </>
  );
};

export default App;
