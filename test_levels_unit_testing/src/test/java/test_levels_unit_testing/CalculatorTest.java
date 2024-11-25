package test_levels_unit_testing.src.test.java.test_levels_unit_testing;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import test_levels_unit_testing.src.main.java.test_levels_unit_testing.Calculator;

import static org.junit.jupiter.api.Assertions.assertThrows;

class CalculatorTest {

    private final Calculator calculator = new Calculator();


    @Test
    void testAdd() {
        Assertions.assertEquals(5.0, calculator.add(2.0, 3.0), 0.001);
        Assertions.assertEquals(0.0, calculator.add(-1.0, 1.0), 0.001);
    }

    @Test
    public void testSubtract() {
        Assertions.assertEquals(1.0, calculator.subtract(3.0, 2.0), 0.001);
        Assertions.assertEquals(-4.0, calculator.subtract(-2.0, 2.0), 0.001);
    }

    @Test
    public void testMultiply() {
        Assertions.assertEquals(6.0, calculator.multiply(2.0, 3.0), 0.001);
        Assertions.assertEquals(0.0, calculator.multiply(0.0, 5.0), 0.001);
    }

    @Test
    public void testDivide() {
        Assertions.assertEquals(2.0, calculator.divide(6.0, 3.0), 0.001);
        assertThrows(IllegalArgumentException.class, () -> calculator.divide(1.0, 0.0));
    }
}
