fn main() {
    let type1=Y::new(10);
    let type2=Y::new(20);
    type1.aw();
    type2.aw();
}

trait Yes {
    fn new(a:i32)->Self;
    fn aw(&self);
}

impl Yes for Y {
    fn new(a:i32)->Self {
        Self {a}
    }

    fn aw(&self) {
        println!("{}",self.a);
    }
}
impl Yes for T {
    fn new(a:i32)->Self {
        Self {a}
    }

    fn aw(&self) {
        println!("{}",self.a);
    }
}

struct Y{
    a:i32
}
struct T{
    a:i32
}
struct P<T>{
    a:T
}