package BackEnd.DTO;

import BackEnd.entity.UserCredential;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class TicketDto {
    private Long id;
//  private byte[] attachments;
    private String relatedTo;
    private String Subject;
    private String Description;
    private UserCredential user;
    private LocalDateTime createdTime;
    private LocalDateTime updatedTime;
    private String status;
}
