/**
  * Created by Angelo on 9/6/2016.
  */

class Bob {
  def hey(s: String) : String = {
    if (s.trim().length() == 0) return  "Fine. Be that way!"
    if (s.forall(x => (x.isUpper || !x.isLetter) && s.count(x => x.isLetter) > 0)) return "Whoa, chill out!"
    if (s.endsWith("?")) return "Sure."
    "Whatever."
  }
}