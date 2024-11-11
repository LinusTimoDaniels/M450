## Aufgabe 1

- **Unittests**
- **End-to-End-Tests**
- **Integrationstests**
- **Systemtests**
- **Akzeptanztests**
- **Smoketests**

---

## Aufgabe 2

**Ein Software-Fehler** wäre ein Programmabsturz, der durch einen falschen Code verursacht wird, wie ein Rechenfehler in einer App.  
**Ein Software-Mangel** hingegen liegt vor, wenn die Software eine wichtige, versprochene Funktion, wie z. B. eine Export-Funktion, nicht enthält.

Ein Beispiel für **hohen Schaden durch einen Software-Fehler** wäre ein Fehler im Steuerungsprogramm eines selbstfahrenden Autos, der zu einem Unfall führt.

---

## Aufgabe 3

### Angepasster Code

```java
public class PreisBerechnung {
    public static double calculatePrice(double baseprice, double specialprice, double extraprice, int extras, double discount) {
        double addon_discount;
        double result;

        // Korrektur: zuerst prüfen, ob `extras` >= 5, da 5 einen höheren Rabatt als 3 gewährt
        if (extras >= 5)
            addon_discount = 15;
        else if (extras >= 3)
            addon_discount = 10;
        else
            addon_discount = 0;

        // Grundpreis wird mit Händlerrabatt berechnet
        double discountedBasePrice = baseprice * (1 - discount / 100.0);

        // Extraprice wird nur mit Zubehörrabatt berechnet
        double discountedExtraPrice = extraprice * (1 - addon_discount / 100.0);

        // Gesamtpreis berechnen
        result = discountedBasePrice + specialprice + discountedExtraPrice;

        return result;
    }
}
```
### Tests

```java
public class PreisBerechnungTest {

    public static boolean test_calculate_price() {
        boolean test_ok = true;

        // Testfall 1: Grundpreis ohne Rabatte
        double price = PreisBerechnung.calculatePrice(1000, 200, 300, 0, 0);
        if (price != 1500) {
            System.out.println("Test 1 fehlgeschlagen: Erwartet 1500, erhalten: " + price);
            test_ok = false;
        }

        // Testfall 2: Grundpreis mit Händlerrabatt von 10%
        price = PreisBerechnung.calculatePrice(1000, 200, 300, 0, 10);
        if (price != 1400) {
            System.out.println("Test 2 fehlgeschlagen: Erwartet 1400, erhalten: " + price);
            test_ok = false;
        }

        // Testfall 3: Grundpreis mit 3 Zusatzausstattungen (10% Rabatt auf Extraprice)
        price = PreisBerechnung.calculatePrice(1000, 200, 300, 3, 0);
        if (price != 1470) {
            System.out.println("Test 3 fehlgeschlagen: Erwartet 1470, erhalten: " + price);
            test_ok = false;
        }

        // Testfall 4: Grundpreis mit 5 Zusatzausstattungen (15% Rabatt auf Extraprice)
        price = PreisBerechnung.calculatePrice(1000, 200, 300, 5, 0);
        if (price != 1455) {
            System.out.println("Test 4 fehlgeschlagen: Erwartet 1455, erhalten: " + price);
            test_ok = false;
        }

        // Testfall 5: Grundpreis mit 4 Zusatzausstattungen und 12% Händlerrabatt
        price = PreisBerechnung.calculatePrice(1000, 200, 300, 4, 12);
        if (price != 1436) {
            System.out.println("Test 5 fehlgeschlagen: Erwartet 1436, erhalten: " + price);
            test_ok = false;
        }

        return test_ok;
    }

    public static void main(String[] args) {
        if (test_calculate_price()) {
            System.out.println("Alle Tests erfolgreich.");
        } else {
            System.out.println("Mindestens ein Test ist fehlgeschlagen.");
        }
    }
}
```

### Erklärung der Testfälle
**Testfall 1** prüft den Grundpreis ohne Rabatte.
**Testfall 2** fügt nur einen Händlerrabatt von 10 % auf den Grundpreis hinzu.
**Testfall 3** wendet den 10%-Zubehör-Rabatt für 3 Zusatzausstattungen auf den extraprice an.
**Testfall 4** wendet den 15%-Zubehör-Rabatt für 5 Zusatzausstattungen auf den extraprice an.
**Testfall 5** testet, dass der Händlerrabatt von 12 % und der 10 % Zubehörrabatt korrekt auf die jeweiligen Preise angewandt werden.
