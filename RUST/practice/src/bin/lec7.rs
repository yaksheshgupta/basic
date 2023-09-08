use hello::He;

fn main() {
    hello::yess();
    let aa=He{
        val:12
    };
}
mod hello{
    pub fn yess() {
        super::ww();
        self::ww();
        println!("yess");
    }
    fn ww() {
        println!("internel ww");
    }
    pub struct He{
        pub val:i32
    }
}
fn ww() {
    println!("external ww");
}