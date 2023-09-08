fn main() {
    let hh=Hello{
        amt:10
    };
    let qq=Brp::Buddy(hh);
    match qq
    {
        amm=>{
            println!("{:?}",amm);
            match amm {
                aa=>{println!("{:?}",aa)}
            }
        }
    }
}
#[derive(Debug)]

struct Hello{
    amt:i32
}
#[derive(Debug)]
enum Brp {
    Buddy(Hello)
}