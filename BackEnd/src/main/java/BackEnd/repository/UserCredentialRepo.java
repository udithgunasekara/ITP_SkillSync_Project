package BackEnd.repository;

import BackEnd.entity.UserCredential;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserCredentialRepo extends JpaRepository<UserCredential, Long> {
}
