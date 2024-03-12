package BackEnd.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "Public Notices" , schema = "skillsync_db")
public class publicNotices {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Lob
    @Column(columnDefinition = "LONGBLOB")
    private byte[] images;
    @Column(nullable = false)
    private String title;
    private String description;
    private String audience;
    @CreationTimestamp
    private LocalDateTime datecreate;
    @UpdateTimestamp
    private LocalDateTime lastupdated;
}
