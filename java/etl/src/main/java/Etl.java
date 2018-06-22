import java.util.*;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Etl {
    public Map<String, Integer> transform(Map<Integer, List<String>> old) {

        Stream<HashMap.SimpleImmutableEntry<String, Integer>> entries =
                old.entrySet().stream().flatMap(e -> e.getValue().stream().map(v -> new HashMap.SimpleImmutableEntry<String, Integer>(v.toLowerCase(), e.getKey())));

        Map<String, Integer> newMap = new HashMap<String, Integer>();
        entries.forEach(e -> newMap.put(e.getKey(), e.getValue()));
        return newMap;
    }
}