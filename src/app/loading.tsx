export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-pink-100">
      <div className="relative w-24 h-24">
        <div className="absolute w-24 h-24 bg-pink-500 rounded-full opacity-75 animate-ping"></div>
        <div className="absolute w-24 h-24 bg-pink-400 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute w-24 h-24 bg-pink-300 rounded-full animate-bounce"></div>
        <svg
          className="absolute w-16 h-16 text-white fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>
      </div>
    </div>
  );
}
