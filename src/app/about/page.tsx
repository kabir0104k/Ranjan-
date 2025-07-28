// app/about/page.tsx

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen px-6 py-16 bg-black text-white">
      <div className="max-w-3xl w-full">
        <h1 className="text-5xl font-bold font-heading mb-6 text-center">
          About Me
        </h1>
        <p className="text-lg leading-relaxed font-body text-gray-300 text-center">
          I'm a passionate security researcher recognized by organizations like NASA, Air Canada, and USGS. 
          My focus is on ethical hacking, web app security, and building tools that make vulnerability hunting easier and smarter. 
          I also enjoy automating recon workflows and gamifying the learning process through custom labs.
        </p>

        <div className="mt-10 text-center">
          <p className="text-base font-body text-gray-400">
            Feel free to explore my projects or connect with me.
          </p>
        </div>
      </div>
    </main>
  );
}
