import { useState } from 'react';
import QuestionForm from './components/QuestionForm';
import QuestionList from './components/QuestionList';
import './App.css';

function App() {
  const [questions, setQuestions] = useState([]);

  // Yeni soru ekleme fonksiyonu
  const addQuestion = (newQuestion) => {
    setQuestions([...questions, { ...newQuestion, id: Date.now() }]);
  };

  // Soru silme fonksiyonu
  const deleteQuestion = (id) => {
    setQuestions(questions.filter(q => q.id !== id));
  };

  return (
    <div className="App">
      <h1>Sınav Oluşturma Paneli</h1>
      <div className="container">
        <QuestionForm onAdd={addQuestion} />
        <QuestionList questions={questions} onDelete={deleteQuestion} />
      </div>
    </div>
  );
}

export default App;