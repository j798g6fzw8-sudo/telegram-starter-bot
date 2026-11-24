
import { InlineKeyboard } from "grammy"

const APP_URL = "https://j798g6fzw8-sudo.github.io/sferas_vpn/"

export function registerCommands(bot) {
  bot.command("start", async (ctx) => {
    const keyboard = new InlineKeyboard()
      .webApp("🚀 Открыть Sfera VPN", APP_URL)
      .row()
      .text("📡 Проверить бота", "ping")

    await ctx.reply(
      `💙 Добро пожаловать в Sfera VPN!

Твой интернет. Твои правила.

🌍 Выбирай серверные локации.
👤 Управляй своим аккаунтом.
⚡ Открывай приложение прямо в Telegram.

Sfera VPN — твой новый уровень свободы!

👇 Нажми кнопку ниже, чтобы открыть приложение.`,
      { reply_markup: keyboard }
    )
  })

  bot.command("help", (ctx) =>
    ctx.reply(
      "💙 Sfera VPN — помощь\n\n/start — открыть приложение\n/help — помощь\n/ping — проверить бота\n/id — узнать ID"
    )
  )

  bot.command("ping", (ctx) => ctx.reply("💙 Sfera VPN работает!"))

  bot.command("id", (ctx) =>
    ctx.reply(`Chat ID: ${ctx.chat.id}\nUser ID: ${ctx.from?.id ?? "unknown"}`)
  )

  bot.callbackQuery("ping", async (ctx) => {
    await ctx.answerCallbackQuery({ text: "Sfera VPN работает! 💙" })
  })

  bot.on("message:text", (ctx) => ctx.reply(ctx.message.text))
}
