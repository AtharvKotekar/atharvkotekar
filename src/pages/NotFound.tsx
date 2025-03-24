import giff from "../assets/Cat Confuse GIF by Rizal Althur.gif";
const NotFound = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <img src={giff} alt="404" className="max-w-20 max-h-20 opacity-90" />
      <h1 className="text-4xl font-bold text-black mt-4">404</h1>
      <p className="text-xl text-[#7F7F7F]">page not found</p>
    </div>
  );
};

export default NotFound;
