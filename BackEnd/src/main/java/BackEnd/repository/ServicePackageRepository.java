package BackEnd.repository;

import BackEnd.entity.ServicePackages;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ServicePackageRepository extends JpaRepository<ServicePackages, Long> {
}
