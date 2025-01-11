'use client'

export default function Greetings(){
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-6xl px-4 animate-fadeInSmooth transform" style={{ transform: 'translateX(8%)' }}>
            <div className="flex flex-col justify-center pb-8">
                <h1 className="text-4xl sm:text-5xl md:text-6xl mb-4 text-[#44624A]">Hi, I&apos;m Andrew</h1>
                <p className="text-lg sm:text-xl md:text-2xl mb-2 text-[#44624A]">NYC based Software Engineer</p>
                <p className="text-base sm:text-lg md:text-xl text-gray-600 pt-12">Currently</p>
                <p className="text-lg sm:text-xl md:text-2xl text-[#44624A]">Software Development Engineer for AWS</p>
            </div>
            <div className="flex items-center justify-center">
                <img
                    src="/matcha2.png"
                    alt="Matcha Glass"
                    className="w-32 sm:w-64 md:w-80 lg:w-96 object-contain"
                />
            </div>
        </div>
    )
}
