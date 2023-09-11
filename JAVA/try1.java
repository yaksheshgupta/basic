import java.util.Scanner;

// import java.io.*;
// import java.util.ArrayList;
// interface hello {
// 	void hels();
// 	int intig();
// }
// abstract class aha implements hello{
// 	public void hels(){
// 		System.out.println("hello");
// 	}
// 	public int intig(){
// 		return 0;
// 	}
// 	abstract void hhh();
// }


// public class try1 extends aha{
// 	public static void main(String[] args) {
// 		ArrayList<Integer> arr=new ArrayList<Integer>(10);
// 		ArrayList<Integer> rr=new ArrayList<Integer>(10);
// 		rr.add(100);
// 		rr.add(100);
// 		rr.add(100);
// 		rr.add(100);
// 		rr.remove(0);
// 		arr.addAll(rr);
// 		System.out.println(arr);
// 	}

// 	@Override
// 	void hhh() {
// 		// TODO Auto-generated method stub
		
// 	}
// }

/**
 * try1
 */
public class try1 {

	public static void main(String[] args) {
		try(Scanner input = new Scanner(System.in)){
			try {
				int a=10/0;
			}catch(ArithmeticException s){
				
			} catch (Exception e) {
				System.out.println("hello");
			}
		}
	}
}