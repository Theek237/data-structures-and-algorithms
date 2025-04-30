import java.util.ArrayList;

public class ArrayOperations{
    public static void main(String[] args){
        ArrayList<String> stringArray = new ArrayList<>(); //create the array

        //add elements
        stringArray.add("a");
        stringArray.add("b");
        stringArray.add("c");
        stringArray.add("d");

        //add - add to the end
        stringArray.add("e"); //O(1)

        //remove - delete from end
        stringArray.remove(stringArray.size()-1); //O(1)

        //add - add to the begining
        stringArray.add(0,"z"); //O(n)

        System.out.println(stringArray);

        //add - add to specific position
        stringArray.add(2,"boo");

        System.out.println(stringArray);
    }
}