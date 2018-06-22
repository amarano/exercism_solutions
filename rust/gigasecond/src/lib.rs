extern crate chrono;

use chrono::*;



// Returns a UTC DateTime one billion seconds after start.

pub fn after(start: DateTime<UTC>) -> DateTime<UTC> {
    let one_billion_seconds = Duration::seconds(1000000000);
    start + one_billion_seconds 
}