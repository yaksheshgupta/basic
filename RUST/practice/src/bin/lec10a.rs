fn main() {
 let add=check(5,3);
 println!("{:?}",add);
 match add {
     Ok(data)=>{println!("{}",data)}
     Err(data)=>{println!("err")}
 }
}
// enum Result<T,A> {
//     Ok(T),
//     Err(A)
// }
fn check(num:i32,a:i32)->Result<i32,String> {
    if num>a {
        Ok(num+a)
    }else {
        Err("errorr".to_owned())
    }
}
fn foo (val:&str)->Result<(),String> {
    match val {
        "yes"=>Ok(()),
        "no"=>Err(String::from("hello")),
        _=>{Ok(())}
    }
}
fn foo2()->Result<(),String> {
    let foo=foo("yes")?;
    Ok(foo)
}