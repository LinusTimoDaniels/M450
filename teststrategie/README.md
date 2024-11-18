# Aufgabe 1

### Abstrakte Testfälle

| Testfallnummer | Kaufpreis Bedingung                   | Erwarteter Rabatt      |
|----------------|---------------------------------------|-------------------------|
| 1              | Kaufpreis < 15'000 CHF                | Rabatt = 0 %           |
| 2              | 15'000 CHF ≤ Kaufpreis ≤ 20'000 CHF   | Rabatt = 5 %           |
| 3              | 20'000 CHF < Kaufpreis < 25'000 CHF   | Rabatt = 7 %           |
| 4              | Kaufpreis ≥ 25'000 CHF                | Rabatt = 8.5 %         |

---

### Konkrete Testfälle

| Testfallnummer | Kaufpreis (CHF) | Erwarteter Rabatt (%) |
|----------------|------------------|------------------------|
| 1              | 14'000          | 0 %                   |
| 2              | 15'000          | 5 %                   |
| 3              | 18'500          | 5 %                   |
| 4              | 20'000          | 5 %                   |
| 5              | 22'000          | 7 %                   |
| 6              | 24'500          | 7 %                   |
| 7              | 25'000          | 8.5 %                 |
| 8              | 30'000          | 8.5 %                 |

---

### Erläuterung

- **Abstrakte Testfälle**: Diese Tabelle beschreibt die Testfälle in allgemeiner Form mithilfe von logischen Operatoren. Diese Abstraktion ist nützlich, um die Anforderungen in Regeln zusammenzufassen.
  
- **Konkrete Testfälle**: Diese Tabelle enthält spezifische Kaufpreise für die definierten Rabattstufen und prüft die korrekte Berechnung. Die Testfälle wurden so gewählt, dass sie die Grenzwerte und typische Werte für jede Rabattstufe abdecken.

# Aufgabe 2

### Funktionale Black-Box Tests für eine Autovermietungs-Webseite

| ID  | Beschreibung                                              | Erwartetes Resultat                                                                                 | Effektives Resultat             | Status       | Mögliche Ursache                              |
|-----|-----------------------------------------------------------|-----------------------------------------------------------------------------------------------------|---------------------------------|--------------|-----------------------------------------------|
| 1   | Benutzerregistrierung funktioniert korrekt                | Benutzer kann erfolgreich ein Konto erstellen und erhält eine Bestätigungsmeldung                   | Registrierung erfolgreich        | Erfolgreich  | -                                             |
| 2   | Fahrzeugverfügbarkeit prüfen                              | Nach Eingabe der Daten (Ort, Datum) zeigt die Seite verfügbare Fahrzeuge an                         | Keine verfügbaren Fahrzeuge      | Fehler       | Datenbank-Verbindungsproblem                 |
| 3   | Reservierung abschließen                                  | Benutzer kann erfolgreich eine Reservierung für ein ausgewähltes Fahrzeug durchführen               | Reservierung erfolgreich         | Erfolgreich  | -                                             |
| 4   | Stornierungsfunktion für Reservierung verfügbar           | Benutzer kann eine bestehende Reservierung erfolgreich stornieren und erhält eine Bestätigungsmeldung | Fehler bei Stornierung          | Fehler       | Berechtigungen oder Serverfehler              |
| 5   | Bezahloptionen anzeigen und Zahlvorgang durchführen       | Benutzer kann aus verschiedenen Zahlungsmethoden wählen und den Zahlungsprozess abschließen         | Fehlermeldung im Zahlungsvorgang | Fehler       | Zahlungsschnittstelle oder Validierungsproblem |
