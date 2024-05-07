package BackEnd.DTO;

import jakarta.persistence.Column;
import jakarta.persistence.Lob;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class BadgeDTO {
    private Long badgeId;
    private String badgeNAme;
    private byte[] badge;
    private Long examId;
}
