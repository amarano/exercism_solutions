use std::vec;

struct Primes {
    sieve :  Vec<bool>,
    current : usize
}


impl Primes {
    fn new(max : usize) -> Primes {
        Primes {sieve : vec![true; max], current : 2}
    }
}

impl Iterator for Primes {
    type Item = usize;
    
    fn next(&mut self) -> Option<usize> {
        let n = self.current;
        let mut i = self.current;
        while i < self.sieve.len() {
            self.sieve[i] = false;
            i += n
        }

        let mut j = self.current;
        while self.sieve[j] != true {
            j += 1;
        }
        
        self.current = j;

        Some(n)
    }
}

pub fn nth(x : i32) -> Option<usize> {
    
    if x < 1 {
        return None;
    }
    
    let mut p = Primes::new(100000000);
    let mut i = 0;
    let mut r = 0;
    while i < x {
        r = p.next().unwrap_or_default();
        i += 1;
    }

    Some(r)
}