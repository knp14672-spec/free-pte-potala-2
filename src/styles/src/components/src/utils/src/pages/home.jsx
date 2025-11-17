import React from 'react'
import { Link } from 'react-router-dom'
import { MODULES } from '../utils/mockData'

export default function Home(){
  return (
    <main>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {MODULES.map(m=> (
          <Link key={m.id} to={/module/${m.id}} className="p-6 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition">
            <h2 className="text-xl font-bold mb-2">{m.title}</h2>
            <p className="text-sm text-gray-600">Access 2,000 practice questions, AI scoring, and mock tests.</p>
            <div className="mt-4 text-xs text-indigo-600">Open module →</div>
          </Link>
        ))}
      </section>

      <section className="mt-8 p-6">
        <h3 className="text-lg font-semibold">Mock Test & Sessions</h3>
        <p className="text-sm text-gray-600">Each module: 2,000 questions | 100 mock tests | 50 session texts — demo data included. Connect to a backend to persist.</p>
      </section>
    </main>
  )
}
