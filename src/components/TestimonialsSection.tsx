import { useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "Лучшая кальянная в городе! Атмосфера просто волшебная — тёплый свет, восточный декор и невероятно вкусные кальяны. Приходим сюда каждую пятницу.",
    name: "Алина К.",
    role: "Постоянный гость",
  },
  {
    quote: "Отмечали день рождения в VIP комнате. Всё было идеально: персональный мастер, отдельный вход, вкуснейшая кухня. Персонал — просто золото, рекомендую всем!",
    name: "Максим Р.",
    role: "Гость на мероприятии",
  },
  {
    quote: "Была с подругами в зале «Лаунж» — живая музыка, уютная атмосфера и кальян на манго просто покорили. Уже забронировали столик на следующую субботу.",
    name: "Диана Ш.",
    role: "Постоянный гость",
  },
  {
    quote: "Провели корпоратив на весь большой зал. Организация на высшем уровне, меню согласовали заранее, кальяны для всех гостей — всё прошло отлично!",
    name: "Андрей В.",
    role: "Корпоративный клиент",
  },
]

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationFrameId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5

    const scroll = () => {
      scrollPosition += scrollSpeed

      if (scrollContainer.scrollWidth && scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => {
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30 overflow-hidden">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 text-balance">
          Что говорят наши гости
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
          Каждый вечер в Manarт — это особенный опыт. Вот что рассказывают те, кто уже побывал у нас.
        </p>

        <div className="relative">
          <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <Card key={index} className="flex-shrink-0 w-[90vw] sm:w-[450px] border-none shadow-lg">
                <CardContent className="p-8">
                  <Quote className="h-8 w-8 text-primary mb-4" />
                  <p className="text-base sm:text-lg mb-6 leading-relaxed text-pretty min-h-[120px]">
                    {testimonial.quote}
                  </p>
                  <div>
                    <p className="font-semibold text-lg">{testimonial.name}</p>
                    <p className="text-muted-foreground text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
