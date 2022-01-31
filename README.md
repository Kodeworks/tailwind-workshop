# Tailwind workshop

## Hjelpsomme tegn som går igjen

- <details><summary>Klikk her for å se noe som er skjult</summary>
  <img src="https://media1.giphy.com/media/yYSSBtDgbbRzq/giphy.gif?cid=ecf05e4797zegn3f6aaier6wo0mdzchlml7yx6bav4awlvav&rid=giphy.gif&ct=g"></img></details>
- 💡 Tips
- 📜 Oppgave
- 🙈 Løsningsforslag

<br/>

## Noen vennlige ord

- Løsningsforslag er forslag og ikke fasit.
- Spør oss om hjelp! Spør sidemannen. Se på løsningsforslag. Google. Ikke sitt i frustasjonen for lenge!
- Følg nysgjerrigheten, og still spørsmål. Det er du som skal lære og ha det gøy!

<br/>

## Terminal på 1-2-3

<details><summary>💡 Visual Studio Code har en innebygd terminal</summary>

- Høyreklikk på en fil i filutforskeren til VSCode og velg «Open in Integrated Terminal».  
  ![Åpne terminal integrert i VSCode i filutforskeren](bilder-til-readme/vs-code-terminal-1.png)
- Eller velg «Terminal» i menyen helt i toppen av skjermen -> «New Terminal»  
![Åpne terminal integrert i VSCode i menyen](bilder-til-readme/vs-code-terminal-2.png)
</details>
<details><summary>💡 Hvordan navigere i terminalen?</summary>

list opp mapper og filer:

```console
$ ls
```

Gå inn i mappe:

```console
$ cd mappenavn
```

Gå ut av mappe:

```console
$ cd ..
```

</details>
<br/>

## Steg 0: [Klon repoet](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository)

---

Lag gjerne en kopi av repoet ved å [forke det](https://docs.github.com/en/get-started/quickstart/fork-a-repo#forking-a-repository). Da kan du pushe endringer til din egen kopi.

![Fork-knapp på github](bilder-til-readme/fork.png)

📜 Klon repoet

<details><summary>💡 Hvordan klone et repo?</summary>

Kopier lenken til repoet (Lenken fra ditt eget repo om du har forket det)

![Knapp for kopiering av url til repo](bilder-til-readme/copy-repo-url.png)

Åpne en terminal, og naviger til hvor du ønsker å kopiere koden.

  </details>

Klon repoet med kommandoen:

```console
$ git clone https://github.com/lenke/til/repo
```

  </details>

<br/>

## Steg 1: Er alt installert?

---

## [Visual studio Code](https://code.visualstudio.com/download)

Vi har lagt opp til å bruke VSCode som kan [lastes ned herfra](https://code.visualstudio.com/download) om du ikke allerede har det installert.

<details><summary>Hvorfor VSCode?</summary>

- Tailwind vedlikeholder en [offisiell VSCode extension](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss) som gir autocomplete og annet snacks.
- Det er enklere for oss å hjelpe til når vi bruker samme editor.
</details>
<br/>

## VSCode extensions

📜 Åpne mappen `tailwind-workshop` i VSCode. Det burde dukke opp en popup med anbefalte extensions, velg «install all».

<details><summary>Hvis ikke kan du legge til anbefalte extensions individuelt</summary>

> Trykk på lenken og trykk «install».

- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [Auto-Open Markdown Preview](https://marketplace.visualstudio.com/items?itemName=hnw.vscode-auto-open-markdown-preview)
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

</details>
<br/>

## [Node](https://nodejs.org/en/download/)

<br/>
📜 Åpne en terminal, og kjør følgende kommandoer (uten $):

```console
$ node -v
$ npm -v
$ npx -v
```

Dersom du får et versjonsnummer for alle kommandoene er alt klart ✅  
Hvis ikke, ta kontakt, så hjelper vi deg 🏃
