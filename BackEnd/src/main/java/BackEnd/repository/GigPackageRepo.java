package BackEnd.repository;

import BackEnd.entity.GigPackages;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GigPackageRepo extends JpaRepository<GigPackages, Long> {
}
