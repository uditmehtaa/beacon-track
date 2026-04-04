import { useEffect } from "react";

export default function Field() {
   useEffect(() => {
            window.scrollTo(0, 0); 
          }, []);
  return (
    
    <div className="min-h-screen flex items-center justify-center text-center">
      <h1 className="text-4xl font-bold">Coming Soon!!</h1>
    </div>
  );
}