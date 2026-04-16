import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Star, Wind, Music, Utensils, Shield } from "lucide-react"

const halls = [
  {
    icon: Users,
    title: "Зал «Восток»",
    description:
      "Просторный зал на 40 гостей с восточным декором, мягкими диванами и приглушённым светом. Идеально для дружеских встреч и корпоративных вечеров.",
  },
  {
    icon: Music,
    title: "Зал «Лаунж»",
    description:
      "Атмосферное пространство с живой музыкой по пятницам и субботам. Вместимость 30 гостей. Уникальная акустика и стильный современный интерьер.",
  },
  {
    icon: Wind,
    title: "Зал «Оазис»",
    description:
      "Уютный зал на 25 гостей с зелёными растениями и натуральными материалами. Спокойная атмосфера для тех, кто ценит тишину и комфорт.",
  },
  {
    icon: Star,
    title: "VIP комната №1",
    description:
      "Приватная комната на 8–12 гостей с персональным обслуживанием, отдельным входом и премиальным выбором табаков. Полная конфиденциальность.",
  },
  {
    icon: Shield,
    title: "VIP комната №2",
    description:
      "Эксклюзивное пространство на 6–10 гостей с авторским дизайном, мини-баром и индивидуальной световой системой. Для самых особенных вечеров.",
  },
  {
    icon: Utensils,
    title: "Ресторанная кухня",
    description:
      "Авторские блюда восточной и европейской кухни. Наш шеф-повар готовит из свежих продуктов. Специальное меню для VIP-гостей по запросу.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/5 animate-pulse" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="inline-block mb-4 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold mx-auto block w-fit">
          Наши пространства
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Залы и <span className="text-primary">VIP комнаты</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed text-lg">
          Три больших зала с уникальной атмосферой и две приватные VIP комнаты — для любого повода найдётся идеальное место.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {halls.map((hall, index) => (
            <Card
              key={index}
              className="group hover:border-primary transition-all duration-300 hover:shadow-xl hover:-translate-y-2 bg-background/50 backdrop-blur-sm"
            >
              <CardHeader>
                <div className="mb-4 inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <hall.icon className="h-6 w-6" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">{hall.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">{hall.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
