import org.junit.Test;
import static org.junit.Assert.assertEquals;
import com.stockly.Calc;
public class CalculadoraTest {
    @Test
    public void testsoma() {
        Calc calc = new Calc();
        assertEquals(6, calc.somar(2, 3));
    }
}
