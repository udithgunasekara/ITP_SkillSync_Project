package BackEnd.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor

public class OrdersDTO {
    private long orderId;
    private String orderStatus;
    private String orderDate;
    private String orderDueDate;
}
