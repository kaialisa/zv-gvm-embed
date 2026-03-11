# Wasserzeitung-Einbindung – Zweckverband Grevesmühlen

Dieses Repository stellt drei Methoden bereit, um einen redaktionell ausgewählten Artikel der Wasserzeitung auf Ihrer Website einzubinden. Der angezeigte Artikel wird bei jeder neuen Ausgabe von uns aktualisiert.

---

## Artikel aktualisieren

Der angezeigte Artikel ist in `article.json` hinterlegt und wird von uns gepflegt.

---

## Option 1: JavaScript-Widget (ohne Styling)

Für Ihren Webentwickler: gibt die Karte ohne eigenes CSS aus, sodass das vorhandene Design Ihrer Website vollständig übernommen werden kann.

```html
<div id="gvm-widget"></div>
<script src="https://kaialisa.github.io/gvm-embed/gvm-widget-unstyled.js"></script>
```

**In Elementor:** HTML-Widget auf die Seite ziehen und den Code einfügen.

Verfügbare CSS-Klassen:

| Klasse | Element |
|---|---|
| `.gvm-card` | Container-Link |
| `.gvm-img-wrap` | Bild-Container |
| `.gvm-caption` | Bildunterschrift |
| `.gvm-info` | Text-Container |
| `.gvm-title` | Überschrift |
| `.gvm-excerpt` | Beschreibungstext |
| `.gvm-read-more` | „weiterlesen"-Link |
| `.gvm-error` | Fehlermeldung |

---

## Option 2: JavaScript-Widget (mit Styling)

Bindet die Karte direkt in Ihre Seite ein. Styling passend zu Ihrem Corporate Design ist bereits enthalten. Empfohlen, wenn das Widget neben bestehenden Artikel-Karten erscheinen soll.

```html
<div id="gvm-widget"></div>
<script src="https://kaialisa.github.io/gvm-embed/gvm-widget.js"></script>
```

**In Elementor:** HTML-Widget auf die Seite ziehen und den Code einfügen.

---

## Option 3: iFrame

Vollständig eigenständiger Block. Empfohlen für eine freistehende Einbindung, z. B. in einem Inhaltsbereich oder einer Seitenleiste.

```html
<iframe
  src="https://kaialisa.github.io/gvm-embed/iframe-widget.html"
  style="border:none;width:100%;height:775px;"
  title="Wasserzeitung Artikel">
</iframe>
```

**In Elementor:** HTML-Widget auf die Seite ziehen und den Code einfügen.