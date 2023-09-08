use std::io;

fn main() {
    println!("FrontEnd");
    let _frontend=get_input();
    println!("teamSize");
    let frteam_size=get_input();
    let fr_team_size:i32=frteam_size.trim().parse().unwrap();
    let frntend=Tech{
        tech:_frontend,
        team_size:fr_team_size
    };
    let front_end=Project::FrontEnd(frntend);


    println!("BackEnd");
    let _backend=get_input();
    println!("teamSize");
    let bkteam_size=get_input();
    let bk_team_size:i32=bkteam_size.trim().parse().unwrap();
    let bknend=Tech{
        tech:_backend,
        team_size:bk_team_size
    };
    let backend=Project::BackEnd(bknend);

    println!("Deadline");
    let deadline=get_input();
    let deadline:i32=deadline.trim().parse().unwrap();
    let dead_line=Project::Deadline(deadline);



    match front_end {
        Project::FrontEnd(data)=>{
            println!("frontend tech-{} frontend size-{}",data.tech,data.team_size);
        }
        _=>{}
    }
    match backend {
        Project::BackEnd(data)=>{
            println!("backend tech-{} backend size-{}",data.tech,data.team_size);
        }
        _=>{}
    }
    match dead_line {
        Project::Deadline(data)=>{
            println!("deadline{}",data);
        }
        _=>{}
    }
}
fn get_input()->String {
    let mut buf=String::new();
    io::stdin().read_line(&mut buf).expect("msg");
    buf
}
struct Tech<T,A>{
    tech:T,
    team_size:A
}
enum Project<T> {
    FrontEnd(T),
    BackEnd(T),
    Deadline(T)
}
impl<T> Project<T> {
    fn get_frontend(tech:T)-> Self {
        Self::FrontEnd(tech)
    }
    
    fn get_backend(tech:T)-> Self {
        Self::BackEnd(tech)
    }
    fn get_deadline(a:T)-> Self {
        Self::Deadline(a)
    }


}