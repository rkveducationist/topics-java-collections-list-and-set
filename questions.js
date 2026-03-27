const questions = [

/* =========================
MCQ QUESTIONS
========================= */

{
type:"mcq",
question:"Which interface allows duplicate elements?",
options:["List","Set","Map","Queue"],
answer:"List",
hint:"Duplicates allowed"
},

{
type:"mcq",
question:"Which class implements List interface?",
options:["ArrayList","HashSet","TreeSet","HashMap"],
answer:"ArrayList",
hint:"Dynamic array"
},

{
type:"mcq",
question:"Does ArrayList allow duplicates?",
options:["Yes","No","Sometimes","Depends"],
answer:"Yes",
hint:"Duplicate values allowed"
},

{
type:"mcq",
question:"Which collection does not allow duplicates?",
options:["Set","List","ArrayList","Vector"],
answer:"Set",
hint:"Unique elements only"
},

{
type:"mcq",
question:"Which Set maintains insertion order?",
options:["LinkedHashSet","HashSet","TreeSet","ArrayList"],
answer:"LinkedHashSet",
hint:"Order preserved"
},

{
type:"mcq",
question:"Which Set sorts elements automatically?",
options:["TreeSet","HashSet","LinkedHashSet","ArrayList"],
answer:"TreeSet",
hint:"Sorted order"
},

{
type:"mcq",
question:"Which Set does not maintain order?",
options:["HashSet","TreeSet","LinkedHashSet","ArrayList"],
answer:"HashSet",
hint:"Random order"
},

{
type:"mcq",
question:"Which method is used to add element in ArrayList?",
options:["add()","insert()","put()","push()"],
answer:"add()",
hint:"Common method"
},

{
type:"mcq",
question:"Which method is used to get element from ArrayList?",
options:["get()","fetch()","retrieve()","show()"],
answer:"get()",
hint:"Index-based"
},

{
type:"mcq",
question:"Which collection is best for storing unique sorted data?",
options:["TreeSet","ArrayList","HashSet","LinkedList"],
answer:"TreeSet",
hint:"Sorted + unique"
},

/* =========================
CODING QUESTIONS
========================= */

{
type:"code",
question:"Create an ArrayList and add elements and print them",

required:["arraylist","add","system.out.println"],

hint:"Use ArrayList<Integer>",

solution:`import java.util.*;

class Demo {
  public static void main(String[] args){
    ArrayList<Integer> list = new ArrayList<>();

    list.add(10);
    list.add(20);
    list.add(30);

    System.out.println(list);
  }
}`
},

{
type:"code",
question:"Create an ArrayList and access elements using get()",

required:["arraylist","get","system.out.println"],

hint:"Use list.get(index)",

solution:`import java.util.*;

class Demo {
  public static void main(String[] args){
    ArrayList<String> list = new ArrayList<>();

    list.add("A");
    list.add("B");

    System.out.println(list.get(0));
  }
}`
},

{
type:"code",
question:"Create ArrayList of objects (Student) and print names",

required:["class","arraylist","new","system.out.println"],

hint:"Create class Student",

solution:`import java.util.*;

class Student {
  String name;

  Student(String name){
    this.name = name;
  }
}

class Demo {
  public static void main(String[] args){
    ArrayList<Student> list = new ArrayList<>();

    list.add(new Student("Ravi"));
    list.add(new Student("John"));

    for(Student s : list){
      System.out.println(s.name);
    }
  }
}`
},

{
type:"code",
question:"Create HashSet and add elements and print them",

required:["hashset","add","system.out.println"],

hint:"No duplicates",

solution:`import java.util.*;

class Demo {
  public static void main(String[] args){
    HashSet<Integer> set = new HashSet<>();

    set.add(10);
    set.add(20);
    set.add(10);

    System.out.println(set);
  }
}`
},

{
type:"code",
question:"Create LinkedHashSet and show insertion order",

required:["linkedhashset","add","system.out.println"],

hint:"Maintains order",

solution:`import java.util.*;

class Demo {
  public static void main(String[] args){
    LinkedHashSet<Integer> set = new LinkedHashSet<>();

    set.add(30);
    set.add(10);
    set.add(20);

    System.out.println(set);
  }
}`
},

{
type:"code",
question:"Create TreeSet and show sorted output",

required:["treeset","add","system.out.println"],

hint:"Sorted order",

solution:`import java.util.*;

class Demo {
  public static void main(String[] args){
    TreeSet<Integer> set = new TreeSet<>();

    set.add(30);
    set.add(10);
    set.add(20);

    System.out.println(set);
  }
}`
},

{
type:"code",
question:"Compare ArrayList and HashSet behavior (duplicates)",

required:["arraylist","hashset","add","system.out.println"],

hint:"List allows duplicates, Set does not",

solution:`import java.util.*;

class Demo {
  public static void main(String[] args){

    ArrayList<Integer> list = new ArrayList<>();
    list.add(10);
    list.add(10);

    HashSet<Integer> set = new HashSet<>();
    set.add(10);
    set.add(10);

    System.out.println("ArrayList: " + list);
    System.out.println("HashSet: " + set);
  }
}`
}

]