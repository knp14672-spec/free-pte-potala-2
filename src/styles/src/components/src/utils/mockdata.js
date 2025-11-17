// Demo mock data generator. Replace with real DB/API in production.
export const MODULES = [
  { id: 'speaking', title: 'Speaking' },
  { id: 'listening', title: 'Listening' },
  { id: 'reading', title: 'Reading' },
  { id: 'writing', title: 'Writing' },
]

// Generate n placeholder questions for given module
export function generateQuestions(moduleId, n=10){
  const arr = []
  for(let i=1;i<=n;i++){
    arr.push({
      id: ${moduleId}-${i},
      title: ${moduleId} question ${i},
      prompt: This is a sample ${moduleId} prompt number ${i}. Answer or complete as required.
    })
  }
  return arr
}
