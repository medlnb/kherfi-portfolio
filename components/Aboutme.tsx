function Aboutme() {
  return (
    <div className="text-center">
      <h1 className="text-4xl pb-4">About me</h1>
      <div className="grid lg:grid-cols-1 gap-4">
        <article className="border border-gray-500  p-2 rounded-lg">
          <h2 className="text-2xl">As a Director</h2>
          <p className="p-4 text-gray-400">
            As a National Director of Digitization within the Ministry of higher
            education and scientific research, Algeria, I was the main
            responsible for drawing the higher education digitization strategy
            and monitoring its implementation, coordinating the digitization
            efforts of 114 universities nationwide, developing tens of platforms
            and other digital solutions for the management of registration and
            schooling of about 1.7 million students and the careers, teaching
            and research activities of more than 62 000 teachers/researchers,
            accompanying all the universities nationwide in the acquisition of
            computing and network equipment, and improving their online learning
            facilities and systems.
          </p>
        </article>
        <article className="border border-gray-500  p-2 rounded-lg">
          <h2 className="text-2xl">As a Scientist</h2>
          <p className="p-4 text-gray-400">
            During over 18 years of experience as a Professor in two different
            universities and countries: University of Quebec at Trois-Rivières,
            Canada and University of Ouargla, Algeria, I’ve supervised 13 PhD
            and 23 master students, co-founded two research laboratories,
            organized and chaired two editions of an international conference
            and many other workshops, published some 70 papers in renowned
            scientific journals and conferences, deposited an invention patent,
            and taught 15 different courses at graduate and undergraduate
            levels.
          </p>
        </article>
      </div>
    </div>
  );
}

export default Aboutme;
