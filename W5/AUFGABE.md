# Aufgabe: Erste Webapplikation generieren

Führen Sie die Schritte aus den Folien durch, um Ihre erste Webapplikation zu generieren und diskutieren Sie:

## Welche Strukturen des MVC-Designs können Sie in den generierten Dateien erkennen?
In den Dateien sieht man einen routes und einen views Ordner, die die Struktur des MVC-Designs widerspiegeln. Der routes-Ordner enthält die Routen, die die Anfragen der Benutzer verarbeiten, während der views-Ordner die Templates enthält, die für die Darstellung der Daten verantwortlich sind.
## Unter welchem Port sollte Ihre Webseite erreichbar sein und warum?
Unter Port 3000, da dies der Standardport für Node.js-Anwendungen ist.

# Überblick & Struktur verstehen

Beantworte folgende Fragen (schriftlich oder in Kleingruppen):

## Welche Aufgaben übernehmen die Dateien in bin/, routes/, views/, public/?
- **bin/**: Enthält ausführbare Dateien, die den Server starten, z. B. `www`.
- **routes/**: Enthält die Routen der Anwendung, die definieren, wie Anfragen verarbeitet werden.
- **views/**: Enthält die View-Templates, die die Benutzeroberfläche der Anwendung darstellen.
- **public/**: Enthält statische Dateien wie CSS, JavaScript und Bilder, die direkt vom Server bereitgestellt werden.
## Was passiert in app.js?
In `app.js` wird die Express-Anwendung konfiguriert, Routen definiert und der Server gestartet. Es ist der zentrale Einstiegspunkt für die Anwendung.
## Wie ist eine Route definiert (z. B. in routes/index.js)?
Eine Route wird in der Regel mit der `Router`-Klasse von Express definiert. Hier ist ein einfaches Beispiel:

```javascript
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index', { title: 'Home' });
});

```

# Aufgabe: Ändern des Titels

## Wo wird der Titel Ihrer Webapplikation gesetzt? Ändern Sie den Titel Ihrer Webapplikation.
Der Titel wird in der Route `index.js` als Parameter festgelegt:
```javascript
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
```

## Wie könnten Sie weitere Daten an die View übergeben? Senden Sie neben dem Titel auch einen Namen und lassen diesen anzeigen.
```javascript
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mein Titel', name: 'Max Mustermann' });
});
```

# Statische Dateien bereitstellen

Lege im Projektordner einen Unterordner public einen neuen Unterordner an.
Lege dort eine HTML-Datei info.html ab (z. B. mit einer Überschrift "Willkommen bei Express").
Binde express.static() ein, damit der Server die Datei unter /info.html bereitstellt.

# Aufgabe: EJS-Seite

Erzeugen Sie im View-Ordner eine zweite Datei und verlinken die beiden Views nun untereinander.

## Wie sehen Ihre Routen aus? Welche Parameter müssen Sie in der jeweiligen Route übergeben?
/ -> index.js -> index.ejs
/zwei -> zwei.js -> zwei.ejs

Parameter sind Titel und Name, die in der jeweiligen Route an die View übergeben werden.
