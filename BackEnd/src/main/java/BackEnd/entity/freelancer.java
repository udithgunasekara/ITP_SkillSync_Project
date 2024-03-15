package BackEnd.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "freelancer" , schema = "skillsync_db")
public class freelancer {
    @Id
    private Long id;
    private String fName;
    private String lName;
    private String email;
    private Date dob;
    private String NIC;
    private Long phoneNumber;

    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
