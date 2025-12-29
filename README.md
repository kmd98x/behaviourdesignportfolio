# Behaviour Design Portfolio - Martina Doekharan

Een modern portfolio website voor de minor Behaviour Design aan de Hogeschool van Amsterdam.

## Design

Het portfolio heeft een donker thema met oranje accenten:
- **Achtergrond**: Donkere kleuren (#0A0A0A)
- **Accenten**: Oranje (#FF6B35)
- **Typografie**: 
  - Handgeschreven stijl (Dancing Script) voor titels
  - Serif (Playfair Display) voor body tekst
  - Sans-serif (Inter) voor subtitels

## Structuur

De website bevat de volgende pagina's:

1. **Home** - Introductiepagina met naam en foto
2. **Inhoudsopgave** - Overzicht van alle secties met wavy timeline
3. **Over Mij** - Persoonlijke introductie en achtergrond
4. **Meting** - (placeholder voor projectinhoud)
5. **Ontwikkelplan** - (placeholder voor projectinhoud)
6. **Carddeck** - (placeholder voor projectinhoud)
7. **Bootcamp** - (placeholder voor projectinhoud)

## Gebruik

Open `index.html` in je browser om de website te bekijken.

## Navigatie

- Klik op het hamburger menu (rechtsboven) om tussen pagina's te navigeren
- Op de Inhoudsopgave pagina kun je ook klikken op de genummerde punten om naar de bijbehorende sectie te gaan

## Aanpassingen maken

### Foto's toevoegen

Vervang de placeholders:
- Homepage foto: `.home-photo .photo-placeholder`
- Over Mij foto: `.over-mij-photo .photo-placeholder-large`

### Content toevoegen

Je kunt eenvoudig content toevoegen aan de placeholder pagina's (Meting, Ontwikkelplan, Carddeck, Bootcamp) door de HTML aan te passen in `index.html`.

### Styling aanpassen

Kleuren kunnen worden aangepast in `styles.css` via de CSS variabelen:
```css
:root {
    --orange: #FF6B35;
    --dark-bg: #0A0A0A;
    --dark-gray: #2A2A2A;
    --text-gray: #A0A0A0;
    --text-light: #E0E0E0;
}
```

## Browser ondersteuning

De website werkt in alle moderne browsers (Chrome, Firefox, Safari, Edge).

