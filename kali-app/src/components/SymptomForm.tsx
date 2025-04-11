import React, { useState } from 'react';

const symptoms = ['Fatigue', 'Vertiges', 'Maux de tête', 'Vision floue'];

export const SymptomForm = ({ onSubmit }: { onSubmit: (data: string[]) => void }) => {
  const [selected, setSelected] = useState<string[]>([]);

  const toggleSymptom = (symptom: string) => {
    setSelected(prev =>
      prev.includes(symptom) ? prev.filter(s => s !== symptom) : [...prev, symptom]
    );
  };

  return (
    <div>
      <h3>Symptômes</h3>
      {symptoms.map(symptom => (
        <label key={symptom}>
          <input
            type="checkbox"
            checked={selected.includes(symptom)}
            onChange={() => toggleSymptom(symptom)}
          />
          {symptom}
        </label>
      ))}
      <button onClick={() => onSubmit(selected)}>Enregistrer</button>
    </div>
  );
};
