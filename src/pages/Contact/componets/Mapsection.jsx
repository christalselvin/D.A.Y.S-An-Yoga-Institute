const Mapsection = () => {
  return (
    <section className="mt-12 px-6">
      <h2 className="text-3xl font-semibold">Explore with Us</h2>
      <div className="mt-4 bg-gray-100 p-6 rounded-lg shadow-lg">
        <iframe
          title="Map"
          className="w-full h-72 md:h-96 rounded-lg"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1395599234843!2d80.945725!3d26.8990656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39995725eb48e9a7%3A0xd373b75c78c22d17!2s1.0%20DIVY%20ASHISH%20YOGA%20SANSTHAN%20(%20AN%20Yoga%20Institute)!5e0!3m2!1sen!2sin!4v1734249248488!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: '0' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          frameBorder="0"
          aria-hidden="false"
          tabIndex="0"
        ></iframe>
        <p className="mt-4 text-lg">
          Click on the pins to explore these unique places in more detail.
        </p>
      </div>
    </section>
  );
};

export default Mapsection;
