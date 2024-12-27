import { useLayoutEffect, useState } from "react";
import { Spinner } from "./components/spinner";
import MyRoutes from "./MyRoutes";

function App() {
  const [loading, setLoading] = useState(true);

  useLayoutEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {loading ? (
        <div className="absolute inset-0 z-40 bg-[#111010] grid min-h-screen w-full place-items-center">
          <Spinner />
        </div>
      ) : (
        <MyRoutes />
      )}
    </>
  );
}

export default App;
