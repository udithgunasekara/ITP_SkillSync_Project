package BackEnd.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "clients_description")
public class ClientDescription {
    @Id
    private Long clientId;
    @Column(columnDefinition = "TEXT")
    private String Description;

    public ClientDescription() {
    }

    public ClientDescription(Long clientId, String description) {
        this.clientId = clientId;
        Description = description;
    }

    public Long getClientId() {
        return clientId;
    }

    public void setClientId(Long clientId) {
        this.clientId = clientId;
    }

    public String getDescription() {
        return Description;
    }

    public void setDescription(String description) {
        Description = description;
    }
}

