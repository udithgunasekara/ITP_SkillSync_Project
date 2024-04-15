package BackEnd.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.UpdateTimestamp;

import java.time.LocalDateTime;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "Ticket Responses",schema = "skillsync_db")
public class ticketResponses {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String Subject;
    private String response;

    @ManyToOne
    @JoinColumn(name = "ticket_id")
    @JsonIgnore
    private Ticket ticket;

    @CreationTimestamp
    @Column(nullable = false)
    private LocalDateTime createdTime;
}
