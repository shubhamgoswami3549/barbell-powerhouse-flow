import { useState } from "react";

type Result = { bmi: number; category: string; tip: string; color: string } | null;

export function BMIForm() {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("male");
  const [result, setResult] = useState<Result>(null);

  const calculate = (e: React.FormEvent) => {
    e.preventDefault();
    const h = parseFloat(height) / 100;
    const w = parseFloat(weight);
    if (!h || !w) return;
    const bmi = +(w / (h * h)).toFixed(1);
    let category = "Normal", tip = "Maintain your routine with balanced training.", color = "text-green-400";
    if (bmi < 18.5) { category = "Underweight"; tip = "Focus on strength training and caloric surplus."; color = "text-yellow-400"; }
    else if (bmi >= 25 && bmi < 30) { category = "Overweight"; tip = "Combine cardio with strength for fat loss."; color = "text-orange-400"; }
    else if (bmi >= 30) { category = "Obese"; tip = "Start with low-impact cardio and a structured diet."; color = "text-red-500"; }
    setResult({ bmi, category, tip, color });
  };

  return (
    <div className="grid lg:grid-cols-2 gap-8 card-base p-8 md:p-10">
      <form onSubmit={calculate} className="space-y-4">
        <h3 className="text-3xl tracking-wider">Calculate Your <span className="text-primary">BMI</span></h3>
        <div className="grid grid-cols-2 gap-4">
          <Field label="Height (cm)" value={height} onChange={setHeight} type="number" />
          <Field label="Weight (kg)" value={weight} onChange={setWeight} type="number" />
          <Field label="Age" value={age} onChange={setAge} type="number" />
          <div>
            <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)} className="w-full bg-input border border-border rounded px-3 py-2.5 focus:outline-none focus:border-primary">
              <option value="male">Male</option><option value="female">Female</option>
            </select>
          </div>
        </div>
        <button type="submit" className="btn btn-primary w-full">Calculate</button>
      </form>

      <div className="flex items-center justify-center text-center bg-background rounded-lg p-8">
        {result ? (
          <div className="animate-fade-up">
            <p className="eyebrow">Your BMI</p>
            <div className="font-display text-7xl text-primary mt-2">{result.bmi}</div>
            <div className={`mt-2 text-xl tracking-wider ${result.color}`}>{result.category}</div>
            <p className="mt-4 text-sm text-muted-foreground max-w-xs">{result.tip}</p>
          </div>
        ) : (
          <div className="text-muted-foreground">
            <p className="eyebrow">Awaiting Input</p>
            <p className="mt-3 text-sm">Fill the form to see your BMI & fitness category.</p>
          </div>
        )}
      </div>
    </div>
  );
}

function Field({ label, value, onChange, type = "text" }: { label: string; value: string; onChange: (v: string) => void; type?: string }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-muted-foreground mb-2">{label}</label>
      <input type={type} value={value} onChange={(e) => onChange(e.target.value)} required
        className="w-full bg-input border border-border rounded px-3 py-2.5 focus:outline-none focus:border-primary" />
    </div>
  );
}
