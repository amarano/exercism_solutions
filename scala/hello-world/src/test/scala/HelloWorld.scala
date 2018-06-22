/**
  * Created by Angelo on 9/6/2016.
  */
object HelloWorld {
  def hello(name : String = "") : String = name match {
    case "" => "Hello, World!"
    case _ => "Hello, $s!".format(name)
  }

}