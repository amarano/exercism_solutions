import java.util.Iterator;
import java.util.List;
import java.util.Spliterator;
import java.util.Spliterators;
import java.util.function.BiConsumer;
import java.util.function.BiFunction;
import java.util.stream.Collectors;
import java.util.stream.Stream;
import java.util.stream.StreamSupport;

public class Hamming {
    public static int compute(String a, String g) throws IllegalArgumentException {

        Stream<Integer> aStream = a.chars().boxed();
        Stream<Integer> gStream = g.chars().boxed();

        Stream<Boolean> zipped = Zip(aStream, gStream, (x, y) -> x == y);
        return (int) zipped.filter(x -> !x).count();
    }

    public static <T1, T2, T> Stream<T> Zip(Stream<T1> stream1, Stream<T2> stream2, BiFunction<T1, T2, T> func){

        Iterator<T1> iterator1 = stream1.iterator();
        Iterator<T2> iterator2 = stream2.iterator();
        Iterator<T> iterator = new Iterator<T>() {
            @Override
            public boolean hasNext() {
                if (iterator1.hasNext() && iterator2.hasNext())
                    return true;
                if (iterator1.hasNext() || iterator2.hasNext())
                    throw new IllegalArgumentException();
                return false;
            }

            @Override
            public T next() {
                return func.apply(iterator1.next(), iterator2.next());
            }
        };

        return StreamSupport.stream(Spliterators.spliteratorUnknownSize(iterator, Spliterator.ORDERED), false);
    }
}