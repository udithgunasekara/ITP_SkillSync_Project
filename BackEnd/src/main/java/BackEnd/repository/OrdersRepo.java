package BackEnd.repository;

import BackEnd.entity.FreelancerGigs;
import BackEnd.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface OrdersRepo extends JpaRepository<Orders, Long> {
//    @Query("SELECT o FROM Orders o WHERE o.orderGigId IN (SELECT g.gigId FROM FreelancerGigs g WHERE g.freelancerUsername = :freelancerUsername)")
//    List<Orders> findAllOrdersByFreelancer(@Param("freelancerUsername") String freelancerUsername);
}
