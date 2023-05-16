# Express API Testproject

## Installation

```powershell
git clone https://github.com/EvilWeasel/express_api
Change-Location express_api
npm i
npm i -D # Installiert Nodemon für Development
npm run dev # Startet Webserver in Development-Mode
```



## Aufgabe

Schreibt einen eigenen Router und ein eigenes Datenmodel (für MongoDB) für VideoSpieleBewertungen.
**Kontext:** Stellt euch vor wir hätten eine Webseite (also mit HTML), wo wir uns als Benutzer anmelden können und unsere
Videospiele Bewerten können (denkt an MetaCritics). 
__Vorab:__ Wählt ruhig eure eigenen Variablennamen. Ihr dürft gerne, wenn ihr es für Sinnvoll erachtet, von meinen Namen abweichen...

`console.log("Hello World!");`

Eine *Videospielbewertung* (Datenmodel soll `VideoGameReview` heißen!) besteht mindestens aus den folgenden Feldern: 
    Name/Bezeichnung
    Kurzbeschreibung
    Bewertung (1-10 Punkte)
    Bild/Image (ein Link zu einem Bild)
    Artikel (Eine Review in Form eines Markdown-Textes; mehr dazu später; sollte erstmal ein einfacher String sein)

 

Nachdem ihr das Datenmodell erstellt habt, sollt ihr nun einen Router bauen, der alle CRUD-Operationen unterstützt (Create, Read, Update und Delete).

 

Bonus: Implementiert eine Middleware, welche für jeden ankommenden Request jeweils die Header-Informationen in der Console ausgibt (req.headers).
 

Zeit zur Bearbeitung

Bis 15:50 Uhr
 
Nachmittagspause 14:30 - 15:00 Uhr nicht vergessen 


### Lösung

```javascript
console.log("Hello World!");
```