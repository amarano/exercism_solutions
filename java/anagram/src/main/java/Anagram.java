import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

public class Anagram {
    private String word;

    public Anagram(String s){
        word = s;
    }

    public List<String> match(List<String> string) {
        return string
                .parallelStream()
                .filter(s -> alphabetize(s).toLowerCase().equals(alpha()) && !s.toLowerCase().equals(word.toLowerCase()))
                .collect(Collectors.toList());
    }

    private String alpha(){
        return alphabetize(this.word);
    }

    private String alphabetize (String s){
        char [] chars = s.toLowerCase().toCharArray();
        Arrays.sort(chars);
        return new String(chars);
    }
}