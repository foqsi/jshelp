import java.util.Scanner;

public class StockSelector {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        System.out.println("Welcome to the Stock Selector App!\n");
        System.out.print("Enter the amount of money available to invest: $");
        double investmentAmount = scanner.nextDouble();

        System.out.print("Enter the stock ticker: ");
        String ticker = scanner.next();
        while (ticker.length() > 5) {
            System.out.print("Error: Ticker must be 5 characters or less. Please enter a valid stock ticker: ");
            ticker = scanner.next();
        }

        System.out.print("Enter the stock price: $");
        double stockPrice = scanner.nextDouble();
        while (stockPrice < 5.0) {
            System.out.print("Error: Stock price must be at least $5.00. Please enter a valid stock price: ");
            stockPrice = scanner.nextDouble();
        }

        System.out.print("Enter the P/E ratio: ");
        double peRatio = scanner.nextDouble();

        if (peRatio > 75) {
            System.out.println("Warning: This stock may be overvalued. Proceed with caution!");
        }

        int numberOfShares = (int) (investmentAmount / stockPrice);
        System.out.println("Below are your results:\n");
        System.out.println("Ticker: " + ticker);
        System.out.println("Stock Price: $" + stockPrice);
        System.out.println("P/E Ratio: " + peRatio);
        System.out.println("Number of shares you can purchase: " + numberOfShares);

        scanner.close();
    }
}
