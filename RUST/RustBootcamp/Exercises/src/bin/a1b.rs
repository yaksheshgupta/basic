// write a function which returns a addition of two numbers 
// write a function which returns a Multiplication of two numbers 
// write a function which returns a division of two numbers 


fn mul(a:i32,b:i32)->i32{
    a*b
}
fn add(a:i32,b:i32)->i32{
    a+b
}
fn div(a:f32,b:f32)->f32{
    a/b
}

fn main() {
    println!("{}",mul(2,6));
    println!("{}",div(2 as f32,6 as f32));
    println!("{}",add(2,6));
}