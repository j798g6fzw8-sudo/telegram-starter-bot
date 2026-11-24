
import { InlineKeyboard } from "grammy"

export function registerCommands(bot) {
  const keyboard = new InlineKeyboard().webApp(
    "🌐 Открыть Sfera VPN",
    "https://j798g6fzw8-sudo.github.io/sferas_vpn/"
  )

  bot.command("start", (ctx) =>
    ctx.reply(
      "🌐 Добро пожаловать в Sfera VPN!\n\nВыбирай сервер и управляй своим аккаунтом.",
      { reply_markup: keyboard }
    )
  )

  bot.command("help", (ctx) =>
    ctx.reply(
      "❓ Помощь Sfera VPN\n\n/start — Запустить приложение\n/app — Открыть приложение\n/account — Мой аккаунт"
    )
  )

  bot.command("app", (ctx) => ctx.reply("🌐 Открывай Sfera VPN:", {
    reply_markup: keyboard
  }))

  bot.command("account", (ctx) =>
    ctx.reply("👤 Личный кабинет Sfera VPN\n\nТы используешь гостевой режим.")
  )
}
