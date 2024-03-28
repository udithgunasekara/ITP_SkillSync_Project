/*
package BackEnd.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;


import java.math.BigDecimal;
import java.time.LocalDate;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name="payment_transactions", schema="skillsync_db")
public class paymentTransaction {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "freelancer_id")
    private Long freelancerId;

    @Column(name = "client_id")
    private Long clientId;

    private BigDecimal amount;

    @Column(name = "payment_method")
    private String paymentMethod;

    @Column(name = "transaction_date")
    private LocalDate transactionDate;

    @Enumerated(EnumType.STRING)
    private String status;



}

*/
