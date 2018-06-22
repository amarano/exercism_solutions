/**
  * Created by Angelo on 9/16/2016.
  */
class Phrase(phrase: String) {

  def wordCount() : Map[String, Int] = {
    this.phrase.map(x => if (!x.isLetterOrDigit && x != ''') ' ' else x)
                .split(" ")
                .map(x => x.trim().toLowerCase())
                .filterNot(x => x.isEmpty())
                .groupBy(x => x)
                .map(g => (g._1, g._2.length))
  }

}