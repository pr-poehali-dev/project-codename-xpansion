import { Instagram, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-2 text-primary" style={{ fontFamily: "'Playfair Display', serif", letterSpacing: "0.1em" }}>
              ✦ Manarт
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Кальянный ресто-лаунж. Три зала, две VIP комнаты, авторская кухня и атмосфера, в которую хочется возвращаться.
            </p>
            <p className="text-xs text-muted-foreground mt-4">© 2025 Manarт. Все права защищены.</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  О нас
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Залы и VIP
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Галерея
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Меню кальянов
                </a>
              </li>
              <li>
                <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Бронирование
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <div className="space-y-3">
              <div className="flex gap-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="tel:+79001234567"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="h-5 w-5" />
                  <span className="sr-only">Телефон</span>
                </a>
              </div>
              <p className="text-sm text-muted-foreground">Пн–Чт: 15:00–02:00</p>
              <p className="text-sm text-muted-foreground">Пт–Вс: 15:00–04:00</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
