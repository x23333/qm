package song.visitMode;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * Created by Song on 2016/10/28.
 * 访问者模式
 */
//抽象元素类
abstract class Element{
    //业务逻辑
    public abstract void doSomething();
    //定义外部访问接口
    public abstract void accept(Ivisitor visitor);
}
/***************************************************************/
//具体的元素类1
class ConcreteClass1 extends  Element{
    @Override
    public void doSomething() {
        System.out.println("这是Element1");
    }

    @Override
    public void accept(Ivisitor visitor) {
        visitor.visit(this);
    }
}
class ConcreteClass2 extends  Element{
    @Override
    public void doSomething() {
        System.out.println("这是Element2");
    }

    @Override
    public void accept(Ivisitor visitor) {
        visitor.visit(this);
    }
}
/***************************************************************/
//访问者接口
interface Ivisitor{
    //通过重载定义可以访问哪些对象
    public void visit(ConcreteClass1 concreteClass);
    public void visit(ConcreteClass2 concreteClass);
}
//具体的访问者
class Visitor implements Ivisitor{
    public void visit(ConcreteClass1 concreteClass) {
        //定义业务逻辑
        concreteClass.doSomething();
    }

    public void visit(ConcreteClass2 concreteClass) {
        //定义业务逻辑
        concreteClass.doSomething();
    }
}
/***************************************************************/
//生成不同的Element对象，用于测试
class ElementGenerator{
    public static List<Element> generate(int num){
        List<Element> list = new ArrayList<Element>();
        Random rand  = new Random();
        while ((num--)>0){
            if(rand.nextBoolean()){
                list.add(new ConcreteClass1());
            }else {
                list.add(new ConcreteClass2());
            }
        }
        return list;
    }
}
/***************************************************************/
//场景类测试
public class Client {
    public static void main(String [] args){
        List<Element> list = ElementGenerator.generate(10);
        Ivisitor visitor = new Visitor();
        for(Element element:list){
            element.accept(visitor);
        }
    }
}