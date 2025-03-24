import { useEffect, useState } from "react";

export const LoadingScreen = ({onComplete}: {onComplete: () => void}) => {

    const [text,setText] = useState("");
    const fullText = "hello!";

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index));
            index++;


            if(index > fullText.length){
                clearInterval(interval)

                setTimeout(() => {
                    onComplete();
                },1000)
            }
        }, 100);
        return () => clearInterval(interval);
    }, [onComplete]);

    
    return (
        <div className="fixed inset-0 z-50 bg-[#f5f5f7] text-[#1d1d1f] flex flex-col items-center justify-center">
            <div className="mb-4 text-3xl font-bold">
                {text}<span className="animate-blink ml-1"> |</span>
            </div>

        </div>
    );
}