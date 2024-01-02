# Bài tập tuần 1
Bài 1: Tạo một hàm TypeScript nhận vào một mảng các số nguyên và trả về tổng của chúng.

Bài 2: Định nghĩa một interface Person có các trường name (string), age (number), và email (string). Sau đó, tạo một hàm nhận vào một đối tượng thuộc interface Person và in ra thông tin của người đó.

Bài 3: Viết một hàm generic nhận vào một mảng và trả về phần tử đầu tiên của mảng đó.

Bài 4: Định nghĩa một enum Color với các giá trị là RED, GREEN, và BLUE. Tạo một hàm nhận vào một giá trị của enum và in ra tên của màu đó.

Bài 5: Tạo một lớp Rectangle có các thuộc tính là chiều dài và chiều rộng. Thêm một phương thức tính diện tích của hình chữ nhật. Sau đó tính diện tích của 1 hình chữ nhật bất kỳ

Bài 6: Viết một decorator để log thông tin mỗi khi một phương thức của một lớp được gọi.

Bài 7: Tạo một hàm sử dụng Promise để gọi một API và trả về dữ liệu sau khi gọi xong. (Có thể sử dụng json-server để tạo API và node-fetch để thực hiện các yêu cầu HTTP. https://github.com/typicode/json-server)

Bài 8: Tạo một module chia sẻ các hàm tiện ích như tính giai thừa, kiểm tra số nguyên tố. Sau đó, sử dụng các hàm này trong một file TypeScript khác

Bài 9: Cho một danh sách các sản phẩm với các thuộc tính như sau:

type Product = {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

Tạo một danh sách sản phẩm (productsList) chứa ít nhất 5 sản phẩm với các thuộc tính tương ứng.
Sử dụng reduce để tính tổng giá trị (price * quantity) của tất cả sản phẩm trong danh sách.
Sử dụng filter để lọc ra các sản phẩm có giá lớn hơn 100.
Sử dụng map để tạo một mảng mới chứa các đoạn mô tả sử dụng template literals, ví dụ: “Sản phẩm [name] có giá [price] đồng và còn [quantity] sản phẩm.”
Sử dụng reduce để tính tổng số lượng của tất cả các sản phẩm có giá dưới 100.
Tạo một hàm getDiscountedProducts nhận vào một danh sách sản phẩm và một tỉ lệ giảm giá, trả về một danh sách sản phẩm mới có giá giảm theo tỉ lệ đã cho.
Bài 10: Xây dựng ứng dụng game Tic Tac Toe bằng Typescript