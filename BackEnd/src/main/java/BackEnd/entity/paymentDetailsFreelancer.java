package BackEnd.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "PaymentDetailsFreelancer", schema = "skillsync_db")
public class paymentDetailsFreelancer {
    @Id
    private Long id;
    private String fullName;
    private String country;
    private String state;
    private String address;
    private String city;
    private Integer postalCode;

    @Column(name = "paypal_address", unique = true)
    private String paypalAddress;

    // Constructor without ID
    public paymentDetailsFreelancer(String fullName, String country, String state, String address, String city, Integer postalCode, String paypalAddress) {
        this.fullName = fullName;
        this.country = country;
        this.state = state;
        this.address = address;
        this.city = city;
        this.postalCode = postalCode;
        this.paypalAddress = paypalAddress;
    }

}
