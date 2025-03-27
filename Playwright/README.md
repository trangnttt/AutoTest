# Giai đoạn 1: Học TypeScript cơ bản
1. Biến, kiểu dữ liệu (string, number, boolean, array, tuple, enum, any, unknown)
2. Kiểu interface và type
3. Hàm và kiểu dữ liệu trả về
4. Lập trình hướng đối tượng (OOP) với TypeScript: class, constructor, inheritance
5. Xử lý bất đồng bộ (async/await, Promise): dùng gọi API
6. Module và import/export
=> Thực hành với một dự án nhỏ

# Giai đoạn 2: Làm quen với Playwright
1. Cài đặt Playwright
2. Cài đặt Node.js (nếu chưa có): Node.js Download
3. Cài đặt Playwright: npm init playwright@latest
4. Làm quen với Playwright
    Chạy thử một test case cơ bản
    Hiểu về các locator: page.locator(), getByRole(), getByText(), getByPlaceholder()
    Tương tác với các element: click(), fill(), type(), hover()
    Chạy test trên các browser khác nhau (Chromium, Firefox, WebKit)
# Giai đoạn 3: Viết Test Script nâng cao
1. Assertions và reporting
    Dùng expect() để kiểm tra trạng thái UI
    Thêm báo cáo (Allure, HTML Report)
2. Xử lý nâng cao
    Chạy test song song (parallel tests)
    Mock API trong Playwright
    Xử lý popup, iframe, file download/upload
3. Data-driven testing
    Sử dụng test.each() để chạy test với nhiều bộ dữ liệu khác nhau
# Giai đoạn 4: Xây dựng Framework & CI/CD
1. Tổ chức code theo mô hình Page Object Model (POM)
    Tạo class cho từng trang (LoginPage.ts, HomePage.ts)
    Tái sử dụng code giữa các test case
2. Tích hợp với CI/CD
    Chạy test trên GitHub Actions hoặc Jenkins
    Xuất báo cáo test tự động
# Giai đoạn 5: Tối ưu & Nâng cao
1. Viết test nâng cao
    Viết test cho ứng dụng mobile/web hybrid
    Chạy test trên cloud (Sauce Labs, BrowserStack)
2. Performance testing với Playwright
    Đo thời gian tải trang, request API