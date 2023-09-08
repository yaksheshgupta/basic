use std::fmt::Debug;
fn main() {
    name("uabjkdk");
    let ss=Hello::<i32>(19);
    let w=Bro::<i32,char>{
        Vall:100,
        pal:'a'
    };
    println!("{}",ss.0 );
    println!("{:?}",w);
}
fn name<T:Debug>(val:T) {
    println!("{:?}",val);
}
struct Hello<T>(T);
#[derive(Debug)]
struct Bro<T,A>{
    Vall:T,
    pal:A
}
// fn main() {
//     let ram=Laptop::Ram(10);
//     let rom=Laptop::Rom(1);
//     let brand=Laptop::Brand("apple".to_string());
//     let price=Laptop::Price(200.0);
//     println!("{:?}",ram);
//     let n=1;
//     match n {
//         0=>{println!("yess")}
//         rf=>{println!("{}",rf)}
//     }
// }
// enum  Anything {
//     Table,
//     Fan,
//     Laptop,
//     Screen
// }
// struct   Anything2 {
//     Field:i32,
//     fiels:String
// }
// #[derive(Debug)]
// enum Laptop {
//     Ram(i32),
//     Rom(i32),
//     Brand(String),
//     Price(f32)
// }