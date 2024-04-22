package BackEnd.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;


@Entity
@Setter
@Getter
//@NoArgsConstructor
//@AllArgsConstructor
@Table(name = "freelancer_skills")
public class FreelancerSkills {
    @Id
    private String username;
    private String skill;

    public FreelancerSkills(String username, String skill) {
        this.username = username;
        this.skill = skill;
    }

    public FreelancerSkills() {
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getSkill() {
        return skill;
    }

    public void setSkill(String skill) {
        this.skill = skill;
    }
}