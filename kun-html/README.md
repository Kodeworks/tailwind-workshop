# Tailwind med kun HTML

## Oppgave 1: Kom i gang

---

1. Åpne en terminal i denne mappen og kjør kommandoen `npx @compodoc/live-server`
   - Tast inn `y` for å installere
2. Nettleseren burde åpne [index.html](index.html) automatisk.
   - Hvis ikke, åpne nettleseren og naviger til lenken det vises til i terminalen. Sannsynligvis [http://0.0.0.0:8080](http://0.0.0.0:8080).

🎉 Vi har et utgangspunkt!

## Oppgave 2: Rask tilbakemelding

---

Et viktig poeng for en god utvikleropplevelse er _rask tilbakemelding_ - at det tar kort tid fra du skriver kode til du ser en endring.

<details><summary>💡 Kan være greit å få både oppgaven, filen som skal endres og nettleseren på samme skjerm</summary>

![skjermdump av editor med oppgave, index.html og nettleser på samme skjerm](/bilder-til-readme/rask-tilbakemelding.png)

</details>
<br/>

📜 Åpne [index.html](index.html) og fjern en bakgrunnsfarge.

<details><summary>🙈 Løsningsforslag</summary>

Bytt ut `bg-blue-500` i den ytterste diven med `bg-red-500`.

```html
<div class="grid h-screen place-items-center">
  <div class="grid w-auto place-items-center bg-yellow-500 p-4" contenteditable>
    Jeg er en midt på okke som!
  </div>
</div>
```

</details>
<br/>

🎉 Endringen vi gjør vises med en gang!
