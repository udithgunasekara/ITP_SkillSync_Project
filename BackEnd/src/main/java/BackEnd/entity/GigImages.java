package BackEnd.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "gig_images")
public class GigImages {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "gig_image_id")
    private Long gigImageId;

    private String gigImagePath;

    @ManyToOne
    @JoinColumn(name = "gig_id")
    private FreelancerGigs gigId;

}
