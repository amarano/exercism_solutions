pub fn build_proverb(list: Vec<&str>) -> String {
    let mut v = Vec::new();
    let mut index = 0;
    let length = list.len();
    if length > 0 {
        let head = if length > 1 {list[0]} else {"nail"};
        while index < length - 1 {
            v.push(format!("For want of a {} the {} was lost.", list[index], list[index + 1]));
            index += 1;
        }
            v.push(format!("And all for the want of a {}.", head));
            return v.join("\n");
    }
    
    return "".to_string();
}