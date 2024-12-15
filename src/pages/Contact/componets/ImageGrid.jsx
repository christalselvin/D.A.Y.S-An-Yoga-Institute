import contact1 from "./assets/contact1.png";
const Imagegrid = () => {
  return (
    <section className="mt-12 px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Main Image */}
      <div className="col-span-1 lg:col-span-3">
        <img
          src={contact1}
          alt="Mountain Range"
          className="w-full h-auto rounded-lg s"
        />
      </div>
    </section>
  );
};

export default Imagegrid;
