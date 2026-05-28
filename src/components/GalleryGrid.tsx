const images = [
  "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80",
  "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&q=80",
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80",
  "https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=800&q=80",
  "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=800&q=80",
  "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?w=800&q=80",
  "https://images.unsplash.com/photo-1583500178690-f7fd39bef0eb?w=800&q=80",
];

export function GalleryGrid() {
  return (
    <section className="section bg-card/40">
      <div className="container-x">
        <div className="text-center mb-12">
          <p className="eyebrow">Inside The Iron Temple</p>
          <h2 className="text-4xl md:text-6xl mt-3">Our <span className="text-primary">Gallery</span></h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {images.map((src, i) => (
            <div key={i} className={`overflow-hidden rounded-lg group ${i % 5 === 0 ? "md:row-span-2 md:col-span-2 aspect-square" : "aspect-square"}`}>
              <img src={src} alt="" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
