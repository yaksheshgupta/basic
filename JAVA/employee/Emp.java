package employee;
public class Emp{
    String name;
    int empid;
    String category;
    double basicPay;
    double HRA;
    double DA;
    double PF=3600;
    double grossPay;

    public void set_name(String _name){
        name=_name;
        System.out.println("name-"+name);
    }
    public void set_empid(int _empid){
        empid=_empid;
        System.out.println("empid-"+empid);
    }
    public void set_category(String _category){
        category=_category;
        System.out.println("category-"+category);
    }
    public void set_grosspay(int gpay){
        grossPay=gpay;
        System.out.println("grossPay-"+grossPay);
    }
    public void incometaxation(){
        if(grossPay*12>500000){
            System.out.println("Incometax deducted by"+(500000-grossPay)/12+" per month");
            grossPay-= (500000-grossPay)/12;
        }
        HRA=grossPay*0.06;
        DA=grossPay*0.1;
        basicPay=grossPay*0.25;
        System.out.println("HRA-"+HRA+" DA-"+DA+" basicPay-"+basicPay+" PF-"+PF);
    }
    public static void main(String[] args) {
        
    }

}

