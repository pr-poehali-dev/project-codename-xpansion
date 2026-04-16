import { Card, CardContent } from "@/components/ui/card"

const gallery = [
  {
    title: "Зал «Восток»",
    category: "Основной зал",
    image: "https://cdn.poehali.dev/projects/40cbff23-6bab-419a-bed5-369c6c4d3446/files/1eaedc91-ccab-4315-97a9-435526660d90.jpg",
    description: "Просторный зал на 40 гостей с восточным декором и мягкими диванами.",
    tags: ["40 мест", "Живая музыка", "Банкеты"],
  },
  {
    title: "VIP комната",
    category: "Приватное пространство",
    image: "https://cdn.poehali.dev/projects/40cbff23-6bab-419a-bed5-369c6c4d3446/files/a9615f2c-53bf-4b55-a1c7-40983ef3a56d.jpg",
    description: "Эксклюзивная комната с персональным обслуживанием и отдельным входом.",
    tags: ["До 12 чел", "Мини-бар", "Приватность"],
  },
  {
    title: "Зал «Оазис»",
    category: "Основной зал",
    image: "https://cdn.poehali.dev/projects/40cbff23-6bab-419a-bed5-369c6c4d3446/files/475eaaca-3ef6-4d2c-afa6-f733cc597c3b.jpg",
    description: "Уютное пространство с восточными коврами, диванами и тёплым освещением.",
    tags: ["25 мест", "Тихая зона", "Уют"],
  },
  {
    title: "Авторские кальяны",
    category: "Кальянная карта",
    image: "https://cdn.poehali.dev/projects/40cbff23-6bab-419a-bed5-369c6c4d3446/files/22543ebf-95c5-4238-a9d4-781675e77f54.jpg",
    description: "Премиальные кальяны от наших мастеров — из 50+ сортов табака со всего мира.",
    tags: ["50+ табаков", "Авторские миксы", "Премиум"],
  },
]

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Наша галерея</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
            Загляните в атмосферу Manarт — уникальные пространства для отдыха, где каждая деталь создана для вашего удовольствия.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {gallery.map((item, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-none shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4">
                  <span className="text-xs font-semibold text-primary bg-primary/10 border border-primary/20 px-3 py-1 rounded-full backdrop-blur-sm">
                    {item.category}
                  </span>
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, tagIndex) => (
                    <span key={tagIndex} className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
