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
@Table(name = "badge")
public class Badge {
    @Id
    private Long badgeId;
    private String badgeNAme;

    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] badge;

    @Column(name = "exam_fk")
    private Long examId;
}
