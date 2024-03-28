package BackEnd.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;

@Entity
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "freelancer" )
public class Freelancer {
    @Id
    @GeneratedValue(strategy = jakarta.persistence.GenerationType.IDENTITY)
    private Long id;
    private String lastName;
    private String email;
    private String dob;
    private Long phone;
    private String firstName;
    private String userName;
    private String password;
    private String nic;
    @CreationTimestamp
    @Column(nullable = false)
    private LocalDate created_at;

}
