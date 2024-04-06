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

    @Column(name = "gig_image_path")
    private String gigImagePath;

    @ManyToOne
    @JoinColumn(name = "gigId")
    private FreelancerGigs gigId;

}
