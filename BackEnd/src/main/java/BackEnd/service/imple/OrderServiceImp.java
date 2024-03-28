package BackEnd.service.imple;

import BackEnd.DTO.OrdersDTO;
import BackEnd.Mapper.OrderMapper;
import BackEnd.entity.Orders;
import BackEnd.repository.OrdersRepo;
import BackEnd.service.OrderService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class OrderServiceImp implements OrderService {

    private final OrdersRepo ordersRepo;
    @Override
    public OrdersDTO createOrder(OrdersDTO ordersDto) {
        Orders orders = OrderMapper.mapToOrders(ordersDto);
        Orders savedOrder = ordersRepo.save(orders);
        return OrderMapper.mapToOrdersDto(savedOrder);
    }

    @Override
    public OrdersDTO getOrderById(long orderId) {
        Orders orders = ordersRepo.findById(orderId).
                orElseThrow(() -> new RuntimeException("Order not found"));
        return OrderMapper.mapToOrdersDto(orders);
    }

    @Override
    public List<OrdersDTO> getAllOrders() {
        List<Orders> orders = ordersRepo.findAll();
        return orders.stream().map(OrderMapper::mapToOrdersDto).
                collect(Collectors.toList());
    }

    @Override
    public void deleteOrder(long orderId) {
        Orders orders = ordersRepo.findById(orderId).
                orElseThrow(() -> new RuntimeException("Order not found with id : " + orderId));
        ordersRepo.delete(orders);
    }
}
