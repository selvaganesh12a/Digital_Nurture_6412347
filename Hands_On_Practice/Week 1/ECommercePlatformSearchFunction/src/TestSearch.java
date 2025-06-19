public class TestSearch {
    public static void main(String[] args) {
        Product[] products = {
                new Product(1, "Shoes", "Footwear"),
                new Product(2,"Laptop", "Electronics"),
                new Product(3,"Shirt", "Clothing"),
                new Product(4, "Camera", "Electronics"),
        };

        Product result1 = Search.linearSearch(products,"Camera");
        System.out.println(result1 != null ? result1.productName + " found using Linear Search" : "Not Found");

        Product result2 = Search.binarySearch(products,"Laptop");
        System.out.println(result2 != null ? result2.productName + " found using Binary Search" : "Not Found");
    }
}
