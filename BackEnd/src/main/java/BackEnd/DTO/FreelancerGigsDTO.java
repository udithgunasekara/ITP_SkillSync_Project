package BackEnd.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class FreelancerGigsDTO {
    private Long gigId;
    private String gigTitle;
    private String gigDescription;
    private String gigCategory;
}
