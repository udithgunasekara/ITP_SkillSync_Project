package BackEnd.entity;

import jakarta.persistence.*;

import java.time.LocalDateTime;

@Entity
@Table(name = "payment_history", schema = "skillsync_db")
public class paymentHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JoinColumn(name = "transaction_id", nullable = false)
    private String transaction;

    @JoinColumn(name = "action_by", nullable = false)
    private String actionBy;

    @Column(name = "action_date")
    private LocalDateTime actionDate;

    @Column(name = "action_description")
    private String actionDescription;
}
