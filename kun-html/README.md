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

![skjermdump av editor med oppgave, index.html og nettleser på samme skjerm](/bilder-til-readme/kun-html/rask-tilbakemelding.png)

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

## Oppgave 3: Bakgrunnsfarge

---

📜 Sjekk ut [den lekre innebygde fargepaletten](https://tailwindcss.com/docs/customizing-colors) som følger med Tailwind, og prøv å endre bakgrunnen fra blå til noe mer rødaktig.

<details><summary>🙈 Løsningsforslag</summary>

Bytt ut `bg-blue-500` i den ytterste diven med `bg-red-500`.

```html
<div class="grid h-screen place-items-center bg-red-500">
  <div class="grid w-auto place-items-center bg-yellow-500 p-4" contenteditable>
    Jeg er en midt på okke som!
  </div>
</div>
```

</details>
<br/>

🎉 Vi har brukt vår første Tailwind-utility!
<br/>

## Oppgave 4: Egendefinert bakgrunnsfarge

---

Rødfargen er grei den, men den varmer ikke like mye som rødfargen i [Abakus sin grafiske profil](https://abakus.no/brand)! La oss definere vår egen farge 🎨 !

[Dokumentasjonen](https://tailwindcss.com/docs/adding-custom-styles) peker på flere måter å legge til egen styling. Den enkleste ser ut til å være å bruke [arbitrary values](https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values).

📜 Bruk arbitrary values til å legge på Abakus sin mørke rødfarge (`#B21C17`) som bakgrunn.

<details><summary>🙈 Løsningsforslag</summary>

Bytt ut `bg-red-500` i den ytterste diven med `bg-[#B21C17]`.

```html
<div class="grid h-screen place-items-center bg-[#B21C17]">
  <div class="grid w-auto place-items-center bg-yellow-500 p-4" contenteditable>
    Jeg er en midt på okke som!
  </div>
</div>
```

</details>

<br/>

🎉 Vi har tatt i bruk vår egen styling!

## Oppgave 5: Tilpasset theme

---

🤔 Tailwind beskriver arbitrary values som inline styles, og Eivind sa jo at vi ikke skulle forholde oss til inline styles helt i starten da vi snakket om [cascading](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)? Det er helt riktig!

Vi vil mye heller bruke [theming](https://tailwindcss.com/docs/theme). For da kan vi gjenbruke fargen `abakus` i utilities som bruker farger 🧑‍🎨.

> F.eks. i `text-abakus` for tekst, `bg-abakus` for bakgrunn, `border-abakus` for borders og `text-decoration-abakus` for fargen på understreking osv.

Enn så lenge har vi et veldig enkelt oppsett, uten noen dedikert konfigurasjonsfil som det refereres til i [dokumentasjonen](https://tailwindcss.com/docs/configuration). Det løser vi ved å bruke en `<script>`-tag under `<head>` i [index.html](index.html) som vist i [steg 2 om bruk av Play CDN](https://tailwindcss.com/docs/installation/play-cdn)!

<br/>

📜 Legg til en tailwind-konfigurasjonen som har en farge ved navn `abakus` og verdi `#B21C17`, og bruk den for bakgrunn i steden for i steden for arbitrary value.

<details><summary>🙈 Løsningsforslag</summary>

legg til script-tag under `<head>`

```html
<script>
  tailwind.config = {
    theme: {
      extend: {
        colors: {
          abakus: "#B21C17",
        },
      },
    },
  };
</script>
```

Bytt ut `bg-[#B21C17]` i den ytterste diven med `bg-abakus`.

```html
<div class="bg-abakus grid h-screen place-items-center">
  <div class="grid w-auto place-items-center bg-yellow-500 p-4" contenteditable>
    Jeg er en midt på okke som!
  </div>
</div>
```

</details>

<br/>

🎉 Vi har utvidet konfigurasjonen til Tailwind! 🤔 Men det ser fortsatt helt likt ut..

## Oppgave 6: Pynte fordi vi kan 💃

---

📜 Legg på en [text-decoration](https://tailwindcss.com/docs/text-decoration) med `abakus`-[farge](https://tailwindcss.com/docs/text-decoration-color) og [style](https://tailwindcss.com/docs/text-decoration-style)

<details><summary>🙈 Løsningsforslag</summary>

Vi kan f.eks. legge på `underline` for understrek, `decoration-abakus` for sette `abakus`-fargen og `decoration-wavy` fordi det er litt uvanlig!

```html
<div
  class="bg-abakus decoration-abakus grid h-screen place-items-center underline decoration-wavy"
>
  <div class="grid w-auto place-items-center bg-yellow-500 p-4" contenteditable>
    Jeg er en midt på okke som!
  </div>
</div>
```

</details>

<br/>

🎉 Vi har gjenbrukt fargen vår fra konfigurasjonen i flere Tailwind utilities!

## Oppgave 7: Syvmilssteg

---

La oss ta et lite syvmilssteg, og se hva som er mulig å få til uten noe mer konfigurasjon av Tailwind.

📜 Erstatt hele `<body>`-tagen med innholdet fra HTML-fanen i denne [CodePen-demoen](https://codepen.io/steveschoger/pen/YbQXGq).

<details><summary>🙈 Løsningsforslag</summary>

Hele index.html-filen burde se slik ut:

```html
<body class="bg-gray-200 font-sans antialiased">
  <div class="mx-auto max-w-6xl">
    <div class="flex min-h-screen items-center justify-center">
      <div class="w-full max-w-sm py-6 px-3 sm:w-1/2 lg:w-1/3">
        <div class="overflow-hidden rounded-lg bg-white shadow-xl">
          <div
            class="h-56 bg-cover bg-center p-4"
            style="
                background-image: url(https://images.unsplash.com/photo-1475855581690-80accde3ae2b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80);
              "
          >
            <div class="flex justify-end">
              <svg
                class="h-6 w-6 fill-current text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12.76 3.76a6 6 0 0 1 8.48 8.48l-8.53 8.54a1 1 0 0 1-1.42 0l-8.53-8.54a6 6 0 0 1 8.48-8.48l.76.75.76-.75zm7.07 7.07a4 4 0 1 0-5.66-5.66l-1.46 1.47a1 1 0 0 1-1.42 0L9.83 5.17a4 4 0 1 0-5.66 5.66L12 18.66l7.83-7.83z"
                ></path>
              </svg>
            </div>
          </div>
          <div class="p-4">
            <p class="text-sm font-bold uppercase tracking-wide text-gray-700">
              Detached house • 5y old
            </p>
            <p class="text-3xl text-gray-900">$750,000</p>
            <p class="text-gray-700">742 Evergreen Terrace</p>
          </div>
          <div class="flex border-t border-gray-300 p-4 text-gray-700">
            <div class="inline-flex flex-1 items-center">
              <svg
                class="mr-3 h-6 w-6 fill-current text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M0 16L3 5V1a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4l3 11v5a1 1 0 0 1-1 1v2h-1v-2H2v2H1v-2a1 1 0 0 1-1-1v-5zM19 5h1V1H4v4h1V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1h2V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1zm0 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V6h-2v2a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V6H3.76L1.04 16h21.92L20.24 6H19zM1 17v4h22v-4H1zM6 4v4h4V4H6zm8 0v4h4V4h-4z"
                ></path>
              </svg>
              <p><span class="font-bold text-gray-900">3</span> Bedrooms</p>
            </div>
            <div class="inline-flex flex-1 items-center">
              <svg
                class="mr-3 h-6 w-6 fill-current text-gray-600"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M17.03 21H7.97a4 4 0 0 1-1.3-.22l-1.22 2.44-.9-.44 1.22-2.44a4 4 0 0 1-1.38-1.55L.5 11h7.56a4 4 0 0 1 1.78.42l2.32 1.16a4 4 0 0 0 1.78.42h9.56l-2.9 5.79a4 4 0 0 1-1.37 1.55l1.22 2.44-.9.44-1.22-2.44a4 4 0 0 1-1.3.22zM21 11h2.5a.5.5 0 1 1 0 1h-9.06a4.5 4.5 0 0 1-2-.48l-2.32-1.15A3.5 3.5 0 0 0 8.56 10H.5a.5.5 0 0 1 0-1h8.06c.7 0 1.38.16 2 .48l2.32 1.15a3.5 3.5 0 0 0 1.56.37H20V2a1 1 0 0 0-1.74-.67c.64.97.53 2.29-.32 3.14l-.35.36-3.54-3.54.35-.35a2.5 2.5 0 0 1 3.15-.32A2 2 0 0 1 21 2v9zm-5.48-9.65l2 2a1.5 1.5 0 0 0-2-2zm-10.23 17A3 3 0 0 0 7.97 20h9.06a3 3 0 0 0 2.68-1.66L21.88 14h-7.94a5 5 0 0 1-2.23-.53L9.4 12.32A3 3 0 0 0 8.06 12H2.12l3.17 6.34z"
                ></path>
              </svg>
              <p><span class="font-bold text-gray-900">2</span> Bathrooms</p>
            </div>
          </div>
          <div class="border-t border-gray-300 bg-gray-100 px-4 pt-3 pb-4">
            <div
              class="text-xs font-bold uppercase tracking-wide text-gray-600"
            >
              Realtor
            </div>
            <div class="flex items-center pt-2">
              <div
                class="mr-3 h-10 w-10 rounded-full bg-cover bg-center"
                style="
                    background-image: url(https://images.unsplash.com/photo-1500522144261-ea64433bbe27?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=751&q=80);
                  "
              ></div>
              <div>
                <p class="font-bold text-gray-900">Tiffany Heffner</p>
                <p class="text-sm text-gray-700">(555) 555-4321</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
```

</details>

<br/>

🎉 Vi har fått til noe som ser fantastisk ut!

## Oppgave 8: CopyCat Alert😺

---

Det finnes mange ferdige komponenter og layouts tilgjengelig for inspirasjon på f.eks. [CodePen](https://codepen.io/topic/tailwind/picks) og [tailwindtoolbox](https://www.tailwindtoolbox.com/).  
En lengre liste med sider finnes i [awesome-tailwind](https://github.com/aniftyco/awesome-tailwindcss#ui-libraries-components--templates)-repoet.  
Det finnes også [builtwithtailwind.com](https://builtwithtailwind.com/) som viser nettsider stylet med Tailwind.

En stor fordel med Tailwind er at man kan bygge videre på og tilpasse eksisterende innhold. Det er bare å kopiere HTMLen som inneholder Tailwind-utilities! Man må bare være obs på at det man kopierer ikke er avhengig av en gammel versjon av Tailwind, og om det trenger noe konfigurasjon eller egen CSS.

Vi gikk gjennom hvordan man kan style en suksessmelding i presentasjonen.

📜 Fjern det vi har i `<body`-taggen, og kopier en suksessmelding fra [dette åpne Tailwind-biblioteket](https://flowbite.com/docs/components/alerts/) inn i [index.html](index.html).

<details><summary>🙈 Løsningsforslag</summary>

```html
<body>
  <div
    class="mb-4 rounded-lg bg-green-100 p-4 text-sm text-green-700 dark:bg-green-200 dark:text-green-800"
    role="alert"
  >
    <span class="font-medium">Success alert!</span> Change a few things up and
    try submitting again.
  </div>
</body>
```

</details>

<br/>

🎉 Vi har en suksessmelding! Men her var det mye ukjente utilities 🤔

## Liten oppfrisker om CSS Box Model.

[CSS Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model) er et sentralt konsept. Her er en veldig fin illustrasjon til hvordan til hvordan `margin`, `border`, `padding` og `content` henger sammen:

<img src="https://pbs.twimg.com/media/FJ3qJcAXwAsFRTL?format=jpg&name=medium" alt="input-felt med Chrome på Mac" width="800"/>

## Oppgave 9: Margin - intimsone

---

La oss bryte ned navnekonvensjonen til [margin i Tailwind](https://tailwindcss.com/docs/margin)!  
I `mb-4` står `m` for margin, `b` for bottom og `-4` er [hvordan vi spesifiserer størrelser i Tailwind](https://tailwindcss.com/docs/customizing-spacing).

Veldig enkelt forklart kan vi si at marginen er intimsonen til et element som illustrert [over](#liten-oppfrisker-om-css-box-model).

📜 Legg til enda en til alert helt lik den vi allerede har.

<details><summary>🙈 Løsningsforslag</summary>

```html
<body>
  <div
    class="mb-4 rounded-lg bg-green-100 p-4 text-sm text-green-700 dark:bg-green-200 dark:text-green-800"
    role="alert"
  >
    <span class="font-medium">Success alert!</span> Change a few things up and
    try submitting again.
  </div>
  <div
    class="mb-4 rounded-lg bg-green-100 p-4 text-sm text-green-700 dark:bg-green-200 dark:text-green-800"
    role="alert"
  >
    <span class="font-medium">Success alert!</span> Change a few things up and
    try submitting again.
  </div>
</body>
```

</details>

<br/>

🎉 Vi har mellomrom - eller en «intimsone» - mellom alertsene våre!

<br/>

I `mb-4` står `b` for `bottom`, som er navnekonvensjonen for at vi legger margin på bunnen av et element.  
Andre alternativer er:

- `t` for `top` for å legge margin i toppen.
- `l` for `left` for å legge margin til venstre.
- `r` for `right` for å legge margin til høyre.
- `y` for å legge til margin i y-aksen, både oppe og nede.
- `x` for å legge margin til i x-aksen, både til venstre og høyre.

📜 Endre `mb-4` til `m-4` i begge alertene, og legg merke til mellomrommet mellom alertene.

<details><summary>🙈 Løsningsforslag</summary>

```html
<body>
  <div
    class="m-4 rounded-lg bg-green-100 p-4 text-sm text-green-700 dark:bg-green-200 dark:text-green-800"
    role="alert"
  >
    <span class="font-medium">Success alert!</span> Change a few things up and
    try submitting again.
  </div>
  <div
    class="m-4 rounded-lg bg-green-100 p-4 text-sm text-green-700 dark:bg-green-200 dark:text-green-800"
    role="alert"
  >
    <span class="font-medium">Success alert!</span> Change a few things up and
    try submitting again.
  </div>
</body>
```

</details>

<br/>

🎉 Vi har brukt margin-utility til å endre hvor vi legger på margin!

👀 Vi har lagt til en intimsone rundt hele elementene, slik at vi har mellomrom både under, over og på sidene.  
Men mellomrommet mellom elementene har ikke blitt større! Begge elementene har nå en «intimsone» som tilsvarer `4` på [størrelsesskalen til Tailwind](https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale). Akkurat som på et busstopp må man ikke stå to meter fra hverandre for at to personer skal ha en meters intimsone!

📜 Endre størrelsen på marginen for en alert til å være mindre enn `4` på [størrelsesskalen til Tailwind](https://tailwindcss.com/docs/customizing-spacing#default-spacing-scale).

<details><summary>🙈 Løsningsforslag</summary>

```html
<body>
  <div
    class="m-1 rounded-lg bg-green-100 p-4 text-sm text-green-700 dark:bg-green-200 dark:text-green-800"
    role="alert"
  >
    <span class="font-medium">Success alert!</span> Change a few things up and
    try submitting again.
  </div>
  <div
    class="m-4 rounded-lg bg-green-100 p-4 text-sm text-green-700 dark:bg-green-200 dark:text-green-800"
    role="alert"
  >
    <span class="font-medium">Success alert!</span> Change a few things up and
    try submitting again.
  </div>
</body>
```

</details>

👀 Selv om elementene nå har forskjellig margin - eller forskjellig intimsone - er det fortsatt den største intimsonen som gjelder, slik at avstanden mellom alertene fortsatt er like store.

🎉 Vi har brukt størrelsesskalaen til Tailwind!

## Oppgave 10: Padding

---

[Padding](https://tailwindcss.com/docs/padding) er også en del av [CSS Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model) som illustrert [over](#liten-oppfrisker-om-css-box-model).

Veldig enkelt forklart kan vi si at hvis padding er som tykkelsen på klærne dine.

Navnekonvensjonen til padding i Tailwind er akkurat lik som navnekonvensjonen til margin - bare med `p` for `padding` 🥳!

📜 Endre padding for en alert.

<details><summary>🙈 Løsningsforslag</summary>

Endre padding fra f.eks. `p-4` til `p-8`.

```html
<body>
  <div
    class="m-1 rounded-lg bg-green-100 p-8 text-sm text-green-700 dark:bg-green-200 dark:text-green-800"
    role="alert"
  >
    <span class="font-medium">Success alert!</span> Change a few things up and
    try submitting again.
  </div>
  <div
    class="m-4 rounded-lg bg-green-100 p-4 text-sm text-green-700 dark:bg-green-200 dark:text-green-800"
    role="alert"
  >
    <span class="font-medium">Success alert!</span> Change a few things up and
    try submitting again.
  </div>
</body>
```

</details>

🎉 Vi har brukt padding i Tailwind!

## Oppgave 11: Tekststørrelse

---

Tailwind lar oss definere tekst-størrelsen med utilitien `text-{size}` hvor `{size}` er en navnekonvensjon som går igjen i flere utilities.

Navn på størrelser som går igjen:

- `sm` for `small`
- `md` for `medium`
- `lg` for `large`
- `xl` for `xtra large`
- `2xl`, `3xl` osv..

📜 Endre skriftstørrelse for en alert.

<details><summary>🙈 Løsningsforslag</summary>

Endre padding fra f.eks. `text-sm` til `text-lg`.

```html
<body>
  <div
    class="m-1 rounded-lg bg-green-100 p-8 text-lg text-green-700 dark:bg-green-200 dark:text-green-800"
    role="alert"
  >
    <span class="font-medium">Success alert!</span> Change a few things up and
    try submitting again.
  </div>
  <div
    class="m-4 rounded-lg bg-green-100 p-4 text-sm text-green-700 dark:bg-green-200 dark:text-green-800"
    role="alert"
  >
    <span class="font-medium">Success alert!</span> Change a few things up and
    try submitting again.
  </div>
</body>
```

</details>

🎉 Vi kan endre skriftstørrelse i Tailwind!

## Oppgave 12: Rounded - Avrundede hjørner

---

[Border](https://tailwindcss.com/docs/border-radius) er også en del av [CSS Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model) som illustrert [over](#liten-oppfrisker-om-css-box-model).

Vi kan bruke en utility som heter [rounded](https://tailwindcss.com/docs/border-radius), som igjen bruker [CSS-propertien border-radius](https://developer.mozilla.org/en-US/docs/Web/CSS/border-radius), for å runde av hjørnene på et element.  
Navnekonvensjonen for [rounded](https://tailwindcss.com/docs/border-radius) følger samme mønster som [tekststørrelse](#oppgave-11-tekststørrelse) 🥳! I tillegg legger de på varianten `rounded-full` for å få hjørner helt avrundet.

📜 Gjør hjørnene på en alert mer avrundet.

<details><summary>🙈 Løsningsforslag</summary>

Endre rounded fra f.eks. `rounded-lg` til `rounded-3xl`.

```html
<body>
  <div
    class="m-1 rounded-lg bg-green-100 p-8 text-lg text-green-700 dark:bg-green-200 dark:text-green-800"
    role="alert"
  >
    <span class="font-medium">Success alert!</span> Change a few things up and
    try submitting again.
  </div>
  <div
    class="m-4 rounded-3xl bg-green-100 p-4 text-sm text-green-700 dark:bg-green-200 dark:text-green-800"
    role="alert"
  >
    <span class="font-medium">Success alert!</span> Change a few things up and
    try submitting again.
  </div>
</body>
```

</details>

<br/>

🎉 Vi kan runde av hjørner på elementer!

<br/>

Hva hvis vi kun ønsker å runde av noen hjørner? 🤔 [rounded](https://tailwindcss.com/docs/border-radius) følger et mønster som ligner veldig på [margin](#oppgave-9-margin---intimsone) og [padding](#oppgave-10-padding) for å kun runde av hjørner på en side🥳!

Mønster som går igjen:

- `t` for `top`
- `r` for `right`
- `tr` for `top right`
- `b` for `bottom`
- `l` for `left`
- `br`, `bl` osv..

📜 Bare rund av hjørnene på høyre side.

<details><summary>🙈 Løsningsforslag</summary>

Endre rounded fra f.eks. `rounded-3xl` til `rounded-r-3xl`.

```html
<body>
  <div
    class="m-1 rounded-lg bg-green-100 p-8 text-lg text-green-700 dark:bg-green-200 dark:text-green-800"
    role="alert"
  >
    <span class="font-medium">Success alert!</span> Change a few things up and
    try submitting again.
  </div>
  <div
    class="m-4 rounded-r-3xl bg-green-100 p-4 text-sm text-green-700 dark:bg-green-200 dark:text-green-800"
    role="alert"
  >
    <span class="font-medium">Success alert!</span> Change a few things up and
    try submitting again.
  </div>
</body>
```

🎉 Vi har superkrefter!
</details>

## Oppgave X: Border

---

[Border](https://tailwindcss.com/docs/border-radius) er også en del av [CSS Box Model](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/The_box_model) som illustrert [over](#liten-oppfrisker-om-css-box-model).

Navnekonvensjonen for å [endre tykkelsen på borderen](https://tailwindcss.com/docs/border-width) følger samme mønster som for [margin](#oppgave-9-margin---intimsone) og [padding](#oppgave-10-padding) 🥳!

📜 Endre tykkelsen på borderen for en alert.

<details><summary>🙈 Løsningsforslag</summary>

Endre padding fra f.eks. `text-sm` til `text-lg`.

```html
<body>
  <div
    class="m-1 rounded-lg bg-green-100 p-8 text-lg text-green-700 dark:bg-green-200 dark:text-green-800"
    role="alert"
  >
    <span class="font-medium">Success alert!</span> Change a few things up and
    try submitting again.
  </div>
  <div
    class="m-4 rounded-lg bg-green-100 p-4 text-sm text-green-700 dark:bg-green-200 dark:text-green-800"
    role="alert"
  >
    <span class="font-medium">Success alert!</span> Change a few things up and
    try submitting again.
  </div>
</body>
```

</details>

🎉 Vi kan endre skriftstørrelse i Tailwind!

