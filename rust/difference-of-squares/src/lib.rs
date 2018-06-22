pub fn square_of_sum(n: usize) -> usize {
    (1..n + 1).fold(0, |x, y| x + y).pow(2)
}

pub fn sum_of_squares(n: usize) -> usize {
    (1..n + 1).map(|x| x.pow(2)).fold(0, |x,y| x + y)
}

pub fn difference(n: usize) -> usize {
    square_of_sum(n) - sum_of_squares(n)
}
