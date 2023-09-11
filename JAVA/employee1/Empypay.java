package employee1; 
import employee.Emp;
public class Empypay
{
    public static void main(String[] args) {
        Emp[] emp = new Emp[3];
        emp[0]=new Emp();
        emp[0].set_name("Priyanshi");
        emp[0].set_empid(1);
        emp[0].set_category("teacher");
        emp[0].set_grosspay(20000);
        
        emp[1]=new Emp();
        emp[1].set_name("tarun");
        emp[1].set_empid(2);
        emp[1].set_category("HoD");
        emp[1].set_grosspay(50000);
        
        emp[2]=new Emp();
        emp[2].set_name("Nihal");
        emp[2].set_empid(3);
        emp[2].set_category("peon");
        emp[2].set_grosspay(2000);
    }
}