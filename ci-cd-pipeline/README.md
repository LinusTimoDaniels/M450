# CI-CD-Pipeline

## Aufgabe 1

Mit `MockMvc` haben wir [Tests](./tests/RecipeControllerTest.java) für alle Controller Methoden erstellt. 

Für die beiden Domänen Klassen haben wir auch Tests ([RecipeEntityMapperTest](./tests/RecipeEntityMapperTest.java) & [IngredientEntityMapperTest](./tests/IngredientEntityMapperTest.java)) erstellt.

### Vorteil von SoftAssertions

Alle Assertions werden ausgeführt, auch wenn eine oder mehrere davon fehlschlagen. Dies ermöglicht es, mehrere Fehler in einem einzigen Testlauf zu identifizieren, anstatt den Test bei der ersten fehlgeschlagenen Assertion zu stoppen. Dadurch erhält man einen umfassenderen Überblick über alle Probleme im getesteten Code.

## Aufgabe 2

Für den Test-Report haben wir Sufire benutzt. Damit kann der Befehl `mvn test`ausgeführt werden und der Report wird dann unter `target/reports/surfire.html` erstellt.

## Aufgabe 3

Für diesen Teil haben wir GitHub Actions verwendet. Diese werden bei einem Push oder Pull Request auf den Master Branch ausgeführt. Die Konfiguration dafür befindet sich in unter `.github/workflows/maven.yml`.