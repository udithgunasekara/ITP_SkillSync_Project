package BackEnd.repository;

import BackEnd.entity.GigImages;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GigImageRepo extends JpaRepository<GigImages, Long> {
}
