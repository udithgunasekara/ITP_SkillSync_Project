package BackEnd.repository;

import BackEnd.entity.GigImages;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface GigImageRepo extends JpaRepository<GigImages, Long> {
    @Query(value = "select * from gig_images where gig_id = :gigId", nativeQuery = true)
    List<GigImages> findByGigId(Long gigId);
}
