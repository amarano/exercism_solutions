pub fn raindrops(i : i32) -> String {
    let mut s = "".to_string();
    if i % 3 == 0{
        s.push_str(&"Pling".to_string());
    }

    if i % 5 == 0 {
        s.push_str(&"Plang".to_string());
    }

    if i % 7 == 0 {
        s.push_str(&"Plong".to_string());
    }

    if s == ""{
        s.push_str(&i.to_string());
    }

    s
}