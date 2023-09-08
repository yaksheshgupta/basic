// fn main() {
//     // let a1=|a:i32,b:i32|{println!("{}",a+b)};    
//     // a1(10,20);
//     let var=vec![1,2,3];
//     let v_iter=var.iter().map(|num|num*2).map(|num|println!("{:?}",num)).collect::<Vec<_>>();
//     println!("{:?}",v_iter);
//     let filter:Vec<_>=var.iter().filter(|num|num==&&1).collect();
//     println!("{:?}",filter);
// }
fn main() {
    let vec=vec![2,3,4,5,6,7,8,9,4,5];
    let iter_Vec:Vec<_>=vec.iter().filter(|num|**num%2==0).collect();
    println!("{:?}",iter_Vec);
}
// fn main() {
//     let one=String::from("hello");
//     let b="buddy";
//     let _bro=longest(one.as_str(), b);
// }

// fn longest<'a>(a:&'a str,b:&'a str)->&'a str {
//     if a.len()>b.len() {
//         b
//     }else {
//         a
//     }
// }

