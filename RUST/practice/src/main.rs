fn main() {
    get_val(&mut "yaksh".to_owned(), "yewbh");
}
fn get_val<'a>(a: &'a mut String, b: &'a str) {
    a.push_str(b);

    print(a);
}
fn print(a: &String) {
    println!("{}", a);
}
