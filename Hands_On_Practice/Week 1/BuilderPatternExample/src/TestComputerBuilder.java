public class TestComputerBuilder {
    public static void main(String[] args) {
        Computer gamingPC = new Computer.Builder()
                .setCPU("Intel i9")
                .setRAM("32GB")
                .setStorage("1TB SSD")
                .setGraphicsCard(true)
                .build();

        System.out.println("Gaming PC Configuration: ");
        gamingPC.showSpecs();

        Computer officePC = new Computer.Builder()
                .setCPU("Intel i5")
                .setRAM("8GB")
                .setStorage("512GB SSD")
                .setGraphicsCard(false)
                .build();

        System.out.println("\nOffice PC Configuration:");
        officePC.showSpecs();
    }
}
