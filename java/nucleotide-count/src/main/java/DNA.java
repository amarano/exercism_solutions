import java.util.*;

public class DNA {

    private Map<Character, Integer> map = new HashMap<>();

    public DNA(String s){

        map.put('A', 0);
        map.put('C', 0);
        map.put('G', 0);
        map.put('T', 0);

        s.chars().mapToObj(i -> (char)i).forEach(x -> {
            if (map.containsKey(x)){
                map.replace(x, map.get(x)+ 1);
            }
        });

    }

    public Map<Character, Integer> nucleotideCounts() {
        return this.map;
    }

    public int count(char a) {
        if (this.map.containsKey(a))
            return this.map.get(a);
        else
            throw new IllegalArgumentException();
    }
}