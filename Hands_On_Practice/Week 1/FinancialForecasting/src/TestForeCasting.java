public class TestForeCasting {
    public static void main(String[] args) {
        double presentValue = 10000.00;
        double annualGrowthRate = 0.1;
        int years = 5;

        System.out.printf("Present Value : %.2f",presentValue);
        System.out.println();
        double futureValue = ForeCasting.forecast(presentValue,annualGrowthRate,years);
        System.out.printf("Future value after %d years: $%.2f",years,futureValue);
    }
}
