import React from "react";
import Header from "./Components/Header";

function App() {
  return (
    <div className="min-h-screen bg-[#11071F] text-white">
      <Header />
      
      <main className="p-6">
        <h1 className="text-3xl font-bold">Welcome to My Website 💜</h1>
        <p className="mt-4 text-gray-300">
          This is your dark UI with Tailwind background color #11071F.
        </p>
      </main>
    </div>
  );
}

export default App;
