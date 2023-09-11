// class BankAccount<T> {
//     T account_num;
//     String name;
//     int age;
//     String accountType;
//     int total_amount;

//     BankAccount(T _account_num,
//             String _name,
//             int _age,
//             String _accountType,
//             int _total_amount) {
//         account_num = _account_num;
//         name = _name;
//         age = _age;
//         accountType = _accountType;
//         total_amount = _total_amount;
//     }

// }

// public class test {

//     public static void main(String[] args) throws Exception {
//         // wrong accountnum in bk1
//         BankAccount<Integer> bk1=new BankAccount(12.4, "Vansh", 20, "saving", 1000);
//         // wrong age in bk2
//         BankAccount bk2=new BankAccount(124, "Vansh", 10, "saving", 1000);
//         // wrong totalAmount in bk3
//         BankAccount bk3=new BankAccount(124, "Vansh", 30, "saving", 1500);
//         try {
//             if (!((Object)bk1.account_num).getClass().getSimpleName().toString().equals("Integer")) {
//                 int a=10/0;
//             }
//         } catch (ArithmeticException e) {
//             System.out.println("Invalid account Num");
//         }

//         try {
//             if (bk2.age<18) {
//                 int a=10/0;
//             }
//         } catch (ArithmeticException e) {
//             System.out.println("Age less than 18");
//             // TODO: handle exception
//         }
//         try {
//             // Let total amount of saving account be 1000 and current account be 2000
//             if (bk3.accountType.equals("saving")) {
//                 if (bk3.total_amount>1000) {
//                     int a=10/0;
//                 }
//             }
//             else if (bk3.accountType.equals("current")) {
//                 if (bk3.total_amount>2000) {
//                     int a=10/0;
//                 }
//             }
//         } catch (ArithmeticException e) {
//             System.out.println("Limit Exceeded");
//         }
//     }
// }