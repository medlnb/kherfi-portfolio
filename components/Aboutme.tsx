import React from "react";

function AboutHim() {
  return (
    <main className="mt-10 md:m-0">
      <div className="flex">
        <div className="w-1/2 md:flex hidden justify-end">
          <img
            src={"/kherfi.jpg"}
            className="object-cover"
            alt="Mohammed Lamine Kherfi picture"
          />
        </div>
        <div className="w-full md:w-1/2 p-4 md:p-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-sm md:text-base text-gray-800 mb-3">
            <b>Dr Mohammed Lamine Kherfi</b> holds a PhD from the university of
            Sherbrooke, Canada.
          </p>

          <p className="text-sm md:text-base text-gray-800 mb-3">
            {
              "He worked as a Professor of Computer science and Artificial intelligence at the University of Quebec, Canada and Ouargla University, Algeria. He also served as a national director for digitization at the Ministry of Higher Education and Scientific Research. "
            }
          </p>
          <p className="text-sm md:text-base text-gray-800 mb-3">
            {
              "He is a founding member of the National Higher School of Artificial Intelligence, LAMIA Lab at UQTR and LINATI Lab at UKMO."
            }
          </p>
          <p className="text-sm md:text-base text-gray-800 mb-3">
            <b>Professor Kherfi</b> was one of the first in the world to develop
            image search engines. During his career, he was awarded several
            prizes, and his work was selected as one of the best inventions in
            information technology by the Federation Informatique du Québec.
          </p>
          <p className="text-sm md:text-base text-gray-800 mb-3">
            {
              "He has supervised 13 PhD and dozens of master’s students, organized and chaired two editions of the International Conference on Artificial Intelligence and Information Technology. He has published some 80 research papers in renowned scientific journals and conferences."
            }
          </p>
          <p className="text-sm md:text-base text-gray-800 mb-3">
            <b>As National Director</b> of Digitization at the Ministry of
            Higher Education and Scientific Research, he contributed to drawing
            up the digitization strategy of the higher education sector,
            following up on its implementation, and coordinating digitization
            efforts of 114 universities nationwide.
          </p>
          <p className="text-sm md:text-base text-gray-800">
            He led a team of dozens of programmers who developed several digital
            platforms to manage the registration and education processes for 1.7
            million students and the research and professional activities of
            62,000 teachers/researchers.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row gap-6 md:gap-2 items-center w-full mt-8 px-14 md:px-24">
        {[
          "/uqam.png",
          "/ensia.png",
          "/mesrs.png",
          "/qasdi.png",
          "/Sherbrooke.png",
        ].map((logo) => (
          <div key={logo} className="flex-1">
            <img src={logo} className="flex-1 hover:shadow-lg rounded-md" />
          </div>
        ))}
      </div>
    </main>
  );
}

export default AboutHim;
