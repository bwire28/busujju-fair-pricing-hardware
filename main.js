/* ==========================================================
   BusuJu Hardware — main.js
   1) Edit CONFIG below with the real business details.
   2) Edit PRODUCTS to add / remove / change products.
   ========================================================== */

const CONFIG = {
  name: "BusuJu Hardware",
  phone: "+256700000000",            // used for the "Call now" button (no spaces)
  phoneDisplay: "+256 700 000 000",  // how the number is shown on the page
  whatsapp: "256700000000",          // WhatsApp number: country code, no + or spaces
  email: "info@busujuhardware.example",
  address: "Busia–Kisumu Road, opposite Busia Central Police Station, Busia District, Uganda",
  mapQuery: "Busia Central Police Station, Busia, Uganda", // used for the Google Map
  social: {
    facebook: "#",   // replace # with your Facebook page link
    instagram: "#",  // replace # with your Instagram link
    tiktok: "#"      // replace # with your TikTok link
  },
  // Opening hours. Index 0 = Sunday ... 6 = Saturday. Use 24-hour time, or null if closed.
  hours: [
    { day: "Sunday",    open: "09:00", close: "14:00" },
    { day: "Monday",    open: "07:30", close: "18:00" },
    { day: "Tuesday",   open: "07:30", close: "18:00" },
    { day: "Wednesday", open: "07:30", close: "18:00" },
    { day: "Thursday",  open: "07:30", close: "18:00" },
    { day: "Friday",    open: "07:30", close: "18:00" },
    { day: "Saturday",  open: "08:00", close: "17:00" }
  ]
};

/* ---------- Products (placeholder list — replace with the real stock) ---------- */
const CATEGORIES = [
  "Steel & Metal",
  "Cement & Masonry",
  "Roofing",
  "Plastics & Plumbing",
  "Paints & Finishes",
  "Timber & Boards",
  "Electrical",
  "Tools & Fixings"
];

const PRODUCTS = [
  // Steel & Metal
  { name: "Reinforcement Bars (Y8–Y20)", category: "Steel & Metal", desc: "High-tensile steel bars for slabs, beams and columns.", image: "images/Reinforcement Bars (Y8–Y20).jpg" },
  { name: "Angle Iron", category: "Steel & Metal", desc: "Strong angle sections for frames, gates and supports.", image: "images/Angle Iron.jpg" },
  { name: "Square & Round Tubes", category: "Steel & Metal", desc: "Hollow sections for grills, fences and structures.", image: "images/Square & Round Tubes.jpg" },
  { name: "Flat Bars", category: "Steel & Metal", desc: "Versatile flat steel for fabrication and repairs.", image: "images/Flat Bars.jpg" },
  { name: "Welded Mesh (BRC)", category: "Steel & Metal", desc: "Reinforcement mesh for floors and slabs.", image: "images/Welded Mesh (BRC).jpg" },
  { name: "Binding Wire", category: "Steel & Metal", desc: "Soft annealed wire for tying reinforcement.", image: "images/Binding Wire.jpg" },

  // Cement & Masonry
  { name: "Portland Cement", category: "Cement & Masonry", desc: "Quality cement for concrete, plaster and blockwork.", image: "images/Portland Cement.jpg" },
  { name: "Tile Adhesive & Grout", category: "Cement & Masonry", desc: "Strong bonding for floor and wall tiles.", image: "images/Tile Adhesive & Grout.jpg" },
  { name: "Floor & wall tiles", category: "Cement & Masonry", desc: "Floor and wall tiles in a range of styles and finishes.", image: "images/Floor & wall tiles.jpg" },
  { name: "Waterproofing Compound", category: "Cement & Masonry", desc: "Protects roofs, tanks and basements from moisture.", image: "images/Waterproofing Compound.jpg" },
  { name: "Damp-Proof Membrane", category: "Cement & Masonry", desc: "Heavy-duty sheeting laid under floor slabs.", image: "images/Damp-Proof Membrane.jpg" },

  // Roofing
  { name: "Corrugated Iron Sheets", category: "Roofing", desc: "Durable galvanised sheets in several gauges.", image: "images/Corrugated Iron Sheets.jpg" },
  { name: "Colour-Coated Roofing Sheets", category: "Roofing", desc: "Long-lasting coated sheets in popular colours.", image: "images/Colour-Coated Roofing Sheets.jpg" },
  { name: "Ridge Caps", category: "Roofing", desc: "Finishing caps for a neat, weatherproof ridge.", image: "images/Ridge Caps.jpg" },
  { name: "Roofing Nails & Screws", category: "Roofing", desc: "Fixings with washers for secure roof sheets.", image: "images/Roofing Nails & Screws.jpg" },

  // Plastics & Plumbing
  { name: "PVC Pipes", category: "Plastics & Plumbing", desc: "Pressure and drainage pipes in all common sizes.", image: "images/PVC Pipes.jpg" },
  { name: "Water Tanks", category: "Plastics & Plumbing", desc: "Strong plastic storage tanks for homes and sites.", image: "images/Water Tanks.jpg" },
  { name: "Pipe Fittings", category: "Plastics & Plumbing", desc: "Elbows, tees, sockets, valves and connectors.", image: "images/Pipe Fittings.jpg" },
  { name: "Taps & Mixers", category: "Plastics & Plumbing", desc: "Reliable taps for kitchens, bathrooms and yards.", image: "images/Taps & Mixers.jpg" },
  { name: "Plastic Gutters", category: "Plastics & Plumbing", desc: "Rainwater gutters with brackets and joiners.", image: "images/Plastic Gutters.jpg" },

  // Paints & Finishes
  { name: "Emulsion Paint", category: "Paints & Finishes", desc: "Smooth interior and exterior wall paint.", image: "images/Emulsion Paint.jpg" },
  { name: "Gloss & Enamel Paint", category: "Paints & Finishes", desc: "Tough finish for metal, wood and doors.", image: "images/Gloss & Enamel Paint.jpg" },
  { name: "Roof Paint", category: "Paints & Finishes", desc: "Weather-resistant coating for iron sheets.", image: "images/Roof Paint.jpg" },
  { name: "Wood Varnish", category: "Paints & Finishes", desc: "Protects and enhances timber surfaces.", image: "images/Wood Varnish.jpg" },
  { name: "Primer & Undercoat", category: "Paints & Finishes", desc: "Base coats for better paint coverage and grip.", image: "images/Primer & Undercoat.jpg" },
  { name: "Brushes & Rollers", category: "Paints & Finishes", desc: "Painting tools for a clean professional finish.", image: "images/Brushes & Rollers.jpg" },

  // Timber & Boards
  { name: "Construction Timber", category: "Timber & Boards", desc: "Seasoned timber for roofing and framing.", image: "images/Construction Timber.jpg" },
  { name: "Plywood", category: "Timber & Boards", desc: "Strong boards for furniture, ceilings and formwork.", image: "images/Plywood.jpg" },
  { name: "Hardboard & MDF", category: "Timber & Boards", desc: "Smooth boards for cabinets and partitions.", image: "images/Hardboard & MDF.jpg" },

  // Electrical
  { name: "Electrical Cables", category: "Electrical", desc: "Copper cables for house and site wiring.", image: "images/Electrical Cables.jpg" },
  { name: "Conduit Pipes", category: "Electrical", desc: "Protective piping for concealed wiring.", image: "images/Conduit Pipes.jpg" },
  { name: "Switches & Sockets", category: "Electrical", desc: "Safe, durable wiring accessories.", image: "images/Switches & Sockets.jpg" },
  { name: "Bulbs & Fittings", category: "Electrical", desc: "Energy-saving lighting for every room.", image: "images/Bulbs & Fittings.jpg" },

  // Tools & Fixings
  { name: "Nails & Screws", category: "Tools & Fixings", desc: "Wide range of sizes for wood and metal.", image: "images/Nails & Screws.jpg" },
  { name: "Hand Tools", category: "Tools & Fixings", desc: "Hammers, saws, spades, trowels and more.", image: "images/Hand Tools.jpg" },
  { name: "Wheelbarrows", category: "Tools & Fixings", desc: "Heavy-duty barrows for building sites.", image: "images/Wheelbarrows.jpg" },
  { name: "Padlocks & Hinges", category: "Tools & Fixings", desc: "Security hardware for doors and gates.", image: "images/Padlocks & Hinges.jpg" }
];

/* ==========================================================
   Code below this line normally does not need editing.
   ========================================================== */

const ICON_IMAGE =
  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="1.7"/><path d="M21 16l-5-5-8 8"/></svg>';

const WA_BASE = () => `https://wa.me/${CONFIG.whatsapp}`;

/* ---------- Fill in contact details everywhere ---------- */
function applyConfig() {
  document.querySelectorAll("[data-phone-text]").forEach(el => (el.textContent = CONFIG.phoneDisplay));
  document.querySelectorAll("[data-phone-link]").forEach(el => (el.href = `tel:${CONFIG.phone}`));
  document.querySelectorAll("[data-whatsapp-link]").forEach(el => {
    el.href = `${WA_BASE()}?text=${encodeURIComponent("Hello " + CONFIG.name + ", I would like to make an enquiry.")}`;
    el.target = "_blank";
    el.rel = "noopener";
  });
  document.querySelectorAll("[data-email-text]").forEach(el => (el.textContent = CONFIG.email));
  document.querySelectorAll("[data-email-link]").forEach(el => (el.href = `mailto:${CONFIG.email}`));
  document.querySelectorAll("[data-address-text]").forEach(el => (el.textContent = CONFIG.address));
  document.querySelectorAll("[data-social]").forEach(el => {
    const url = CONFIG.social[el.dataset.social];
    if (url) el.href = url;
    if (url && url !== "#") { el.target = "_blank"; el.rel = "noopener"; }
  });
  document.querySelectorAll("[data-year]").forEach(el => (el.textContent = new Date().getFullYear()));
  const map = document.getElementById("map-frame");
  if (map) map.src = `https://www.google.com/maps?q=${encodeURIComponent(CONFIG.mapQuery)}&output=embed`;
  const dir = document.getElementById("directions-link");
  if (dir) dir.href = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(CONFIG.mapQuery)}`;
}

/* ---------- Mobile navigation ---------- */
function initNav() {
  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (!toggle || !links) return;
  toggle.addEventListener("click", () => {
    const open = links.classList.toggle("open");
    toggle.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", open);
  });
  links.querySelectorAll("a").forEach(a =>
    a.addEventListener("click", () => {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", false);
    })
  );
  const header = document.querySelector(".header");
  const onScroll = () => header && header.classList.toggle("scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

/* ---------- Reveal on scroll ---------- */
function initReveal() {
  const items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) { items.forEach(i => i.classList.add("in")); return; }
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { threshold: 0.12 });
  items.forEach(i => io.observe(i));
}

/* ---------- Opening hours (contact page) ---------- */
function to12h(t) {
  const [h, m] = t.split(":").map(Number);
  const suffix = h >= 12 ? "PM" : "AM";
  return `${((h + 11) % 12) + 1}:${String(m).padStart(2, "0")} ${suffix}`;
}
function initHours() {
  const list = document.getElementById("hours-list");
  const badge = document.getElementById("open-status");
  if (!list) return;
  const now = new Date();
  const today = now.getDay();
  list.innerHTML = "";
  // Show Monday first, Sunday last
  [1, 2, 3, 4, 5, 6, 0].forEach(i => {
    const h = CONFIG.hours[i];
    const li = document.createElement("li");
    if (i === today) li.classList.add("today");
    li.innerHTML = `<span>${h.day}</span><span>${h.open ? to12h(h.open) + " – " + to12h(h.close) : "Closed"}</span>`;
    list.appendChild(li);
  });
  if (badge) {
    const h = CONFIG.hours[today];
    const mins = now.getHours() * 60 + now.getMinutes();
    const toMin = t => { const [a, b] = t.split(":").map(Number); return a * 60 + b; };
    const open = h.open && mins >= toMin(h.open) && mins < toMin(h.close);
    badge.textContent = open ? "Open now" : "Closed now";
    badge.className = "status " + (open ? "open" : "closed");
  }
}

/* ---------- Products page: search + filter ---------- */
function initProducts() {
  const grid = document.getElementById("product-grid");
  if (!grid) return;
  const search = document.getElementById("product-search");
  const filters = document.getElementById("filters");
  const count = document.getElementById("result-count");
  const empty = document.getElementById("empty-state");
  let activeCat = "All";

  // Allow links like products.html?category=Roofing
  const params = new URLSearchParams(location.search);
  const catParam = params.get("category");
  if (catParam && CATEGORIES.includes(catParam)) activeCat = catParam;

  // Build filter chips
  ["All", ...CATEGORIES].forEach(cat => {
    const b = document.createElement("button");
    b.type = "button";
    b.className = "chip" + (cat === activeCat ? " active" : "");
    b.textContent = cat;
    b.addEventListener("click", () => {
      activeCat = cat;
      filters.querySelectorAll(".chip").forEach(c => c.classList.toggle("active", c === b));
      render();
    });
    filters.appendChild(b);
  });

  function card(p) {
    const media = p.image
      ? `<img src="${p.image}" alt="${p.name}" loading="lazy">`
      : ICON_IMAGE;
    const msg = encodeURIComponent(`Hello ${CONFIG.name}, I would like to enquire about: ${p.name}`);
    return `
      <article class="product-card reveal in">
        <div class="product-img">${media}<span class="tag">${p.category}</span></div>
        <div class="product-body">
          <h3>${p.name}</h3>
          <p>${p.desc}</p>
          <a class="btn btn-whatsapp btn-sm" href="${WA_BASE()}?text=${msg}" target="_blank" rel="noopener">Enquire on WhatsApp</a>
        </div>
      </article>`;
  }

  function render() {
    const q = (search.value || "").trim().toLowerCase();
    const list = PRODUCTS.filter(p =>
      (activeCat === "All" || p.category === activeCat) &&
      (!q || (p.name + " " + p.desc + " " + p.category).toLowerCase().includes(q))
    );
    grid.innerHTML = list.map(card).join("");
    count.textContent = `Showing ${list.length} of ${PRODUCTS.length} products`;
    empty.classList.toggle("show", list.length === 0);
  }

  search.addEventListener("input", render);
  render();
}

document.addEventListener("DOMContentLoaded", () => {
  applyConfig();
  initNav();
  initReveal();
  initHours();
  initProducts();
});
