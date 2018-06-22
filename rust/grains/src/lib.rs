pub fn square(s: u32) -> u64 {
    if s == 1 {
        return 1
    }
    return square(s - 1) * 2;
}

pub fn total() -> u64 {
    square(64)
}