import java.util.Scanner;

public class AssignmentISBM {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.print("Enter the first 12 digits of the ISBN-13: ");
        String input = scanner.next();

        while (input.length() != 12 || !input.matches("\\d+")) {
            System.out.print("Invalid input. Please enter exactly 12 digits: ");
            input = scanner.next();
        }

        int sum = 0;

        for (int i = 0; i < 12; i++) {
            int digit = Character.getNumericValue(input.charAt(i));
            int weight = (i % 2 == 0) ? 1 : 3;
            sum += digit * weight;
        }

        int remainder = sum % 10;
        int checksum = (remainder == 0) ? 0 : 10 - remainder;

        String fullISBN13 = input + checksum;
        System.out.println("The full ISBN-13 is: " + fullISBN13);

        scanner.close();
    }
}
