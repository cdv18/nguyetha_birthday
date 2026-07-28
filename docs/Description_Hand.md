Cải tiến hiển thị quả cầu 3D được cấu thành từ nhiều hình ảnh và điều khiển bằng cử chỉ tay thông qua camera.

MỤC TIÊU:
- Người dùng có thể xoay quả cầu, zoom, dàn trải ảnh, thu ảnh về quả cầu, trỏ và mở một ảnh cụ thể.
- Giao diện phải mượt, trực quan, ít nhận diện nhầm và phù hợp với người dùng lần đầu.
- Mỗi thời điểm chỉ được thực hiện một thao tác chính.

CÁC CỬ CHỈ:

1. READY:
- Một bàn tay mở hướng về camera.
- Tay phải ổn định ít nhất 300 ms.
- Hiển thị con trỏ tay khi nhận diện thành công.

2. XOAY QUẢ CẦU:
- Người dùng nắm nhẹ một bàn tay rồi kéo sang trái, phải, lên hoặc xuống.
- Vị trí bắt đầu nắm là điểm neo.
- Khi mở tay, thả quả cầu và cho phép xoay theo quán tính.
- Quán tính phải giảm dần.
- Áp dụng dead zone để loại bỏ rung tay.
- Giới hạn góc xoay theo chiều dọc.

3. ZOOM MỘT TAY:
- Dùng ngón cái và ngón trỏ.
- Tăng khoảng cách hai ngón để zoom in.
- Giảm khoảng cách để zoom out.
- Tính zoom dựa trên tỷ lệ thay đổi khoảng cách so với lúc bắt đầu.
- Có giới hạn zoom tối thiểu và tối đa.
- Zoom phải được ưu tiên hơn xoay khi pinch đang hoạt động.

4. ZOOM HAI TAY:
- Đưa hai tay ra xa để zoom in.
- Đưa hai tay lại gần để zoom out.
- Zoom hai tay được ưu tiên hơn các thao tác một tay.

5. TRỎ ẢNH:
- Duỗi ngón trỏ và co các ngón còn lại.
- Tạo con trỏ hoặc tia chỉ hướng từ đầu ngón trỏ.
- Ảnh đang được trỏ phải phóng lớn nhẹ, sáng viền và dịch ra ngoài quả cầu.
- Chỉ coi là hover khi con trỏ ổn định trên ảnh trong 500 đến 700 ms.

6. MỞ ẢNH:
- Khi một ảnh đang được hover, người dùng chụm ngón cái và ngón trỏ để mở.
- Có thể hỗ trợ dwell selection bằng cách giữ con trỏ trên ảnh khoảng 1 giây.
- Khi mở ảnh, dừng quả cầu, đưa ảnh ra giữa màn hình và làm mờ nền.
- Trong chế độ xem ảnh, cho phép pinch để zoom, nắm kéo để pan và vuốt ngang để đổi ảnh.

7. DÀN TRẢI ẢNH:
- Sử dụng hai lòng bàn tay.
- Bắt đầu với hai tay gần nhau, sau đó kéo ra hai bên.
- Khoảng cách hai tay điều khiển mức độ dàn trải.
- Chỉ hoàn tất chuyển sang bố cục lưới hoặc phẳng khi tiến trình vượt 60 đến 70%.
- Nếu người dùng thả tay trước ngưỡng, trả ảnh về quả cầu.

8. THU ẢNH VỀ QUẢ CẦU:
- Trong chế độ dàn trải, kéo hai tay từ xa lại gần.
- Các ảnh phải chuyển động mượt về vị trí trên quả cầu.

9. DỪNG:
- Một lòng bàn tay mở hướng về camera và giữ 300 đến 500 ms.
- Dừng quán tính và hủy thao tác chuyển đổi chưa hoàn tất.

10. RESET:
- Hai lòng bàn tay mở hướng về camera và giữ 1,5 giây.
- Đóng ảnh, thu ảnh về quả cầu, đặt lại góc xoay và mức zoom.
- Hiển thị vòng đếm ngược trước khi reset.

STATE MACHINE:
- Các trạng thái chính gồm IDLE, READY, ROTATING, ZOOMING,
  POINTING, IMAGE_VIEWING, SPREADING và RESETTING.
- Mỗi thời điểm chỉ có một trạng thái thao tác chính.
- Áp dụng cooldown 200 đến 350 ms khi chuyển giữa các thao tác.
- Không chuyển ngay từ thao tác hai tay sang một tay nếu camera tạm mất dấu một tay.

CHỐNG RUNG:
- Dùng One Euro Filter, EMA hoặc Kalman Filter để làm mượt landmark.
- Áp dụng dead zone cho xoay và zoom.
- Dùng hysteresis với ngưỡng bắt đầu và kết thúc khác nhau.
- Yêu cầu cử chỉ ổn định trong nhiều frame liên tiếp.
- Cho phép mất dấu tay ngắn dưới 500 ms mà không hủy trạng thái.
- Tất cả ngưỡng phải được đặt trong một object cấu hình.

PHẢN HỒI GIAO DIỆN:
- Hiển thị con trỏ tay.
- Hiển thị tên hoặc icon cử chỉ đang hoạt động.
- Highlight đối tượng đang hover.
- Hiển thị vòng tiến trình với cử chỉ giữ.
- Có animation easing và quán tính.
- Có nút UI thay thế cho đóng ảnh, reset và bật/tắt camera.

YÊU CẦU KỸ THUẬT:
- Tách riêng module nhận diện tay, gesture classifier, state machine,
  xử lý quả cầu 3D và giao diện phản hồi.
- Không để logic nhận diện tay phụ thuộc trực tiếp vào rendering.
- Viết code dễ mở rộng, có chú thích và cấu hình rõ ràng.
- Xử lý quyền truy cập camera, mất camera, thiếu ánh sáng và không phát hiện tay.
- Tối ưu hiệu năng để animation duy trì FPS ổn định.
- Cung cấp dữ liệu ảnh mẫu để có thể chạy thử ngay.

Hãy sinh đầy đủ cấu trúc dự án, mã nguồn, hướng dẫn cài đặt,
hướng dẫn chạy và mô tả cách điều chỉnh độ nhạy của từng cử chỉ.
