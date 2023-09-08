fn main() {
    let vec= vec![1,2,3,4,5,6,7];
    let m=vec.iter().enumerate();
    print("yaksh", "yua");
    const h:&'static i32=&10;
}

fn search<T:PartialEq>(a:T,b:Vec<T>)->usize {
    for (i,j) in b.iter().enumerate() {
        if &a==j {
           return  i;
        }
    }
    0
}
fn print<'a,'b>(a:&'a str,b:&'b str)->&'a str {
    println!("{} {}",a,b);
    a
}

struct Bro<'a>{
    a:&'a str,
    b:&'a str
}

