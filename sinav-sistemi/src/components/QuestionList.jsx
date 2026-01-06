function QuestionList({ questions, onDelete }) {
  return (
    <div className="question-list">
      <h3>Sınav Önizleme ({questions.length} Soru)</h3>
      {questions.length === 0 ? <p>Henüz soru eklenmedi.</p> : (
        questions.map((q, index) => (
          <div key={q.id} className="question-card">
            <h4>{index + 1}. {q.text}</h4>
            <ul>
              {q.options.map((opt, i) => (
                <li key={i}>{opt}</li>
              ))}
            </ul>
            <button onClick={() => onDelete(q.id)} className="delete-btn">Sil</button>
          </div>
        ))
      )}
    </div>
  );
}

export default QuestionList;