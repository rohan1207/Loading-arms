export const images = {
  logo: "/logo.png",
  products: {
    topLoading: "/product1.png",
    bottomLoading: "/product1.png",
    testAiders: "/product3.png",
    ptfe: "/product2.png",
    floating: "/product2.png",
    prover: "/product3.png",
  },
  factory: ["/steel1.jpg", "/steel2.jpg", "/steel3.jpg", "/steel4.jpg", "/steel5.jpg"],
  clients: Array.from({ length: 7 }, (_, i) => `/clients/client-${i + 1}.jpg`),
  featuredClients: [
    { name: "HPCL", image: "/clients/client-1.jpg" },
    { name: "Indian Oil", image: "/clients/client-2.jpg" },
    { name: "Deepak Fertilisers", image: "/clients/client-3.jpg" },
    { name: "Reliance Industries", image: "/clients/client-4.jpg" },
    { name: "RCF", image: "/clients/client-5.jpg" },
    { name: "SI Group", image: "/clients/client-6.jpg" },
    { name: "Ministry of Defence", image: "/clients/client-7.jpg" },
  ],
  about: "/steel1.jpg",
  specs: "/steel3.jpg",
  contact: "/steel4.jpg",
  productsHero: "/steel2.jpg",
};

export function getProductImage(productId) {
  const map = {
    "top-loading": images.products.topLoading,
    "bottom-loading": images.products.bottomLoading,
    "test-aiders": images.products.testAiders,
    "ptfe-lined": images.products.ptfe,
  };
  return map[productId] || images.products.topLoading;
}
