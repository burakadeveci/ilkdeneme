import { useState } from 'react';

function QuestionForm({ onAdd }) {
  const [text, setText] = useState('');
  const [options, setOptions] = useState(['', '', '', '']);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return alert("Lütfen soru metnini girin!");
    
    onAdd({ text, options });
    setText('');
    setOptions(['', '', '', '']);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  return (
    <form className="question-form" onSubmit={handleSubmit}>
      <h3>Yeni Soru Ekle</h3>
      <input 
        type="text" 
        placeholder="Soru metnini yazın..." 
        value={text} 
        onChange={(e) => setText(e.target.value)} 
      />
      {options.map((opt, index) => (
        <input 
          key={index}
          type="text" 
          placeholder={`${index + 1}. Seçenek`} 
          value={opt} 
          onChange={(e) => handleOptionChange(index, e.target.value)}
        />
      ))}
      <button type="submit">Listeye Ekle</button>
    </form>
  );
}

export default QuestionForm;