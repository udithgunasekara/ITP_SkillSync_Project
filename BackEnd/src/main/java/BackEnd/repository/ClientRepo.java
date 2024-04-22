package BackEnd.repository;

import BackEnd.entity.Client;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface ClientRepo extends JpaRepository<Client, Long> {
    Client findByUserName(String userName);
}
