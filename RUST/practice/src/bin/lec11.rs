fn main() {
    
}
fn mul(a:i32,b:i32)->i32 {
    a*b
}
#[cfg(test)]
mod test{
    use crate::*;
    #[test]
    fn test_mul() {
        assert_eq!(mul(10, 10),100,"not equal");
    }
    #[test]
    fn test_mul2() {
        assert_eq!(mul(5,5),25,"not equal");
    }
}