package src.main.scala

/**
  * Created by Angelo on 9/16/2016.
  */
object Hamming {
  def compute(s: String, s1: String) : Int = {
    if (s.length() != s1.length()){
      throw new IllegalArgumentException()
    }
    s.zip(s1).map(t => t._1 != t._2).count(x => x)
  }


}