import { useEffect, useState } from "react";

const ads = [
  {
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    text: "🔥 Summer Clothing Sale"
  },
  {
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794",
    text: "📚 Book Festival Offers"
  },
  {
    image: "https://images.unsplash.com/photo-1518443895471-1e4c5c1b8a0c",
    text: "🎧 Electronics Mega Deals"
  },
  {
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
    text: "🎒 Accessories Collection"
  }
];

export default function Advertisement() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ads.length);
    }, 10000); // change every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ad-container">
      <img src={ads[index].image} alt="Advertisement" />
      <div className="ad-text">{ads[index].text}</div>
    </div>
  );
}
