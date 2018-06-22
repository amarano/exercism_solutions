import java.util.Arrays;
import java.util.Map;
import java.util.function.BinaryOperator;
import java.util.stream.Collectors;

public class WordCount {
    public Map<String,Integer> phrase(String word) {
        return Arrays.stream(word.split(" "))
                .map(String::toLowerCase)
                .map(s -> s.replaceAll("[^a-z0-9]", ""))
                .filter(s -> !s.isEmpty())
                .collect(Collectors.toMap(x -> x, v -> 1, (integer, integer2) -> integer + integer2));
    }
}