# Tailwind-konfigurasjon

## Oppgave 1: Kom i gang

---

1. Åpne en terminal, naviger til `/tailwind-konfigurasjon` og kjør kommandoen `npx @compodoc/live-server --entry-file=src/index.html`
   - Tast inn `y` for å installere om det trengs
2. Nettleseren burde åpne [index.html](index.html) automatisk.
   - Hvis ikke, åpne nettleseren og naviger til lenken det vises til i terminalen. Sannsynligvis noe annet enn [http://0.0.0.0:8080](http://0.0.0.0:8080) om du allerede kjører live-server for en annen oppgave.

🎉 Vi har et utgangspunkt! Men det ser glissent ut..

## Oppgave 1: Generer CSS

📜 Åpne en ny terminal (den vi åpnet før må fortsette å kjøre), naviger til `/tailwind-konfigurasjon` og kjør kommandoen `npx tailwindcss -i ./src/tailwind.css -o ./dist/output.css --watch`

💡 Hvordan? Se [Terminal på 1-2-3](../README.md).

👀 Sjekk ut nettleseren!

🎉 Vi har generert CSS med Tailwind og får egen konfigurasjonsfil!

