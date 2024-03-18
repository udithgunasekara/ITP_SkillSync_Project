package BackEnd.Mapper;

import BackEnd.DTO.OrdersDTO;
import BackEnd.entity.Orders;

public class OrderMapper {
    public static OrdersDTO mapToOrdersDto(Orders orders){
        return new OrdersDTO(
                orders.getOrderId(),
                orders.getOrderStatus(),
                orders.getOrderDate(),
                orders.getOrderDueDate()
        );
    }
    public static Orders mapToOrders(OrdersDTO ordersDto){
        return new Orders(
                ordersDto.getOrderId(),
                ordersDto.getOrderStatus(),
                ordersDto.getOrderDate(),
                ordersDto.getOrderDueDate()
        );
    }
}
