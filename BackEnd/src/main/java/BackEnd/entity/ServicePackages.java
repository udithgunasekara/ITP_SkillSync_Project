package BackEnd.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "service_packages")
public class ServicePackages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long packageId;

    @Column(name = "package_name")
    private String packageName;

    @Column(name = "package_description")
    private String packageDescription;

    @Column(name = "package_price")
    private String packagePrice;

}
