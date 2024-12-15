import contact2 from "./assets/contact2.png"
const Textimage = () => {
    return (
      <section className="mt-12 px-6">
        <h2 className="text-3xl font-semibold">Discover the Beauty</h2>
        <div className="mt-4">
          <img
            src= {contact2}
            alt="City Night"
            className="w-full h-auto rounded-lg shadow-lg"
          />
          <p className="mt-4 text-lg">
            As night falls, the city transforms, offering a unique experience from its glowing streets to its vibrant nightlife.
          </p>
        </div>
      </section>
    );
  };
  
  export default Textimage;
  