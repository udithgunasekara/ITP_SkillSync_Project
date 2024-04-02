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
@Table(name = "freelancer_gigs")

public class FreelancerGigs {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long gigId;

    @Column(name = "gig_title")
    private String gigTitle;

    @Column(name = "gig_description")
    private String gigDescription;

    @Column(name = "gig_category")
    private String gigCategory;

}
