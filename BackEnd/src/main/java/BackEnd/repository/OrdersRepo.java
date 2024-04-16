package BackEnd.repository;

import BackEnd.entity.FreelancerGigs;
import BackEnd.entity.Orders;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface OrdersRepo extends JpaRepository<Orders, Long> {
    //@Query("SELECT o FROM Orders o JOIN FreelancerGigs g ON o.orderGigId = g.gigId WHERE g.freelancerUsername = ?1")
   //List<Orders>  findAllOrdersByFreelancer (String freelancerUsername);
}
