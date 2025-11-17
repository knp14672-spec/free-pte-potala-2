import React from 'react'
import { Link } from 'react-router-dom'

export default function Header(){
  return (
    <header className="flex items-center justify-between py-6">
      <Link to="/" className="flex items-center gap-3">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold text-xl">P</div>
        <div>
          <h1 className="text-2xl font-extrabold">PTE Practice</h1>
          <p className="text-sm text-gray-600">Practice speaking, listening, reading & writing — with AI scoring</p>
        </div>
      </Link>
      <nav className="flex gap-3">
        <a className="px-4 py-2 rounded-lg border" href="#">Login</a>
        <a className="px-4 py-2 rounded-lg bg-indigo-600 text-white" href="#">Get Started</a>
      </nav>
    </header>
  )
}
