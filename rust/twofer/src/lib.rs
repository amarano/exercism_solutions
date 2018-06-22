pub fn twofer(name: &str)-> String {
    let n = if name != "" {name} else {"you"};
    format!("One for {}, one for me.", n)
}