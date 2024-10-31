import { useEffect } from "react";
import { useState } from "react";
//Mount
// Update => state change
//Unmount
const App = () => {
  const [isShowModal, setShowModal] = useState(false);

  const [step, setStep] = useState(0);

  const [chouse, setChouse] = useState(false);

  const [inCorrectOption, setInCorrectOption] = useState(null);

  const [score, setScore] = useState(0);

  const [quiesData, setQuiesData] = useState([]);

  const getQuizData = async () => {
    const data = await fetch("https://reactjsquiz.netlify.app/quiz.json", {
      method: "GET",
    }).then((data) => data.json());
    setQuiesData(data);
  };

  useEffect(() => {
    //Mount
    getQuizData();
  }, []);

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
                  key={index}
                  onClick={() => {
                    const item = quiesData[step];
                    setChouse(true);

                    if (item.answer !== option) {
                      setInCorrectOption(option);
                    } else {
                      setScore((prev) => prev + 5);
                    }
                  }}
                  className={`p-2 text-left text-gray-50  rounded-sm bg-gray-950  ${
                    chouse &&
                    quiesData[step].answer === option &&
                    "bg-green-700"
                  } ${chouse && option === inCorrectOption && "bg-red-800"} `}
                >
                  {option}
                </button>
              ))}

              <button
                onClick={() => {
                  if (step < 9) {
                    setStep((prev) => prev + 1);
                  }

                  if (step === 8) {
                    setShowModal(false);
                  }
                  setChouse(false);
                }}
                className="bg-indigo-700 py-2 text-gray-100 rounded-sm"
              >
                Next Question
              </button>
            </div>
          </div>
        </div>
      ) : undefined}

      {step === 9 && (
        <div
          className={`fixed top-1/2  left-1/2 -translate-x-1/2 -translate-y-1/2 w-10/12 rounded-sm ${
            score >= 25 ? "bg-green-600" : "bg-red-600"
          } text-gray-100 flex gap-4 justify-center flex-col items-center py-10`}
        >
          <span className="font-bold text-3xl">{`${
            score >= 25 ? "Awesome!" : "Ordinary!"
          }`}</span>
          <span>{`Your score is ${score} out of 50`}</span>

          <button
            onClick={() => {
              setScore(0);
              setStep(0);
              setChouse(false);
            }}
            className="bg-green-100 text-gray-950 rounded-sm px-4 py-2"
          >
            Start Over
          </button>
        </div>
      )}
    </>
  );
};

export default App;
