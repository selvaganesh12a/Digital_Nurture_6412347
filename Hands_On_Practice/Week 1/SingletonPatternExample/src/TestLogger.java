public class TestLogger {
    public static void main(String[] args) {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.log("Logger1 Initiated");
        logger2.log("Logger2 Initiated");

        if(logger1 == logger2){
            System.out.println("Both logger instances are the same (Singleton works).");
        }else{
            System.out.println("Different instances (Singleton failed).");
        }
    }
}
