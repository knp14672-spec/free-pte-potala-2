import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { generateQuestions } from '../utils/mockData'

export default function ModulePage(){
  const { moduleId } = useParams()
  // demo: load 20 questions locally; in production fetch paginated 2000 from server
  const [questions] = useState(()=> generateQuestions(moduleId, 20))
  const [index, setIndex] = useState(0)
  const [answer, setAnswer] = useState('')
  const [score, setScore] = useState(null)

  function submitAnswer(){
    // Demo pseudo-score: length-based. Replace with real AI scoring API.
    const pseudo = Math.min(90, Math.round((answer.trim().length / 200) * 100))
    setScore(pseudo)
  }

  return (
    <div className="mt-6">
      <h2 className="text-2xl font-bold capitalize">{moduleId}</h2>
      <div className="mt-4 grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2 bg-white p-6 rounded-xl shadow">
          <h3 className="font-semibold">Q{index+1}: {questions[index].title}</h3>
          <p className="text-gray-600 my-3">{questions[index].prompt}</p>

          <textarea value={answer} onChange={e=>setAnswer(e.target.value)} rows={8} className="w-full p-3 border rounded" placeholder="Type or paste your answer here..." />

          <div className="flex gap-3 mt-3">
            <button onClick={submitAnswer} className="px-4 py-2 rounded bg-indigo-600 text-white">Submit & Score</button>
            <button onClick={()=>{ setIndex(Math.max(0,index-1)) }} className="px-4 py-2 rounded border">Prev</button>
            <button onClick={()=>{ setIndex(Math.min(questions.length-1,index+1)); setAnswer(''); setScore(null)}} className="px-4 py-2 rounded border">Next</button>
          </div>

          {score !== null && (
            <div className="mt-4 p-3 bg-green-50 rounded">AI Score (demo): <strong>{score}</strong> / 100</div>
          )}
        </div>

        <aside className="bg-white p-4 rounded-xl shadow">
          <h4 className="font-semibold">Module tools</h4>
          <ul className="mt-3 space-y-2 text-sm text-gray-700">
            <li>Questions loaded: {questions.length} (demo — replace with 2000 in DB)</li>
            <li>Mock tests available: 100 (configure server-side)</li>
            <li>Session texts: 50 (configure server-side)</li>
          </ul>

          <div className="mt-4">
            <label className="text-xs">Download question (JSON)</label>
            <pre className="text-xs bg-gray-100 p-2 mt-2 rounded text-ellipsis overflow-x-auto">{JSON.stringify(questions[index],null,2)}</pre>
          </div>
        </aside>
      </div>
    </div>
  )
}
