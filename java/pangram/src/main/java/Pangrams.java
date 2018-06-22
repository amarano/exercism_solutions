import java.util.Set;
import java.util.stream.Collectors;

/**
 * Created by Angelo on 8/5/2016.
 */
public class Pangrams {
    public static Boolean isPangram(String s){
        Set<Character> set = s.
                chars()
                .filter(Character::isAlphabetic)
                .mapToObj(i -> (char)i)
                .map(Character::toLowerCase)
                .collect(Collectors.toSet());

        return set.size() >= 26;
    }
}