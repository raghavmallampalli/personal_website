export default function MacTitleBar() {
  return (
    <div 
      className="h-8 flex items-center px-3"
      style={{
        backgroundColor: '#000000',
      }}
    >
      <div className="flex space-x-2">
        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      {/* Optional: You could add a window title here if needed */}
      {/* <div className="flex-1 text-center text-xs text-gray-700 dark:text-gray-300">My App</div> */}
    </div>
  );
} 