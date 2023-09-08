// Write function which accepts borrowed string and print it, write your first and last name using two different functions

fn f_name(a:String){
    println!("{}",a);
}
fn l_name(a:String){
    println!("{}",a);
}
fn main() {
    f_name(String::from( "yakshesh"));
    l_name(String::from("gupta"));
}