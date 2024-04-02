package BackEnd.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class RatingDto {
    private Long id;
    private byte[] attachments;
    private String userID;
    private Float rating;
    private Integer projectID;
    private String review;
}

