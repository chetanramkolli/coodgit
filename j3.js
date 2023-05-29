import java.util.Scanner;

public class GoodBadPoor {

    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);

        System.out.println("Enter a number: ");
        int m = scanner.nextInt();

        if (m % 3 == 0 && m % 5 == 0) {
            System.out.println("Good Number");
        } else if (m % 3 == 0 && m % 5 != 0) {
            System.out.println("Bad Number");
        } else if (m % 3 != 0 && m % 5 == 0) {
            System.out.println("Poor Number");
        } else {
            System.out.println("-1");
        }
    }
}
