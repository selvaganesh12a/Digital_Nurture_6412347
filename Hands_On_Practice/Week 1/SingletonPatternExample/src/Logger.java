public class Logger {
    // creating the private static instance named instance for the Logger class
    private static Logger instance;

    // private constructor for the Logger class
    private Logger(){
        System.out.println("Logger is Initialized");
    }

    // method to create the instance for the Logger class
    public static Logger getInstance(){
        if(instance == null){
            instance = new Logger();
        }
        return instance;
    }

    // method to display the log message in the console window
    public void log(String message){
        System.out.println("Log: " + message);
    }
}
