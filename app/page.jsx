export default function Home() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f6ede3",
        padding: "40px",
        fontFamily: "sans-serif",
        color: "#5c4033",
      }}
    >
      <h1
        style={{
          fontSize: "55px",
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        AB Art House
      </h1>

      <p
        style={{
          textAlign: "center",
          fontSize: "20px",
          marginBottom: "50px",
        }}
      >
        Handmade Crafts • Warm Aesthetic • Made with Love ✨
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
          gap: "25px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f"
            alt="craft"
            style={{
              width: "100%",
              borderRadius: "15px",
            }}
          />

          <h2>Handmade Gifts</h2>
          <p>Beautiful customized handmade creations 🤎</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "20px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <img
            src="https://images.unsplash.com/photo-1515377905703-c4788e51af15"
            alt="craft"
            style={{
              width: "100%",
              borderRadius: "15px",
            }}
          />

          <h2>Aesthetic Decor</h2>
          <p>Warm cozy handmade decor items ✨</p>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "60px" }}>
        <button
          style={{
            padding: "15px 30px",
            borderRadius: "15px",
            border: "none",
            background: "#8b5e3c",
            color: "white",
            fontSize: "18px",
            cursor: "pointer",
          }}
        >
          Order Now
        </button>
      </div>
    </main>
  );
      }
