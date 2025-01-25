import React from 'react'

const NotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-800 text-white">
      <div className="text-center">
        <h1 className="text-9xl font-extrabold text-red-600 mb-4 animate-bounce">404</h1>
        <p className="text-2xl font-medium text-gray-300">Oops! Page Not Found</p>
        <p className="mt-4 text-lg text-gray-400">The page you're looking for doesn't exist or has been moved.</p>
        <a href="/" className="mt-6 inline-block px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 transition">
          Go Back Home
        </a>
      </div>
    </div>
  )
}

export default React.memo(NotFound)
