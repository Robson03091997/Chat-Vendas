export const plans = [
  {
    id: 1,
    name: "Básico",
    description: "Curso fundamental de inglês para iniciantes",
    duration: "6 meses",
    numberOfClasses: 48,
    classDuration: "60 minutos",
    price: 199.90,
    originalPrice: 299.90,
    features: [
      "Aulas 2x por semana",
      "Material didático incluído",
      "Acesso à plataforma online",
      "Certificado de conclusão",
      "Suporte via chat"
    ],
    availableCoupons: ["BEMVINDO20", "FAMILIA15"],
    isPopular: false,
    discount: 33
  },
  {
    id: 2,
    name: "Intermediário",
    description: "Aperfeiçoe seu inglês com aulas avançadas",
    duration: "8 meses",
    numberOfClasses: 96,
    classDuration: "75 minutos",
    price: 299.90,
    originalPrice: 399.90,
    features: [
      "Aulas 3x por semana",
      "Material didático incluído",
      "Acesso à plataforma online",
      "Certificado de conclusão",
      "Suporte via chat",
      "Aulas de conversação",
      "Simulados de certificação"
    ],
    availableCoupons: ["BEMVINDO20", "PROMO30", "FAMILIA15"],
    isPopular: true,
    discount: 25
  },
  {
    id: 3,
    name: "Avançado",
    description: "Domine o inglês com fluência nativa",
    duration: "12 meses",
    numberOfClasses: 192,
    classDuration: "90 minutos",
    price: 499.90,
    originalPrice: 699.90,
    features: [
      "Aulas 4x por semana",
      "Material didático incluído",
      "Acesso à plataforma online",
      "Certificado de conclusão",
      "Suporte via chat",
      "Aulas de conversação",
      "Simulados de certificação",
      "Preparação para TOEFL/IELTS",
      "Aulas particulares mensais"
    ],
    availableCoupons: ["BEMVINDO20", "PROMO30"],
    isPopular: false,
    discount: 29
  }
];

export const coupons = [
  {
    code: "BEMVINDO20",
    discount: 20,
    description: "20% de desconto para novos alunos",
    validUntil: "2024-12-31",
    isActive: true
  },
  {
    code: "PROMO30",
    discount: 30,
    description: "30% de desconto em qualquer plano",
    validUntil: "2024-11-30",
    isActive: true
  },
  {
    code: "FAMILIA15",
    discount: 15,
    description: "15% de desconto para grupos familiares",
    validUntil: "2024-12-31",
    isActive: true
  }
];
