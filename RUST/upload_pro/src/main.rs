// Just to irritate created this game!!
// will never able to end this game
use std::io;
use rand::Rng;
fn main() {
    loop {
        println!("Enter any number--");
    let mut buf= String::new();
    io::stdin().read_line(&mut buf);
    let buf = buf.trim().parse().unwrap();
    match buf {
        random_num()=>{println!("got the value");break;}
        _=>{
            if buf>random_num(){
                println!("larger num");
            }else if buf<random_num(){
                println!("smaller num");
            }
        }
    }
    }
}

fn random_num() {
    rng.gen_range(0..10);
}