package BackEnd.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "freelancer_description")
public class FreelancerDescription {
    @Id
    private Long freelancerId;
    @Column(columnDefinition = "TEXT")
    private String Description;

    public FreelancerDescription() {
    }

    public Long getFreelancerId() {
        return freelancerId;
    }

    public void setFreelancerId(Long freelancerId) {
        this.freelancerId = freelancerId;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }
}
