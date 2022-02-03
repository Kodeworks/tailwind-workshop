# Tailwind-konfigurasjon

## Oppgave 1: Kom i gang

---

1. Åpne denne mappen `/tailwind-konfigurasjon` i et eget VSCode-vindu

   - <details><summary>💡 Åpne nytt VSCode-vindu</summary>

     Åpne terminalen i `/tailwind-konfigurasjon` og kjør kommandoen «`code .`», eller velg «File» -> «New Window» i menyen øverst:
     ![Åone eget VSCode-vindu](../bilder-til-readme/tailwind-konfigurasjon/new-window.png)</details>

2. Åpne en terminal, naviger til `/tailwind-konfigurasjon` og kjør kommandoen `npm install`
3. Kjør kommandoen `npx @compodoc/live-server --entry-file=src/index.html`
   - Tast inn `y` for å installere om det trengs
4. Nettleseren burde åpne [index.html](index.html) automatisk.
   - Hvis ikke, åpne nettleseren og naviger til lenken det vises til i terminalen. Sannsynligvis noe annet enn [http://0.0.0.0:8080](http://0.0.0.0:8080) om du allerede kjører live-server for en annen oppgave.

🎉 Vi har et utgangspunkt! Men det ser glissent ut..

## Oppgave 2: Generer CSS

---

📜 Åpne en ny terminal (den vi åpnet før må fortsette å kjøre), naviger til `/tailwind-konfigurasjon` og kjør kommandoen `npx tailwindcss -i ./src/tailwind.css -o ./dist/output.css --watch`

💡 Hvordan? Se [Terminal på 1-2-3](../README.md).

👀 Sjekk ut nettleseren!

🎉 Vi har generert CSS med Tailwind og vår egen konfigurasjonsfil!

## Oppgave 3: Forms plugin

---

I [src/index.html](src/index.html) har vi både en tittel og et [section](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/section)-element med egen tittel og et input-felt som ikke er ferdig stylet enda.

Det som er problematisk her - utenom at det ikke er ferdig stylet - er at vi har et input-felt som ser forskjellig ut i forskjellige nettlesere😱

<details><summary>👀 Klikk for å se sammenligning mellom Safari på iPhone og Chrome på Mac</summary>

<img src="../bilder-til-readme/kun-html/input-safari-iphone.png" alt="input-felt med Safari på iPhone" width="400"/>

<img src="../bilder-til-readme/kun-html/input-chrome-mac.png" alt="input-felt med Chrome på Mac" width="400"/>

</details>

<br/>

Det er ikke all verdens forskjell mellom nettleserne, men det er et problem som går igjen at forskjellige nettlesere har forskjellig _standard styling_ av form-elementer som `<input>`, `checkbox>` osv.  
Tailwind har en [offisiell plugin som heter forms](https://tailwindcss.com/docs/plugins#forms) som løser det problemet!

**Hva er plugins sier du?**  
Plugins er en måte å utvide Tailwind med styling eller utilities som av forskjellige årsaker ikke er inkludert ut av boksen.  
[Forms-pluginen](https://tailwindcss.com/docs/plugins#forms) legger på styling som gjør at alle forms-elementer ser likt ut på tvers av nettlesere.  
Konsekvensen er at det endrer styling for alle skjema-elementer. Dermed gir det mening at det er valgfritt å skru på forms-pluginen slik at man slipper å plutselig måtte gjennomgå alle eksisterende skjema-elementer.

💡 Det finnes en del plugins for funksjonalitet som i ettertid har blitt en del av Tailwind, som er verdt å ha i bakhodet før man tar i bruk en plugin som er [deprecated](https://github.com/aniftyco/awesome-tailwindcss#plugins).
<br/>

📜 Legg til Forms plugin som vist i [dokumentasjonen til forms pluginen](https://github.com/tailwindlabs/tailwindcss-forms#installation).

<details><summary>🙈 Løsningsforslag</summary>

Åpne en ny terminal, naviger til `/tailwind-konfigurasjon`, og kjør kommandoen `npm install @tailwindcss/forms`

Endre `tailwind.config.js` for Tailwind til:

```javascript
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [require("@tailwindcss/forms")],
};
```

</details>

<br/>

👀 Se at terminalvinduet som genererer CSS har skrevet `Rebuilding...` i terminalen.

💡 Dersom du har stoppet prosessene vi startet i terminalen i [oppgave 1](#oppgave-1-kom-i-gang) eller [oppgave 2](#oppgave-2-generer-css) må du starte de igjen med kommandoen som står i oppgaven.

🎉 Vi har tatt i bruk Forms-pluginen, og input-feltet har endret seg litt 👀 !

## Oppgave 4: Functions & Directives

---

Det er ikke bare skjema-elementer som styles forskjellig på tvers av nettlesere. Ut av boksen kommer Tailwind med noe de kaller [preflight](https://tailwindcss.com/docs/preflight), som bl.a. fjerner default-margin som legges på av nettleseren:

<img src="../bilder-til-readme/kun-html/tittel-default-margin.png" alt="h1 tag med default margin i Chrome" height="150"/>
<img src="../bilder-til-readme/kun-html/tittel-user-agent-styling.png" alt="input-felt med Chrome på Mac" height="150"/>

<br/>

Tailwind har heldigvis et bevisst forhold til _cascading_ i CSS som vi snakket om helt i starten av presentasjonen.

De bygger opp den ferdige CSS-fila (`/dist/output.css`) ved bruk av [Functions & Directives](https://tailwindcss.com/docs/functions-and-directives) som vi har definert i [src/tailwind.css](src/tailwind.css). De legger styles fra preflight helt øverst i CSS-fila inn i `@base` som vi vist under, slik at alle CSS-selektorer vi skriver som er _like spesifikke_ får presedens pga. rekkefølgen:

```css
/**
 * This injects Tailwind's base styles and any base styles registered by
 * plugins.
 */
@tailwind base;

/**
 * This injects Tailwind's component classes and any component classes
 * registered by plugins.
 */
@tailwind components;

/**
 * This injects Tailwind's utility classes and any utility classes registered
 * by plugins.
 */
@tailwind utilities;
```

Det er veldig vanlig at nettsiden man lager skal følge en grafisk profil - slik som [Abakus sin grafiske profil](https://abakus.no/brand).  
Med Tailwind kan vi utvide `@base` i [src/tailwind.css](src/tailwind.css) til å inkludere styles som alle elementer skal arve i henhold til den grafiske profilen.

📜 Åpne [tailwind.config.js](/tailwind-konfigurasjon/tailwind.config.js) og legg til fargen `abakus-black` med verdi (`#0d0d0d`)

<details><summary>💡 Fargenavn med bindestrek må være inni "fnutter"</summary>

```javascript
...
  {
    "abakus-black": ...
  },
...

```

</details>

<br/>

<details><summary>🙈 Løsningsforslag</summary>

Endre `tailwind.config.js` for Tailwind til:

```javascript
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "abakus-black": "#0d0d0d",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
```

</details>

<br/>

📜 Se at du får autocomplete for `text-abakus-black` i VSCode når du begynner å skrive `text-ab` som et klassenavn 👀 .

<details><summary>💡 Tips til feilsøking</summary>

- Har du åpnet `/tailwind-konfigurasjon` i et eget VSCode-vindu? Det trengs for at intellisense-pluginen til VSCode skal finne `tailwind.config.js` som inneholder konfigurasjonen vår.
- Spør om hjelp!

</details>
<br/>

🎉 Vi har autocomplete som inkluderer våre egne tilpasninger!

📜 Åpne [src/tailwind.css](src/tailwind.css) og legg til `abakus-black` som [tekst-farge](https://tailwindcss.com/docs/text-color) og sett en større [tekst-størrelse](https://tailwindcss.com/docs/font-size) som styling for `<h1>`-taggen styling i `@base` som vist i [dokumentasjonen](https://tailwindcss.com/docs/preflight#extending-preflight)

<details><summary>🙈 Løsningsforslag</summary>

Endre `src/tailwind.css` til:

```CSS
@tailwind base;

@layer base {
  h1 {
    @apply text-abakus-black text-3xl;
  }
}

@tailwind components;
@tailwind utilities;

```

</details>

<br/>

👀 Se at tittelen på nettsida har blitt større og har fått en svart-fargen fra Abakus sin grafiske profil uten at vi har endret `<h1>`-taggen i [index.html](src/index.html)!

🎉 Nå kan vi la være å skrive Tailwind-utilities for styling som følger det grafiske designet!

# Hurra 🥳 !

Du er gjennom andre del av workshopen om Tailwind! Vi har sett litt på hvordan vi kan konfigurere Tailwind.

Strekk på armene, ta en liten pause og pass på å få i deg noe mat å drikke!

Herfra blir det mer press på deg for følge nysgjerrigheten og bruke ressurser, når vi i [steg 5](../README.md#steg-5-hent-mer-inspirasjon) skal hente mer inspirasjon før du i [steg 6](../README.md#steg-6-hopp-i-det--) skal utforske Tailwind-verdenen på egenhånd!

Deretter er det på tide å fortsetter med [oppgavene i mappen /tailwind-konfigurasjonen](/tailwind-konfigurasjon/README.md), hvor vi dykker ned i hvordan vi kan konfigurere Tailwind ⚙️.
