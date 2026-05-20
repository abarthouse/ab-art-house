export default function ABArtHouse() { const products = [ { title: 'Handmade Flower Frame', price: '₹499', image: 'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?q=80&w=1200&auto=format&fit=crop', }, { title: 'Aesthetic Resin Art', price: '₹699', image: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1200&auto=format&fit=crop', }, { title: 'Custom Gift Box', price: '₹899', image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1200&auto=format&fit=crop', }, ];

return ( <div className="min-h-screen bg-[#f7efe7] text-[#5b4332] font-sans"> {/* Navbar */} <nav className="flex items-center justify-between px-8 py-5 bg-[#f2e3d5] shadow-sm sticky top-0 z-50"> <h1 className="text-2xl md:text-3xl font-bold tracking-wide"> AB Art House </h1>

<div className="hidden md:flex gap-6 text-sm font-medium">
      <a href="#home" className="hover:opacity-70 transition">
        Home
      </a>
      <a href="#products" className="hover:opacity-70 transition">
        Products
      </a>
      <a href="#about" className="hover:opacity-70 transition">
        About
      </a>
      <a href="#contact" className="hover:opacity-70 transition">
        Contact
      </a>
    </div>
  </nav>

  {/* Hero */}
  <section
    id="home"
    className="grid md:grid-cols-2 gap-10 items-center px-8 md:px-20 py-16"
  >
    <div>
      <p className="uppercase tracking-[5px] text-sm mb-3 text-[#9a6b4d]">
        Handmade With Love
      </p>

      <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
        Warm & Aesthetic Handmade Creations ✨
      </h2>

      <p className="text-lg leading-relaxed text-[#6f5543] mb-8 max-w-xl">
        Welcome to AB Art House — a cozy little world of handmade crafts,
        custom gifts, resin art, and aesthetic creations made with love.
      </p>

      <div className="flex flex-wrap gap-4">
        <button className="bg-[#8c5a3c] text-white px-6 py-3 rounded-2xl shadow-lg hover:scale-105 transition">
          Shop Now
        </button>

        <button className="border border-[#8c5a3c] px-6 py-3 rounded-2xl hover:bg-[#ead9ca] transition">
          Explore Gallery
        </button>
      </div>
    </div>

    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&w=1200&auto=format&fit=crop"
        alt="Handmade crafts"
        className="rounded-[40px] shadow-2xl object-cover h-[550px] w-full"
      />

      <div className="absolute -bottom-6 -left-6 bg-white rounded-3xl p-5 shadow-xl w-56">
        <p className="text-sm text-[#8c5a3c]">Most Loved ✨</p>
        <h3 className="font-semibold mt-1">Custom Handmade Gifts</h3>
      </div>
    </div>
  </section>

  {/* Products */}
  <section id="products" className="px-8 md:px-20 py-16">
    <div className="text-center mb-12">
      <p className="uppercase tracking-[4px] text-[#9a6b4d] text-sm mb-2">
        Our Collection
      </p>
      <h2 className="text-4xl font-bold">Featured Handmade Products</h2>
    </div>

    <div className="grid md:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <div
          key={index}
          className="bg-[#fff8f3] rounded-[30px] overflow-hidden shadow-lg hover:-translate-y-2 transition duration-300"
        >
          <img
            src={product.image}
            alt={product.title}
            className="h-72 w-full object-cover"
          />

          <div className="p-6">
            <h3 className="text-2xl font-semibold mb-2">
              {product.title}
            </h3>

            <div className="flex items-center justify-between mt-5">
              <p className="text-xl font-bold">{product.price}</p>

              <button className="bg-[#8c5a3c] text-white px-4 py-2 rounded-xl hover:opacity-90 transition">
                Order Now
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </section>

  {/* About */}
  <section
    id="about"
    className="px-8 md:px-20 py-16 bg-[#f2e3d5]"
  >
    <div className="grid md:grid-cols-2 gap-10 items-center">
      <img
        src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?q=80&w=1200&auto=format&fit=crop"
        alt="Craft workspace"
        className="rounded-[35px] shadow-xl h-[450px] object-cover w-full"
      />

      <div>
        <p className="uppercase tracking-[4px] text-[#9a6b4d] text-sm mb-3">
          About Us
        </p>

        <h2 className="text-4xl font-bold mb-6">
          Crafted With Warmth & Creativity 🤎
        </h2>

        <p className="text-lg leading-relaxed text-[#6f5543] mb-5">
          AB Art House is a handmade craft brand focused on creating warm,
          aesthetic and meaningful art pieces. Every creation is designed
          with love, creativity and attention to detail.
        </p>

        <p className="text-lg leading-relaxed text-[#6f5543]">
          From custom gifts to aesthetic home decor — our goal is to make
          every product feel personal and special.
        </p>
      </div>
    </div>
  </section>

  {/* Contact */}
  <section id="contact" className="px-8 md:px-20 py-16">
    <div className="bg-[#fff8f3] rounded-[40px] p-10 md:p-16 shadow-xl text-center">
      <p className="uppercase tracking-[4px] text-[#9a6b4d] text-sm mb-3">
        Contact Us
      </p>

      <h2 className="text-4xl font-bold mb-6">
        Let’s Create Something Beautiful ✨
      </h2>

      <p className="text-lg text-[#6f5543] mb-8 max-w-2xl mx-auto">
        For custom orders, collaborations or handmade gift requests, feel
        free to contact us through Instagram or WhatsApp.
      </p>

      <div className="flex flex-wrap justify-center gap-5">
        <button className="bg-[#8c5a3c] text-white px-7 py-3 rounded-2xl shadow-lg hover:scale-105 transition">
          Instagram Page
        </button>

        <button className="border border-[#8c5a3c] px-7 py-3 rounded-2xl hover:bg-[#ead9ca] transition">
          WhatsApp Orders
        </button>
      </div>
    </div>
  </section>

  {/* Footer */}
  <footer className="text-center py-8 text-[#7a5f4c] text-sm">
    © 2026 AB Art House • Handmade with Love 🤎
  </footer>
</div>

); }
