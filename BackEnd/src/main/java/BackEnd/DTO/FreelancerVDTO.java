package BackEnd.DTO;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;

import java.time.LocalDate;

@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class FreelancerVDTO {
    private Long id;
    private String lastName;
    private String email;
    private String dob;
    private Long phone;
    private String firstName;
    private String userName;
    private String password;
    private String nic;
    private LocalDate created_at;
}
