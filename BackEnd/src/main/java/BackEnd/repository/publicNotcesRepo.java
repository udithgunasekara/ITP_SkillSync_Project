package BackEnd.repository;

import BackEnd.entity.publicNotices;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;

public interface publicNotcesRepo extends JpaRepository<publicNotices,Long>{

    @Query(value = "select * from `public notices` where audience = :audience",nativeQuery = true)
    List<publicNotices> findByAudience(String audience);

}
