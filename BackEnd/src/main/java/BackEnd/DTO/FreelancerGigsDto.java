package BackEnd.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor

public class FreelancerGigsDto {
    private long gigId;
    private String gigTitle;
    private String gigDescription;
    private String gigCategory;
}
