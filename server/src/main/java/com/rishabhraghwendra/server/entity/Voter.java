package com.rishabhraghwendra.server.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name = "voters")
@Getter
@Setter
@ToString
@NoArgsConstructor
@AllArgsConstructor
public class Voter {
    @Id
    @Column(name = "voter_id")
    private String voterId;
}
