export interface Category {
  id: number;
  name: string;
  slug: string;
  icon: string;
  productCount: number;
}

export interface Product {
  id: number;
  categoryId: number;
  categorySlug: string;
  name: string;
  slug: string;
  description: string;
  brand: string;
  price: number;
  compareAtPrice?: number;
  stock: number;
  unit: string;
  requiresPrescription: boolean;
  isFeatured: boolean;
  image: string;
  tags: string[];
}

export const CATEGORIES: Category[] = [
  { id: 1, name: "Medicamentos", slug: "medicamentos", icon: "💊", productCount: 24 },
  { id: 2, name: "Cuidado Personal", slug: "cuidado-personal", icon: "🧴", productCount: 18 },
  { id: 3, name: "Bebés", slug: "bebes", icon: "🍼", productCount: 12 },
  { id: 4, name: "Vitaminas y Suplementos", slug: "vitaminas", icon: "💪", productCount: 15 },
  { id: 5, name: "Snacks y Bebidas", slug: "snacks", icon: "🥤", productCount: 20 },
  { id: 6, name: "Productos Médicos", slug: "productos-medicos", icon: "🩺", productCount: 10 },
];

export const PRODUCTS: Product[] = [
  // Medicamentos
  {
    id: 1,
    categoryId: 1,
    categorySlug: "medicamentos",
    name: "Paracetamol 500mg",
    slug: "paracetamol-500mg",
    description: "Analgésico y antipirético. Alivia el dolor y reduce la fiebre. Caja por 20 tabletas.",
    brand: "Genérico",
    price: 3.50,
    stock: 150,
    unit: "caja",
    requiresPrescription: false,
    isFeatured: true,
    image: "/images/products/paracetamol.jpg",
    tags: ["dolor", "fiebre", "analgésico"],
  },
  {
    id: 2,
    categoryId: 1,
    categorySlug: "medicamentos",
    name: "Ibuprofeno 400mg",
    slug: "ibuprofeno-400mg",
    description: "Antiinflamatorio no esteroideo. Alivia dolor, inflamación y fiebre. Caja por 20 tabletas.",
    brand: "Genérico",
    price: 5.00,
    stock: 120,
    unit: "caja",
    requiresPrescription: false,
    isFeatured: false,
    image: "/images/products/ibuprofeno.jpg",
    tags: ["dolor", "inflamación", "fiebre"],
  },
  {
    id: 3,
    categoryId: 1,
    categorySlug: "medicamentos",
    name: "Amoxicilina 500mg",
    slug: "amoxicilina-500mg",
    description: "Antibiótico de amplio espectro. Caja por 21 cápsulas. Requiere receta médica.",
    brand: "Genérico",
    price: 12.00,
    stock: 80,
    unit: "caja",
    requiresPrescription: true,
    isFeatured: false,
    image: "/images/products/amoxicilina.jpg",
    tags: ["antibiótico", "infección"],
  },
  {
    id: 4,
    categoryId: 1,
    categorySlug: "medicamentos",
    name: "Omeprazol 20mg",
    slug: "omeprazol-20mg",
    description: "Protector gástrico. Reduce la producción de ácido. Caja por 14 cápsulas.",
    brand: "Genérico",
    price: 8.50,
    compareAtPrice: 12.00,
    stock: 95,
    unit: "caja",
    requiresPrescription: false,
    isFeatured: true,
    image: "/images/products/omeprazol.jpg",
    tags: ["gastritis", "estómago", "ácido"],
  },
  {
    id: 5,
    categoryId: 1,
    categorySlug: "medicamentos",
    name: "Loratadina 10mg",
    slug: "loratadina-10mg",
    description: "Antialérgico. Alivia rinitis, urticaria y alergias. Caja por 10 tabletas.",
    brand: "Genérico",
    price: 4.00,
    stock: 110,
    unit: "caja",
    requiresPrescription: false,
    isFeatured: false,
    image: "/images/products/loratadina.jpg",
    tags: ["alergia", "rinitis"],
  },

  // Cuidado Personal
  {
    id: 6,
    categoryId: 2,
    categorySlug: "cuidado-personal",
    name: "Protector Solar SPF 50",
    slug: "protector-solar-spf50",
    description: "Protección solar de amplio espectro. Resistente al agua. Tubo de 120ml.",
    brand: "Bioderma",
    price: 45.00,
    compareAtPrice: 55.00,
    stock: 40,
    unit: "tubo",
    requiresPrescription: false,
    isFeatured: true,
    image: "/images/products/protector-solar.jpg",
    tags: ["sol", "protección", "piel"],
  },
  {
    id: 7,
    categoryId: 2,
    categorySlug: "cuidado-personal",
    name: "Crema Hidratante Facial",
    slug: "crema-hidratante-facial",
    description: "Hidratación profunda para piel seca y sensible. Frasco de 50ml.",
    brand: "CeraVe",
    price: 38.00,
    stock: 35,
    unit: "frasco",
    requiresPrescription: false,
    isFeatured: false,
    image: "/images/products/crema-hidratante.jpg",
    tags: ["piel", "hidratante", "rostro"],
  },
  {
    id: 8,
    categoryId: 2,
    categorySlug: "cuidado-personal",
    name: "Shampoo Anticaspa",
    slug: "shampoo-anticaspa",
    description: "Elimina la caspa y alivia la picazón. Frasco de 375ml.",
    brand: "Head & Shoulders",
    price: 22.00,
    stock: 60,
    unit: "frasco",
    requiresPrescription: false,
    isFeatured: false,
    image: "/images/products/shampoo.jpg",
    tags: ["cabello", "caspa", "shampoo"],
  },

  // Bebés
  {
    id: 9,
    categoryId: 3,
    categorySlug: "bebes",
    name: "Pañales Talla M x72",
    slug: "panales-talla-m",
    description: "Pañales ultrasuaves con máxima absorción. Paquete de 72 unidades. Talla M (6-10kg).",
    brand: "Huggies",
    price: 65.00,
    compareAtPrice: 75.00,
    stock: 45,
    unit: "paquete",
    requiresPrescription: false,
    isFeatured: true,
    image: "/images/products/panales.jpg",
    tags: ["bebé", "pañales", "higiene"],
  },
  {
    id: 10,
    categoryId: 3,
    categorySlug: "bebes",
    name: "Fórmula Infantil Etapa 1",
    slug: "formula-infantil-etapa1",
    description: "Fórmula láctea para bebés de 0-6 meses. Lata de 400g.",
    brand: "NAN",
    price: 55.00,
    stock: 30,
    unit: "lata",
    requiresPrescription: false,
    isFeatured: false,
    image: "/images/products/formula.jpg",
    tags: ["bebé", "leche", "fórmula"],
  },

  // Vitaminas
  {
    id: 11,
    categoryId: 4,
    categorySlug: "vitaminas",
    name: "Vitamina C 1000mg",
    slug: "vitamina-c-1000mg",
    description: "Fortalece el sistema inmunológico. Frasco de 100 tabletas efervescentes.",
    brand: "Centrum",
    price: 28.00,
    compareAtPrice: 35.00,
    stock: 70,
    unit: "frasco",
    requiresPrescription: false,
    isFeatured: true,
    image: "/images/products/vitamina-c.jpg",
    tags: ["vitamina", "inmunidad", "defensas"],
  },
  {
    id: 12,
    categoryId: 4,
    categorySlug: "vitaminas",
    name: "Omega 3 Fish Oil",
    slug: "omega3-fish-oil",
    description: "Ácidos grasos esenciales EPA y DHA. Frasco de 60 cápsulas blandas.",
    brand: "Nature Made",
    price: 42.00,
    stock: 55,
    unit: "frasco",
    requiresPrescription: false,
    isFeatured: false,
    image: "/images/products/omega3.jpg",
    tags: ["omega", "corazón", "cerebro"],
  },
  {
    id: 13,
    categoryId: 4,
    categorySlug: "vitaminas",
    name: "Multivitamínico Completo",
    slug: "multivitaminico-completo",
    description: "Vitaminas A, B, C, D, E + minerales esenciales. Frasco de 90 tabletas.",
    brand: "Centrum",
    price: 52.00,
    stock: 40,
    unit: "frasco",
    requiresPrescription: false,
    isFeatured: false,
    image: "/images/products/multivitaminico.jpg",
    tags: ["vitaminas", "minerales", "salud"],
  },

  // Snacks y Bebidas
  {
    id: 14,
    categoryId: 5,
    categorySlug: "snacks",
    name: "Agua Mineral 625ml x6",
    slug: "agua-mineral-6pack",
    description: "Agua mineral natural sin gas. Pack de 6 botellas de 625ml.",
    brand: "San Luis",
    price: 8.00,
    stock: 100,
    unit: "pack",
    requiresPrescription: false,
    isFeatured: false,
    image: "/images/products/agua.jpg",
    tags: ["agua", "bebida", "hidratación"],
  },
  {
    id: 15,
    categoryId: 5,
    categorySlug: "snacks",
    name: "Barra de Cereal x6",
    slug: "barra-cereal-6pack",
    description: "Barras de cereal con frutos secos y miel. Pack de 6 unidades.",
    brand: "Nature Valley",
    price: 12.00,
    stock: 85,
    unit: "pack",
    requiresPrescription: false,
    isFeatured: false,
    image: "/images/products/barra-cereal.jpg",
    tags: ["cereal", "snack", "saludable"],
  },

  // Productos Médicos
  {
    id: 16,
    categoryId: 6,
    categorySlug: "productos-medicos",
    name: "Tensiómetro Digital",
    slug: "tensiometro-digital",
    description: "Monitor de presión arterial digital de brazo. Pantalla LCD grande. Memoria para 60 lecturas.",
    brand: "Omron",
    price: 120.00,
    compareAtPrice: 150.00,
    stock: 15,
    unit: "unidad",
    requiresPrescription: false,
    isFeatured: true,
    image: "/images/products/tensiometro.jpg",
    tags: ["presión", "monitor", "digital"],
  },
  {
    id: 17,
    categoryId: 6,
    categorySlug: "productos-medicos",
    name: "Oxímetro de Pulso",
    slug: "oximetro-pulso",
    description: "Mide saturación de oxígeno y pulso cardíaco. Pantalla OLED. Incluye baterías.",
    brand: "ChoiceMMed",
    price: 45.00,
    stock: 25,
    unit: "unidad",
    requiresPrescription: false,
    isFeatured: false,
    image: "/images/products/oximetro.jpg",
    tags: ["oxígeno", "pulso", "monitor"],
  },
  {
    id: 18,
    categoryId: 6,
    categorySlug: "productos-medicos",
    name: "Termómetro Infrarrojo",
    slug: "termometro-infrarrojo",
    description: "Termómetro digital sin contacto. Medición en 1 segundo. Apto para toda la familia.",
    brand: "Berrcom",
    price: 55.00,
    compareAtPrice: 70.00,
    stock: 20,
    unit: "unidad",
    requiresPrescription: false,
    isFeatured: false,
    image: "/images/products/termometro.jpg",
    tags: ["temperatura", "fiebre", "digital"],
  },
];

export function getProductsByCategory(slug: string): Product[] {
  return PRODUCTS.filter((p) => p.categorySlug === slug);
}

export function getFeaturedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.isFeatured);
}

export function getDiscountedProducts(): Product[] {
  return PRODUCTS.filter((p) => p.compareAtPrice && p.compareAtPrice > p.price);
}

export function getProductBySlug(slug: string): Product | undefined {
  return PRODUCTS.find((p) => p.slug === slug);
}

export function searchProducts(query: string): Product[] {
  const q = query.toLowerCase();
  return PRODUCTS.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.includes(q))
  );
}

export function getCategoryBySlug(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}
