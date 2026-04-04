import { useEffect } from "react";

export default function Garage() {
   useEffect(() => {
            window.scrollTo(0, 0); 
          }, []);
          
  return (
   

    <div className="min-h-screen flex items-center justify-center text-center">
      <h1 className="text-4xl font-bold">Coming soon!!</h1>
    </div>
  );
}