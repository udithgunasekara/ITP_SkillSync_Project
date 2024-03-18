package BackEnd.service;

import BackEnd.DTO.OrdersDTO;

import java.util.List;

public interface OrderService {
    OrdersDTO createOrder(OrdersDTO ordersDto);
    OrdersDTO getOrderById(long orderId);
    List<OrdersDTO> getAllOrders();
    void deleteOrder(long orderId);
}
