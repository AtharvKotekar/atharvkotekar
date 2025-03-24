const Content = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-start">
      <h1 className="text-4xl font-bold text-black px-10 text-start py-4 mt-10">
        content list.
      </h1>
      <p className="text-xl max-w-200 py-2 px-10 text-start max-w-2xl">
        these are a few pieces of content that i watched & read recently. some
        of which has <span className="text-[#FC5356]">deeply impacted</span> me and a few <span className="text-[#0BAF3C]">inspired</span> me by their depiction.
      </p>


      <ul className="list-disc list-inside text-xl px-10 text-start max-w-200 mt-10">
        <li className="py-2"><a href="https://www.netflix.com/in/title/81040344?source=35" target="_blank" rel="noopener noreferrer">squid game s2 - netflix</a></li>
        <li className="py-2 text-[#FC5356]"><a href="https://www.youtube.com/watch?v=CBYhVcO4WgI&list=PL5q_lef6zVkaTY_cT1k7qFNF2TidHCe-1" target="_blank" rel="noopener noreferrer">stanford's cs183b "how to start a startup" - ycombinator</a></li>
        <li className="py-2"><a href="https://www.goodreads.com/book/show/41721428-can-t-hurt-me" target="_blank" rel="noopener noreferrer" >can't hurt me - david goggins</a></li>
        <li className="py-2 text-[#0BAF3C]"><a href="https://www.youtube.com/watch?v=1Eci3NFbyvw&ab_channel=YouTubeMovies" target="_blank" rel="noopener noreferrer">whiplash - jason zenger</a></li>
      </ul>

      <p className="text-xl max-w-200 py-2 px-10 text-start mt-10">
      lol, i can’t just remember everything right now, so i’ll update this as i recall.
      </p>
    </div>
  );
};

export default Content;
